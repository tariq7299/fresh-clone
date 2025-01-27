import { getSession } from "@/(auth)/_lib/sessions";
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

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    const url = `${baseUrl}${endpoint}`;

    // Only add token if auth is true
    let authHeaders = {};

    if (auth && typeof window === 'undefined') {
        const session = await getSession();
        if (session?.token) {
            authHeaders = { Authorization: `Bearer ${session.token}` };
        }
    }

    const fetchOptions: RequestInit = {
        method,
        headers: {
            'Accept-Language': 'en',
            // 'Content-Type': 'application/json',
            // 'Accept-Language': 'en-US,en;q=0.5',
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/plain, */*',
            // 'Accept-Encoding': 'gzip, deflate, br, zstd',
            // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0',
            // 'Origin': 'http://localhost:3000',
            // 'Connection': 'keep-alive',
            // 'Referer': 'http://localhost:3000/',
            // 'Sec-Fetch-Dest': 'empty',
            // 'Sec-Fetch-Mode': 'cors',
            // 'Sec-Fetch-Site': 'cross-site',

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
            console.log("FETCH_UTILS JSON response", data)

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
        console.log("FETCH_UTILS errorrr", error)
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