import MainLayout from "@/Layouts/MainLayout/MainLayout";
import AdminProductTabs from "./ui/components/AdminProductTabs";
import ProductShowOptionComponent from "./ui/ProductShowOptinComponent";
import { AdminProductPanelInterface } from "./model/types";

const AdminProductPanel = ({product, values, catalog, category, images, options}: AdminProductPanelInterface) => {    
    return (
        <MainLayout>
            <AdminProductTabs/>
            <ProductShowOptionComponent 
                product={product} 
                values={values}
                catalog={catalog}
                category={category}
                images={images}
                options={options}
            />
        </MainLayout>
    );
}

export default AdminProductPanel;