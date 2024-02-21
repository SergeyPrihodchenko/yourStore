import MainLayout from "@/Layouts/MainLayout/MainLayout";
import AdminProductTabs from "./ui/components/AdminProductTabs";
import ProductShowOptionComponent from "./ui/ProductShowOptinComponent";
import { AdminProductPanelInterface } from "./model/types";

const indexShowOptin = ({product, values, catalog, category, images, options, categories, catalogs}: AdminProductPanelInterface) => {    
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
                catalogs={catalogs}
                categories={categories}
            />
        </MainLayout>
    );
}

export default indexShowOptin;