import MainLayout from "@/Layouts/MainLayout/MainLayout";
import CategoryComponent from "./ui/CategoryComponent";
import { Head } from "@inertiajs/react";

const index = () => {
    return (
        <MainLayout>
            <Head title="Category"/>
            <CategoryComponent/>
        </MainLayout>
    );
}

export default index;