import {ReactNode} from "react";
import {StateTypes} from "@/App/providers/StoreProvider/config/StateTypes";
import {createReduxStore} from "@/App/providers/StoreProvider/config/store";
import {Provider} from "react-redux";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateTypes;
}
export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;
    const store = createReduxStore(initialState);
    return <Provider store={store}>{children}</Provider>;
};
