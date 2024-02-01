import s from '../../model/AdminTabs.module.css';
import CustomLink, {VariantLink} from "@/Components/CustomLink/CustomLink";

interface  AdminTabsProps{}

const AdminProductTabs = (props: AdminTabsProps) =>{

    return (
        <ul className={s.adminPanelList}>
            <li className={s.adminPanelItem}>
                <CustomLink href={route('admin.product')} variant={VariantLink.DEFAULT} active={route().current('admin.product')} >Список продуктов</CustomLink>
            </li>
            <li className={s.adminPanelItem}>
                <CustomLink href={route('admin.productPanel')} variant={VariantLink.DEFAULT} active={route().current('admin.productPanel')} >Панель добавления продуктов</CustomLink>
            </li>
        </ul>
    );
}
export default AdminProductTabs;
