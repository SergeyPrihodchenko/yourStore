import s from './AdminTabs.module.css';
import CustomLink, {VariantLink} from "@/Components/CustomLink/CustomLink";

interface  AdminTabsProps{

}

console.log('current route',route().current('admin.product'))




export const AdminTabs = (props: AdminTabsProps) =>{

    return (
        <ul className={s.adminPanelList}>
            <li className={s.adminPanelItem}>
                <CustomLink href={route('dashboard')} variant={VariantLink.DEFAULT} active={route().current('dashboard')} >Dashboard</CustomLink>
            </li>
            <li className={s.adminPanelItem}>
                <CustomLink href={route('admin.product')} variant={VariantLink.DEFAULT} active={route().current('admin.product')} >Продукты</CustomLink>
            </li>
            <li className={s.adminPanelItem}>
                <CustomLink href={route('admin.category')} variant={VariantLink.DEFAULT} active={route().current('admin.category')} >Категории</CustomLink>
            </li>
        </ul>

    );
}
