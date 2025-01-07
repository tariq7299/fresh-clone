'use client';

import { useState } from 'react';
import { businessService } from '@/lib/api-services';
import { ApiError } from '@/lib/fetch-utils';
import { Label } from "@/ui/components/label";
import { Input } from "@/ui/components/input";
import { Textarea } from "@/ui/components/textarea";
import { Button } from "@/ui/components/custom/button";
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function ProfessionalOnboardingPage() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const formData = new FormData(event.currentTarget);
            const businessData = {
                nameEn: formData.get('nameEn') as string,
                nameAr: formData.get('nameAr') as string,
                descriptionEn: formData.get('descriptionEn') as string,
                descriptionAr: formData.get('descriptionAr') as string,
                websiteUrl: formData.get('websiteUrl') as string,
            };

            await businessService.createBusiness(businessData);
            // Handle success (e.g., redirect or show success message)

        } catch (err) {
            if (err instanceof ApiError) {
                setError(err.message);
            } else {
                setError('An unexpected error occurred');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Your existing form fields */}

            {error && (
                <div className="text-danger text-sm mt-2">{error}</div>
            )}

            <Button
                type="submit"
                disabled={loading}
                className="w-full font-bold flex gap-2 justify-center items-center"
            >
                {loading ? 'Creating...' : 'Continue'}
                <ArrowRightIcon className="size-4" />
            </Button>
        </form>
    );
}