import { TypedUseSelectorHook, useSelector } from 'react-redux';
import {StateTypes} from "@/App/providers/StoreProvider/config/StateTypes";

export const useAppSelector: TypedUseSelectorHook<StateTypes> = useSelector;
