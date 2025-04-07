import { useState, useCallback } from 'react';
import api from '../api/apiInstance.ts';
import { ApiResponse } from '../models/commonAPIInterface.ts';
import { useLang } from '../context/LanguageContext.tsx';

export const useApi = <T, U = T>(
    url: string,
    method: 'get' | 'post' | 'put' | 'delete',
    mapper?: (data: T) => U
) => {
    const { t } = useLang();
    const [data, setData] = useState<U | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(
        async (body?: any): Promise<U | null> => {
            setLoading(true);
            setError(null);
            try {
                // const response: ApiResponse<T | null> = await api[method]<T>(url, body);

                let response: ApiResponse<T | null>;

                if (method === 'get') {
                    response = await api.get<T>(url, { params: body });
                } else {
                    response = await api[method]<T>(url, body);
                }

                if (response.status === 'success') {
                    const mappedData = mapper ? mapper(response.data as T) : (response.data as U);
                    setData(mappedData ?? null);
                    return mappedData ?? null;
                } else {
                    setError(response.message);
                    return null;
                }
            } catch (err) {
                setError(t.common.error);
                return null;
            } finally {
                setLoading(false);
            }
        },
        [url, method, mapper]
    );

    return { data, loading, error, fetchData };
};
