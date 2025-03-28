import { useState, useCallback } from 'react';
import api from '../api/apiInstance.ts';
import { ApiResponse } from '../models/commonAPIInterface.ts';

export const useApi = <T, U = T>(
    url: string,
    method: 'get' | 'post' | 'put' | 'delete',
    mapper?: (data: T) => U
) => {
    const [data, setData] = useState<U | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(
        async (body?: any) => {
            setLoading(true);
            setError(null);
            try {
                const response: ApiResponse<T | null> = await api[method]<T>(url, body);
                if (response.status === 'success') {
                    const mappedData = mapper ? mapper(response.data as T) : (response.data as U);
                    setData(mappedData ?? null);
                } else {
                    setError(response.message);
                }
            } catch (err) {
                setError('An error occurred while fetching data');
            } finally {
                setLoading(false);
            }
        },
        [url, method, mapper]
    );

    return { data, loading, error, fetchData };
};
