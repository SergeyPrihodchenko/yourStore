import MainLayout from "@/Layouts/MainLayout/MainLayout";
import CatalogComponent from "./ui/CatalogComponent";
import { Head } from "@inertiajs/react";
import { Catalog } from "@/Entities/Catalog/model/types";
import { Category } from "@/Entities/Category/model/types";
import { PageProps } from "@/types";

export type listData = {
  categories: Category[], catalogs: Catalog[]
}
interface CatalogPageProps extends PageProps{
  list: listData
}

const CatalogPage = ({list}: CatalogPageProps) => {

    return (
        <MainLayout>
          <Head title="Подкатегории"/>
            <CatalogComponent list={list}/>
        </MainLayout>
    );
}

export default CatalogPage;
