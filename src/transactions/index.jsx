import { useContext } from "react";
import { TrackerGlobalContext } from "../context";
import ExpenseItem from "../ExpenseItem";
import "./styles.css"

export default function Transactions(){
    
    const {allTransactions} = useContext(TrackerGlobalContext);
 //  console.log(allTransactions.length,'display');
 
    return(<div className="all-transactions-container">
        <div style={{textAlign:'center',fontWeight:'bold',fontSize:'24px'}}> TRANSACTIONS RECORDS</div>
        <p className="title-main">
            <div className="title-containerI">Income</div>
            <div className="title-containerE">Expense</div>
        </p>
        <p className="title-main">
            <div className="title-containerI">
            {
                allTransactions.length > 0 ? 
                    allTransactions.map((item)=>(item.type === 'income' ? 
                        <p style={{borderRadius:'10px',backgroundColor:'lightblue'}}><ExpenseItem item={item} /></p>
                        : null
                    )) 
                : null  
            }    
            </div>
            <div className="title-containerE"> 
                 {
                    allTransactions.length > 0 ? 
                        allTransactions.map((item)=>(item.type === 'expense' ? 
                            <p style={{borderRadius:'10px',backgroundColor:'lightsalmon'}}><ExpenseItem item={item} /></p>
                            : null
                        )) 
                    : null  
                }  
           </div>
        </p>
       
       
    </div>);
}
