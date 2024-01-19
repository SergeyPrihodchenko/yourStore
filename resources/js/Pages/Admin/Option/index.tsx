import MainLayout from "@/Layouts/MainLayout/MainLayout";
import OptionComponent from "./ui/OptionComponent";

const index = ({options}: any) => {
    return (
        <MainLayout>
            <OptionComponent options={options}/>
        </MainLayout>
    );
}

export default index;