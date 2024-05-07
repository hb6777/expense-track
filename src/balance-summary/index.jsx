import { useContext } from "react";
import { TrackerGlobalContext } from "../context";
import ChartSummary from "../chart";
import "./styles.css"

export default function BalanceSummary(){
    
    const { totalExpense, totalIncome} = useContext(TrackerGlobalContext);

    return(
        <div className="main-index">
                <div className="balance-summary-container">Balance is ${totalIncome-totalExpense}
                        <p style={{color:'blue'}}>Total Income</p>
                        <p style={{color:'blue'}}>${totalIncome}</p>
                        <p style={{color:'red'}}>Total Expenses</p>
                        <p style={{color:'red'}}>${totalExpense}</p>  
                        {/* className="chart-container" */} 
                </div>  <div className="chart-container">
                                <ChartSummary expense={totalExpense} income={totalIncome} />
                        </div>
        </div>);
}
