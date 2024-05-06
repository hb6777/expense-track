 
import { useDisclosure } from "@chakra-ui/react";
import AddNewTransaction from "../add-new-transaction";
import { TrackerGlobalContext } from "../context";
import { useContext } from "react";


export default function Header(){
 
    const {onOpen,onClose, isOpen} = useDisclosure();

    return(<div>EXPENSE TRACKER
        <span>
            <button onClick={onOpen}>Add New Transaction</button> 
        </span>
        <AddNewTransaction isOpen={isOpen} onClose={onClose}/>
    </div>);
}


