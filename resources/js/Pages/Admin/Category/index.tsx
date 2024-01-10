import MainLayout from "@/Layouts/MainLayout/MainLayout";
import CategoryComponent from "./ui/CategoryComponent";
import { Head } from "@inertiajs/react";

const index = ({categories}: any) => {
    return (
        <MainLayout>
            <Head title="Category"/>
            <CategoryComponent categories={categories}/>
        </MainLayout>
    );
}

export default index;
