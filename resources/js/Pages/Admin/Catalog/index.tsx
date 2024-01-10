import MainLayout from "@/Layouts/MainLayout/MainLayout";
import CatalogComponent from "./ui/CatalogComponent";

const CatalogPage = ({data}: any) => {

    return (
        <MainLayout>
            <CatalogComponent data={data}/>
        </MainLayout>
    );
}

export default CatalogPage;
