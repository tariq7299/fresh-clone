import { getSession } from "@/(auth)/_lib/sessions";
import SecureLS from 'secure-ls';

type FetchOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    body?: any;
    headers?: HeadersInit;
    cache?: RequestCache;
    revalidate?: number;
    tags?: string[];
    auth?: boolean;
};

export interface ApiResponse<T> {
    success: boolean
    status: number
    message: string
    code: number
    data: T
    errors: string[] | string | []
}

export class ApiError extends Error {
    constructor(
        public success: boolean,
        public status: number,
        message: string,
        public code: number | string,
        public data: null,
        public errors: string[] | string | []
    ) {
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

    const baseUrl = process.env.API_BASE_URL;

    const url = `${baseUrl}${endpoint}`;

    // Only add token if auth is true
    let authHeaders = {};

    // Fix this !
    // This can't be executed in client side
    // As it uses the cookies to store the token, however the cookies can't be accessed in client side (in order to get it and send it as a header)

    // Here i have created two ways of sending the auth token, because this fetch can be used in client side and server side !

    //  **if CLIENT SIDE**
    // This auth sending token will be used in client side !,
    if (auth && typeof window !== 'undefined') {
        const ls = new SecureLS();
        const token = ls.get('token');
        authHeaders = { Authorization: `Bearer ${token}` };
        //  **if SERVER SIDE**
    } else if (auth && typeof window === 'undefined') {
        const session = await getSession();
        if (session?.token) {
            authHeaders = { Authorization: `Bearer ${session.token}` };
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

        // Handle JSON responses
        const contentType = response.headers.get('content-type');
        if (contentType?.includes('application/json')) {
            const data = await response.json();

            // Handle API errors
            if (!response.ok) {
                throw new ApiError(
                    data.success,
                    response.status,
                    data.message,
                    data.code,
                    data.data,
                    data.errors

                );
            }

            return data as T;
        }

        if (!response.ok) {
            throw new Error(
                'Something went wrong'
            );
        }

        // Handle non-JSON responses
        return await response.text() as T;

    } catch (error) {
        if (error instanceof ApiError) {
            throw new ApiError(
                error.success,
                error.status,
                error.message,
                error.code,
                error.data,
                error.errors

            );
        }
        throw new Error(
            'Network error'
        );
    }
} 