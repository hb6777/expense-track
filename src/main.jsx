import BalanceSummary from "./balance-summary";
import Header from "./header";
import Transactions from "./transactions";



export default function Main(){
    return( <div>
        <div><Header /></div>
        <div><BalanceSummary /></div> 
        <div><Transactions /></div> 
    </div> );
}