import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { InitialMappedData } from '../models/apiInterface.ts';
import { useInitialize } from '../api/apiService.ts';
import { fallbackInitialMappedData } from '../../data/fallbackInitialData.ts';

export interface InitialInfoContextValue {
    initialInfo: InitialMappedData;
    reloadInitialInfo: () => void;
    isInitialInfoLoading: boolean;
    initialInfoError: string | null;
}

export const InitialInfoContext = createContext<InitialInfoContextValue | null>(null);

export const useInitialInfo = () => {
    const context = useContext(InitialInfoContext);
    if (!context) throw new Error('InitialInfoProvider is missing');
    return context;
};

export const InitialInfoProvider = ({ children }: { children: ReactNode }) => {
    const { loading, error, fetchData } = useInitialize();
    const [initialData, setInitialData] = useState<InitialMappedData>(fallbackInitialMappedData);

    const reload = useCallback(() => {
        fetchData().then((fetched) => {
            if (fetched) {
                setInitialData(fetched);
            }
        });
    }, [fetchData]);

    useEffect(() => {
        console.log('InitialInfoProvider useEffect - fetching...');
        fetchData().then((fetched) => {
            if (fetched) {
                console.log('✅ Fetched data:', fetched);
                setInitialData(fetched);
            } else {
                console.warn('⚠️ Fallback used — fetched is null');
            }
        });
    }, [fetchData]);

    return (
        <InitialInfoContext.Provider
            value={{
                initialInfo: initialData,
                reloadInitialInfo: reload,
                isInitialInfoLoading: loading,
                initialInfoError: error,
            }}
        >
            {children}
        </InitialInfoContext.Provider>
    );
};
