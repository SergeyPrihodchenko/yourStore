import MainLayout from "@/Layouts/MainLayout/MainLayout";
import ProductPanelComponent from "./ui/ProductPanelComponent";
import ProductListComponent from "./ui/ProductListComponent";

const AdminProductPanel = ({categories, catalogs, products, options, valuesForOptions}: any) => {
    
    return (
        <MainLayout>
            <ProductPanelComponent categories={categories} catalogs={catalogs} options={options} valuesForOptions={valuesForOptions}/>
            {/* <ProductListComponent categories={categories} catalogs={catalogs} products={products}/> */}
        </MainLayout>
    );
}

export default AdminProductPanel;