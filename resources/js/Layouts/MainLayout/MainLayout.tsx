import s from  './MainLayout.module.css';
import {ReactNode} from "react";
import Header from "@/Layouts/MainLayout/ui/Header";
interface MainLayoutProps {
    children: ReactNode;
}
const MainLayout = (props: MainLayoutProps) => {
    const {children} = props;
    return(
        <div className={s.layout}>
            <Header />
            <main>{children}</main>
            <footer className={s.footer}>footer</footer>
        </div>
    )
}

export default MainLayout;
