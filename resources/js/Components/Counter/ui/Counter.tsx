import {useAppDispatch} from "@/App/providers/StoreProvider/hooks/useAppDispatch";
import {StateTypes} from "@/App/providers/StoreProvider/config/StateTypes";
import {useAppSelector} from "@/App/providers/StoreProvider/hooks/useAppSelector";
import {decrement, increment} from "@/Components/Counter/slice/counterSlice";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";

const Counter = () =>{
    const counter = useAppSelector((state: StateTypes) => state.counter);
    const dispatch = useAppDispatch();
    return (
        <div className='m-4'>
            <p>count: {counter.value}</p>
            <PrimaryButton onClick={() => dispatch(increment())}>+</PrimaryButton>
            <SecondaryButton onClick={() => dispatch(decrement())}>-</SecondaryButton>
        </div>
    )
}

export default Counter;
