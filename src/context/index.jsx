
import { createContext, useEffect, useState } from "react";

export const TrackerGlobalContext = createContext(null);

export default function GlobalState({ children }) {

    const [formData, setformdata] = useState({
        type: 'income',
        description: '',
        amount: 0
    });

    const [allTransactions, setalltransactions] = useState([]);
    const [trackerRadioType, settrackerRadioType] = useState('income');
    const [totalExpense, settotalexpense] = useState(0);
    const [totalIncome, settotalincome] = useState(0);

    function handleSubmit(currentFormData) {
       // console.log(currentFormData, 'currentFormData');

        if (!currentFormData.description || !currentFormData.amount) {
            console.log('error!!!!!!')
            return;
        }
        setalltransactions([...allTransactions,{...currentFormData, id:Date.now()},])
       // console.log(allTransactions,'allTransactions');
    }

    useEffect(()=>{

        let income = 0;
        let expense = 0;

        allTransactions.forEach((item)=> item.type === 'income' ? income = income + parseFloat(item.amount) : expense =  expense + parseFloat(item.amount));

        settotalincome(income);
        settotalexpense(expense);

    },[allTransactions])

    return (<TrackerGlobalContext.Provider value={{
        formData,
        setformdata,
        allTransactions,
        trackerRadioType,
        settrackerRadioType,
        totalExpense,
        totalIncome,
        handleSubmit
    }}>
        {children}
    </TrackerGlobalContext.Provider>);
}


