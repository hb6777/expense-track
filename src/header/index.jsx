 
import { useDisclosure } from "@chakra-ui/react";
import AddNewTransaction from "../add-new-transaction"; 
import "./styles.css"

export default function Header(){
 
    const {onOpen,onClose, isOpen} = useDisclosure();

    return(<div className="header-container">EXPENSE TRACKER APP
              
                <button className="AddNewTransactionBtn" onClick={onOpen}>Add New Transaction</button> 
               
                <AddNewTransaction  isOpen={isOpen} onClose={onClose}/>
            </div>);
}


