import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/shared/ui/Button";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";

export const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(getCounterValue);
    const {t} = useTranslation();

    const Increment = () => {
        dispatch(counterActions.increment());
    }

    const Decrement = () => {
        dispatch(counterActions.decrement());
    }

    return (
        <div>
            <h1 data-testid='value-title'>value = {counter}</h1>
            <Button 
                onClick={Increment}
                data-testid='increment-button'
            >
                {t('Increment')}
            </Button>
            <Button 
                onClick={Decrement}
                data-testid='decrement-button'
            >
                 {t('Decrement')}
            </Button>
        </div>
    );
};



// import { useTranslation } from "react-i18next";
// import cls from './.module.scss'
// import { classNames } from "shared/lib/classNames/classNames";


// interface Props {
//     className: string;
// }

// export const  = (props) => {
//     const {t} = useTranslation();

//     const {
//         className,
//     } = props;

//     return (
//         <div className={classNames(cls., {}, [])}>
            
//         </div>
//     );
// };

