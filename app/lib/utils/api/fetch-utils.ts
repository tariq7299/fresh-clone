import { getSession } from "@/(auth)/_lib/sessions";
import SecureLS from 'secure-ls';
import { ApiError } from "@/lib/definitions/api";

type FetchOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    body?: any;
    headers?: HeadersInit;
    cache?: RequestCache;
    revalidate?: number;
    tags?: string[];
    auth?: boolean;
};



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
            'Accept-Language': 'en',
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
        console.log("FETCH_UTILS fetchOptions", fetchOptions)
        console.log("FETCH_UTILS url", url)
        const response = await fetch(url, fetchOptions);
        console.log("FETCH_UTILS response", response)

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
            console.log("FETCH_UTILS error", {
                success: error.success,
                status: error.status,
                message: error.message,
                code: error.code,
                data: error.data,
                errors: error.errors
            })
            throw new ApiError(
                error.success,
                error.status,
                error.message,
                error.code,
                error.data,
                error.errors

            );
        }
        // Make this network error in the future ( maybe you can like create a new class that inerit of something...)
        throw new ApiError(
            false,
            500,
            "Network error",
            500,
            null,
            []
        );
    }
} 