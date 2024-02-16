import { useState } from 'react';
import cn from 'classnames';
import s from './AdminTabs.module.css';
import CustomLink, {VariantLink} from "@/Components/CustomLink/CustomLink";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

interface  AdminTabsProps{}

const AdminTabs = (props: AdminTabsProps) =>{
  const [showMobilePanel, setShowMobilePanel] = useState(false);

  return (
    <>
      <div>
        <button onClick={()=>setShowMobilePanel(prev => !prev)} type='button' className={s.adminPanelBtn}>
          <AdminPanelSettingsIcon fontSize='large' /> Панель администратора
        </button>
      </div>
      <ul className={cn(s.adminPanelList, {
        [s.showPanel]: showMobilePanel
      })}>
            <li className={s.adminPanelItem}>
                <CustomLink href={route('dashboard')} variant={VariantLink.DEFAULT} active={route().current('dashboard')} className='w-full'>Dashboard</CustomLink>
            </li>
            <li className={s.adminPanelItem}>
                <CustomLink href={route('admin.product')} variant={VariantLink.DEFAULT} active={route().current('admin.product')} className='w-full'>Продукты</CustomLink>
            </li>
            <li className={s.adminPanelItem}>
                <CustomLink href={route('category.index')} variant={VariantLink.DEFAULT} active={route().current('category.index')} className='w-full' >Категории</CustomLink>
            </li>
            <li className={s.adminPanelItem}>
                <CustomLink href={route('catalog.index')} variant={VariantLink.DEFAULT} active={route().current('catalog.index')} className='w-full'>Подкатегории</CustomLink>
            </li>
            <li className={s.adminPanelItem}>
                <CustomLink href={route('option')} variant={VariantLink.DEFAULT} active={route().current('option')} className='w-full'>Опции</CustomLink>
            </li>
        </ul>
        </>

    );
}
export default AdminTabs;
