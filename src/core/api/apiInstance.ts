import axios, { AxiosError, AxiosResponse } from 'axios';
import { ApiResponse } from '../models/commonAPIInterface.ts';

const BASE_URL: string = import.meta.env.SERVER_BASE_URL || 'http://localhost:8000/api/';
const CLIENT_API_KEY: string = import.meta.env.CLIENT_API_KEY || 'stockie-client-secret-key';

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 10000, // Timeout after 10s
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': CLIENT_API_KEY,
    },
});

api.interceptors.request.use(
    (config) => {
        console.log('📤 Axios Request:');
        console.log('➡️ Method:', config.method?.toUpperCase());
        console.log('📝 Headers:', config.headers);
        console.log('📦 Data:', config.data);
        return config;
    },
    (error) => {
        console.error('❌ Request Error:', error);
        return Promise.reject(error);
    }
);

// ✅ Response Interceptor
api.interceptors.response.use(
    (response) => {
        console.log('📥 Axios Response:');
        console.log('✅ Status:', response.status);
        console.log('🌎 URL:', response.config.url);
        console.log('📦 Data:', response.data);
        return response;
    },
    (error) => {
        console.error('❌ Response Error:', error);
        if (error.response) {
            console.error('🔴 Status:', error.response.status);
            console.error('📦 Error Data:', error.response.data);
        }
        return Promise.reject(error);
    }
);

const handleResponse = <T>(response: AxiosResponse<ApiResponse<T>>): ApiResponse<T | null> => {
    if (response.data.status === 'success') {
        return {
            status: 'success',
            message: response.data.message,
            data: response.data.data ?? null,
        };
    }
    return {
        status: 'error',
        message: response.data.message,
        data: null,
        error_code: response.data.error_code,
    };
};

const handleError = (error: unknown): ApiResponse<null> => {
    if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ApiResponse<null>>;
        return {
            status: 'error',
            message: axiosError.response?.data?.message || error.message,
            data: null,
            error_code: axiosError.response?.data?.error_code || 500,
        };
    }
    return {
        status: 'error',
        message: 'An unexpected error occurred',
        data: null,
        error_code: 500,
    };
};

const apiRequest = async <T>(
    method: 'get' | 'post' | 'put' | 'delete',
    url: string,
    data?: any
): Promise<ApiResponse<T | null>> => {
    try {
        const response = await api.request<ApiResponse<T>>({
            method,
            url,
            data,
        });
        return handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
};

export default {
    get: <T>(url: string) => apiRequest<T>('get', url),
    post: <T>(url: string, data: any) => apiRequest<T>('post', url, data),
    put: <T>(url: string, data: any) => apiRequest<T>('put', url, data),
    delete: <T>(url: string) => apiRequest<T>('delete', url),
};
