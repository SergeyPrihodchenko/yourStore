
import { useDispatch } from 'react-redux';
import {AppDispatch} from "@/App/providers/StoreProvider/config/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
