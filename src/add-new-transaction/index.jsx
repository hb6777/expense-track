  
import { FormControl,FormLabel,Input,Button, Modal, ModalBody, ModalFooter, ModalHeader,ModalContent, ModalCloseButton,ModalOverlay, Radio, RadioGroup, useSafeLayoutEffect } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { TrackerGlobalContext } from "../context";
import "./styles.css"
import React from "react";

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
   
    return (  
        
        <Modal className="modal-container" isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleFormSubmit}>
            <ModalOverlay />
            <ModalHeader></ModalHeader> 
            <ModalContent> 
            {/* <ModalCloseButton width={'40px'} paddingleft={'100px'} />   */}
            <ModalBody className="modal-container"><p style={{textAlign:'center',fontWeight:'bold',fontsize:'15px'}}>Enter A New Transaction</p> 
                    <p>Description: <input onChange={handleFormOnChange}  name="description" placeholder="Description Here" /> 
                    <p>Amount: <input name="amount" onChange={handleFormOnChange} placeholder="Amount here" /></p>
                     <p>  <ul>
                            <li><input checked={formData.type === 'income'} onChange={handleFormOnChange} type="radio" name="type" value="income" /> Income </li> 
                            <li><input checked={formData.type === 'expense'} onChange={handleFormOnChange} type="radio" name="type" value="expense" /> Expense </li>
                        </ul>
                        </p> 
                    </p>
                    <div className="btn"> <ul>
                        <li><Button mr={"4"} onClick={onClose}>Close</Button></li>
                        <li><Button type="submit" onClick={onClose}>Save</Button></li>
                    </ul></div> 
                </ModalBody> 
                <ModalFooter> 
                </ModalFooter>
            </ModalContent>
        </form>
    </Modal> 
    );
}