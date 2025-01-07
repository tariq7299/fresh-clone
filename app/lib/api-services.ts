import { fetchApi } from './fetch-utils';

// Types
interface User {
    id: string;
    name: string;
    email: string;
}

interface LoginResponse {
    token: string;
    user: User;
}

interface BusinessInfo {
    nameEn: string;
    nameAr: string;
    descriptionEn: string;
    descriptionAr: string;
    websiteUrl?: string;
}

// API Services
export const authService = {
    login: async (email: string, password: string) => {
        return fetchApi<LoginResponse>('/auth/login', {
            method: 'POST',
            body: { email, password },
            auth: false,
        });
    },

    signup: async (userData: SignupData) => {
        return fetchApi<SignupResponse>('/auth/signup', {
            method: 'POST',
            body: userData,
            auth: false,
        });
    },

    logout: async () => {
        return fetchApi('/auth/logout', {
            method: 'POST',
        });
    },
};

export const businessService = {
    // GET request with cache
    getBusinessInfo: async (businessId: string) => {
        return fetchApi<BusinessInfo>(`/business/${businessId}`, {
            cache: 'force-cache', // Next.js static caching
            tags: ['business'], // For revalidation
        });
    },

    // POST request
    createBusiness: async (data: BusinessInfo) => {
        return fetchApi<BusinessInfo>('/business', {
            method: 'POST',
            body: data,
        });
    },

    // PUT request
    updateBusiness: async (businessId: string, data: Partial<BusinessInfo>) => {
        return fetchApi<BusinessInfo>(`/business/${businessId}`, {
            method: 'PUT',
            body: data,
        });
    },
}; 