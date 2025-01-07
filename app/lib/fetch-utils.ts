type FetchOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    body?: any;
    headers?: HeadersInit;
    cache?: RequestCache;
    revalidate?: number;
    tags?: string[];
    auth?: boolean;
};

export class ApiError extends Error {
    constructor(public status: number, message: string) {
        super(message);
        this.name = 'ApiError';
    }
}

export async function fetchApi<T>(
    endpoint: string,
    options: FetchOptions = {}
): Promise<T> {
    const {
        method = 'GET',
        body,
        headers = {},
        cache,
        revalidate,
        tags,
        auth = true,
    } = options;

    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '/api';
    const url = `${baseUrl}${endpoint}`;

    // Only add token if auth is true
    let authHeaders = {};
    if (auth && typeof window !== 'undefined') {
        const token = localStorage.getItem('authToken');
        if (token) {
            authHeaders = { Authorization: `Bearer ${token}` };
        }
    }

    const fetchOptions: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...authHeaders,
            ...headers,
        },
        ...(body && { body: JSON.stringify(body) }),
        ...(cache && { cache }),
        ...(revalidate && { next: { revalidate } }),
        ...(tags && { next: { tags } }),
    };

    try {
        const response = await fetch(url, fetchOptions);

        // Handle non-JSON responses
        const contentType = response.headers.get('content-type');
        if (contentType?.includes('application/json')) {
            const data = await response.json();

            // Handle API errors
            if (!response.ok) {
                throw new ApiError(
                    response.status,
                    data.message || 'Something went wrong'
                );
            }

            return data as T;
        }

        // Handle non-JSON responses
        if (!response.ok) {
            throw new ApiError(
                response.status,
                'Something went wrong'
            );
        }

        return await response.text() as T;

    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(500, 'Network error');
    }
} 