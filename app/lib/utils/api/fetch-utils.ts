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

    console.log("fetchOptions", fetchOptions)
    try {
        const response = await fetch(url, fetchOptions);


        // console.log("responseerere", response)




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

            // console.log("dataaaa", data)
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
        // console.log("errorrrrr", error)
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
        throw new ApiError(
            false,
            500,
            "Internal Server Error",
            500,
            null,
            []
        );
    }
} 