import { getBusinessStepFormData } from '@/professional/_lib/data';
import { getAllCategories } from '@/lib/data';
import BusinessCategoryForm, { StoredTempCategory } from '@/professional/_components/business-category-form';

export default async function BusinessCategoryPage() {

    const storedTempCategory = await getBusinessStepFormData("categoryStep") as StoredTempCategory | null

    const categories = await getAllCategories()

    if (!categories || categories.length === 0) throw new Error("Failed to fetch categories")

    return (
        <BusinessCategoryForm storedTempCategory={storedTempCategory} categories={categories} />
    );
}