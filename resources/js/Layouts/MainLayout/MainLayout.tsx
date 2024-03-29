import s from  './MainLayout.module.css';
import {ReactNode} from "react";
import Header from "@/Layouts/MainLayout/ui/Header";
import AdminTabs from "@/Layouts/MainLayout/ui/AdminTabs/AdminTabs";
import  Container  from '@mui/material/Container';
interface MainLayoutProps {
    children?: ReactNode;
    isAdmin?: boolean;
}
const MainLayout = (props: MainLayoutProps) => {
    const {children, isAdmin= true} = props;

    return(
        <div className={s.layout}>
            <Header />

            <main className={ s.mainWithoutTabPanel}>
                {isAdmin && <AdminTabs />}
                <Container>
                  {children}
                </Container>
            </main>
            <footer className={s.footer}>footer</footer>
        </div>
    )
}

export default MainLayout;
