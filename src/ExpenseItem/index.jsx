



export default function ExpenseItem({item}){

    return(<div>
        <p>{item.type} - {item.description} - {item.amount} </p>
    </div>);
}