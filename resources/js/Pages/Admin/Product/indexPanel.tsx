import MainLayout from "@/Layouts/MainLayout/MainLayout";
import ProductPanelComponent from "./ui/ProductPanelComponent";
import ProductListComponent from "./ui/ProductListComponent";
import AdminProductTabs from "./ui/components/AdminProductTabs";

const AdminProductPanel = ({categories, catalogs, options, valuesForOptions}: any) => {
    
    return (
        <MainLayout>
            <AdminProductTabs/>
            <ProductPanelComponent categories={categories} catalogs={catalogs} options={options} valuesForOptions={valuesForOptions}/>
        </MainLayout>
    );
}

export default AdminProductPanel;