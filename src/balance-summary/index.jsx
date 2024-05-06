import { useContext } from "react";
import { TrackerGlobalContext } from "../context";


export default function BalanceSummary(){
    
    const { totalExpense, totalIncome} = useContext(TrackerGlobalContext);

    return(<div>Balance is ${totalIncome-totalExpense}
                <p>Total Income</p>
                <p>${totalIncome}</p>
                <p>Total Expenses</p>
                <p>${totalExpense}</p>

             {/* <div><ChartSummary expense={100} income={5000} /></div> */}
    </div>);
}
