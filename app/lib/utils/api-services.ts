import { fetchApi } from './fetch-utils';
// import { SessionData } from '@/(auth)/_lib/definitions';
import SecureLS from 'secure-ls';

// Types

// interface User {
//     id: string;
//     name: string;
//     email: string;
// }

export type ApiResponseSessionData = {
    user: {
        id: string;
        name: string;
        email: string;
        role: 'stakeholder' | 'customer' | 'admin';
        phone_number: 'string';
        is_verified: boolean;
    }
    token: string;
}

type ApiResponseCode =
    | 200 // OK
    | 201 // Created
    | 202 // Accepted
    | 204 // No Content
    | 400 // Bad Request
    | 401 // Unauthorized
    | 403 // Forbidden
    | 404 // Not Found
    | 405 // Method Not Allowed
    | 409 // Conflict
    | 422 // Unprocessable Entity
    | 429 // Too Many Requests
    | 500 // Internal Server Error
    | 502 // Bad Gateway
    | 503 // Service Unavailable
    | 504 // Gateway Timeout


interface ApiResponse<T> {
    success: boolean,
    code: ApiResponseCode,
    message: string,
    data: T,
    errors: []
}

interface LoginResponse extends ApiResponse<ApiResponseSessionData> { }

// interface BusinessInfo {
//     nameEn: string;
//     nameAr: string;
//     descriptionEn: string;
//     descriptionAr: string;
//     websiteUrl?: string;
// }

// API Services
export const authService = {
    login: async (email: string, password: string) => {
        return fetchApi<LoginResponse>('/auth/stakeholder/login', {
            method: 'POST',
            body: { email, password },
            auth: false,
        });
    },

    // signup: async (userData: SignupData) => {
    //     return fetchApi<SignupResponse>('/auth/signup', {
    //         method: 'POST',
    //         body: userData,
    //         auth: false,
    //     });
    // },

    logout: async () => {
        return fetchApi('/auth/logout', {
            method: 'POST',
        });
    },
};

// export const businessService = {
//     // GET request with cache
//     getBusinessInfo: async (businessId: string) => {
//         return fetchApi<BusinessInfo>(`/business/${businessId}`, {
//             cache: 'force-cache', // Next.js static caching
//             tags: ['business'], // For revalidation
//         });
//     },

//     // POST request
//     createBusiness: async (data: BusinessInfo) => {
//         return fetchApi<BusinessInfo>('/business', {
//             method: 'POST',
//             body: data,
//         });
//     },

//     // PUT request
//     updateBusiness: async (businessId: string, data: Partial<BusinessInfo>) => {
//         return fetchApi<BusinessInfo>(`/business/${businessId}`, {
//             method: 'PUT',
//             body: data,
//         });
//     },
// }; 