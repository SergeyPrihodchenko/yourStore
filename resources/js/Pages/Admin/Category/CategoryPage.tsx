import MainLayout from "@/Layouts/MainLayout/MainLayout";
import CategoryComponent from "./ui/CategoryComponent";
import { Head } from "@inertiajs/react";
import { Category } from "@/Entities/Category/model/types";

interface CategoryPageProps{
  categories: Category[];
}

const CategoryPage = ({categories}: CategoryPageProps) => {
    return (
        <MainLayout>
            <Head title="Категории"/>
            <CategoryComponent categories={categories}/>
        </MainLayout>
    );
}

export default CategoryPage;
