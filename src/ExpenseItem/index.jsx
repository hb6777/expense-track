



export default function ExpenseItem({item}){

    return(<div>
        <p>{item.description} <span style={{padding:'10px'}}>${item.amount}</span> </p> 
    </div>);
}