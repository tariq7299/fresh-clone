import { getBusinessStepFormData } from '@/professional/_lib/data';
import { getAllCategories } from '@/lib/data';
import BusinessCategoryForm from '@/professional/_components/business-category-form';

export default async function BusinessCategoryPage() {



    const storedStepCategory = await getBusinessStepFormData("categoryStep")

    const categories = await getAllCategories()

    return (
        // TODO: Write types
        <BusinessCategoryForm storedStepCategory={storedStepCategory} categories={categories} />
    );
}