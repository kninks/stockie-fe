export interface ApiResponse<T> {
    status: 'success' | 'error';
    message: string;
    data: T | null;
    error_code?: number;
}
