import MainLayout from "@/Layouts/MainLayout/MainLayout";
import ProductPanelComponent from "./ui/ProductPanelComponent";
import ProductListComponent from "./ui/ProductListComponent";

const AdminProductPanel = ({categories, catalogs, products}: any) => {
    
    return (
        <MainLayout>
            {/* <ProductPanelComponent categories={categories} catalogs={catalogs}/> */}
            <ProductListComponent categories={categories} catalogs={catalogs} products={products}/>
        </MainLayout>
    );
}

export default AdminProductPanel;