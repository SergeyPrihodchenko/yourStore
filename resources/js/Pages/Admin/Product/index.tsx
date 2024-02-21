import MainLayout from "@/Layouts/MainLayout/MainLayout";
import ProductPanelComponent from "./ui/ProductPanelComponent";
import ProductListComponent from "./ui/ProductListComponent";
import AdminProductTabs from "./ui/components/AdminProductTabs";

const index = ({categories, catalogs, products}: any) => {
    
    return (
        <MainLayout>
            <AdminProductTabs/>
            <ProductListComponent categories={categories} catalogs={catalogs} products={products}/>
        </MainLayout>
    );
}

export default index;