import { getSession } from "@/[lang]/(auth)/_lib/sessions";
import { ApiError } from "@/_lib/definitions/api";
import { setApiSuccessMsg } from "./setApiSuccessMsg";
import { ApiResponse } from "@/_lib/definitions/api";
import { setApiErrorMsg } from "./setApiErrorMsg";

type FetchOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    body?: any;
    headers?: HeadersInit;
    cache?: RequestCache;
    revalidate?: number;
    tags?: string[];
    auth?: boolean;
    lang?: "en" | "ar";
};

type FetchApiResponse<T> = {
    success: boolean;
    status: number;
    apiMsgs: string | string[];
    code: number | string;
    data: T | null;
    errors: string | string[];
}

export async function fetchApi<T>(
    endpoint: string,
    options: FetchOptions = {}
): Promise<FetchApiResponse<T>> {

    const {
        method = 'GET',
        body,
        headers = {},
        cache,
        revalidate,
        tags,
        lang = 'en',
        auth = true,
    } = options;

    console.log("FETCH_UTILS URL", endpoint)

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
            'Accept-Language': lang,
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
                const errorMsg = setApiErrorMsg({ errResponse: data })
                return {
                    success: false,
                    status: response.status,
                    apiMsgs: errorMsg,
                    code: data.code,
                    data: data.data,
                    errors: data.errors
                }
                // throw new ApiError(
                //     data.success,
                //     response.status,
                //     data.message,
                //     data.code,
                //     data.data,
                //     data.errors

                // );
            }

            const successMsg = setApiSuccessMsg({ successResponse: data })

            return {
                success: data.success,
                status: response.status,
                apiMsgs: successMsg,
                code: data.code,
                data: data.data,
                errors: data.errors
            }

            // return data as T;
        }

        if (!response.ok) {
            // throw new Error(
            //     'Something went wrong'
            // );
            return {
                success: false,
                status: response.status,
                apiMsgs: 'Something went wrong',
                code: 500,
                data: null,
                errors: []
            }

        }

        const textResponse = await response.text()
        console.log("FETCH_UTILS textResponse", textResponse)


        return {
            success: true,
            status: response.status,
            apiMsgs: 'Success',
            code: 200,
            data: textResponse as T,
            errors: []
        }

    } catch (error) {

        console.log("FETCH_UTILS errorrr", error)
        if (error instanceof ApiError) {
            const errorMsg = setApiErrorMsg({ errResponse: error })
            console.log("FETCH_UTILS error", {
                success: error.success,
                status: error.status,
                apiMsgs: errorMsg,
                code: error.code,
                data: error.data,
                errors: error.errors
            })
            return {
                success: error.success,
                status: error.status,
                apiMsgs: errorMsg,
                code: error.code,
                data: error.data,
                errors: error.errors
            }
            // throw new ApiError(
            //     error.success,
            //     error.status,
            //     error.message,
            //     error.code,
            //     error.data,
            //     error.errors

            // );
        }
        return {
            success: false,
            status: 500,
            apiMsgs: 'Network error',
            code: 500,
            data: null,
            errors: []
        }
        // Make this network error in the future ( maybe you can like create a new class that inerit of something...)
        // throw new ApiError(
        //     false,
        //     500,
        //     "Network error",
        //     500,
        //     null,
        //     []
        // );
    }
} 