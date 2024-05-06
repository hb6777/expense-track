import { useContext } from "react";
import { TrackerGlobalContext } from "../context";
import ExpenseItem from "../ExpenseItem";

export default function Transactions(){
    
    const {allTransactions} = useContext(TrackerGlobalContext);
 //  console.log(allTransactions.length,'display');
    return(<div>Transactions here
        {
            allTransactions.length > 0 ? 
                allTransactions.map((item)=>(
                    <ExpenseItem item={item} />
                )) 
            : null  
        }  
    </div>);
}
