import { getBusinessStepFormData } from '@/professional/_lib/data';
import { getBusinessCategories } from '@/lib/data';
import BusinessCategoryForm from '@/professional/_components/business-category';

export default async function BusinessCategoryPage() {



    const storedStepCategory = await getBusinessStepFormData("categoryStep")

    const categories = await getBusinessCategories()

    return (
        // TODO: Write types
        <BusinessCategoryForm storedStepCategory={storedStepCategory} categories={categories} />
    );
}