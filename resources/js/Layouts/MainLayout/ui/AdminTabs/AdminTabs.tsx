import s from './AdminTabs.module.css';
import CustomLink, {VariantLink} from "@/Components/CustomLink/CustomLink";

interface  AdminTabsProps{}

const AdminTabs = (props: AdminTabsProps) =>{

    return (
        <ul className={s.adminPanelList}>
            <li className={s.adminPanelItem}>
                <CustomLink href={route('dashboard')} variant={VariantLink.DEFAULT} active={route().current('dashboard')} >Dashboard</CustomLink>
            </li>
            <li className={s.adminPanelItem}>
                <CustomLink href={route('admin.product')} variant={VariantLink.DEFAULT} active={route().current('admin.product')} >Продукты</CustomLink>
            </li>
            <li className={s.adminPanelItem}>
                <CustomLink href={route('category.index')} variant={VariantLink.DEFAULT} active={route().current('category.index')} >Категории</CustomLink>
            </li>
            <li className={s.adminPanelItem}>
                <CustomLink href={route('option')} variant={VariantLink.DEFAULT} active={route().current('option')} >Опции</CustomLink>
            </li>
        </ul>

    );
}
export default AdminTabs;
