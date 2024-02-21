import MainLayout from "@/Layouts/MainLayout/MainLayout";
import AdminProductTabs from "./ui/components/AdminProductTabs";
import ProductFilterControlComponent from "./ui/ProductFilterControlComponent";

const indexFilterControl = ({product, options, values}: any) => {    
    return (
        <MainLayout>
            <AdminProductTabs/>
            <ProductFilterControlComponent product={product} options={options} values={values}/>
        </MainLayout>
    );
}

export default indexFilterControl;