import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, useSafeLayoutEffect } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { TrackerGlobalContext } from "../context";


export default function AddNewTransaction({ isOpen, onClose }) {

    const {formData,
            setformdata,
            allTransactions,
            setalltransactions,
            trackerRadioType,
            settrackerRadioType ,
            handleSubmit
        } = useContext(TrackerGlobalContext);

    function handleFormOnChange(e){
        setformdata({...formData,[e.target.name]:e.target.value})
    }
    
    function handleFormSubmit(event){
        event.preventDefault();
     //   console.log(formData,'formdata');
        handleSubmit(formData);         
    }
    
    console.log(allTransactions,'allTransactions');
   
    return (<Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleFormSubmit}>
            <ModalHeader>Enter A New Transaction</ModalHeader>

            <ModalBody>
                <div>Description: <input onChange={handleFormOnChange}  name="description" placeholder="Description Here" /></div>
                <div>Amount: <input name="amount" onChange={handleFormOnChange} placeholder="Amount here" /></div>
                <div><input checked={formData.type === 'income'} onChange={handleFormOnChange} type="radio" name="type" value="income" /> Income </div>
                <div><input checked={formData.type === 'expense'} onChange={handleFormOnChange} type="radio" name="type" value="expense" /> Expense </div>
            </ModalBody>

            <ModalFooter>
                <Button mr={"4"} onClick={onClose}>Close</Button>
                <Button type="submit" onClick={onClose}>Save</Button>
            </ModalFooter>
        </form>
    </Modal>);
}