import React, {useContext, useState} from 'react'
import { TransactionContext } from './TransactionContext'

export default function Transaction() {


    let { transaction, addTransaction } = useContext(TransactionContext)
    let [newTitle, setTitle] = useState("")
    let [newAmount, setAmount] = useState(0)


   function handleAddition(e) {
        e.preventDefault();
        if(Number(newAmount) === 0 || newTitle === " "){
            alert("Please enter valid information")
            return false
        }
        addTransaction({
            desc:newTitle,
            amount: Number(newAmount)
        })   
        console.log(transaction)
        setAmount(0)
        setTitle("")
   }



    return(
        <div className="transaction">
            <h3>Add New Transaction</h3>
            <br />
            <form className="transaction-from" onSubmit={handleAddition}>
            <input type="text" placeholder="Enter Your Transaction Title" onChange={
                (e)=>{
                    setTitle(e.target.value)
                }
            } value={newTitle}/>
            <br /><br />
            <input type="number" placeholder="Enter Your Transaction Amount" onChange={
                (e)=>{
                    setAmount(e.target.value)
                }
                
            }
            value={newAmount}/>
            <br />
            <span><i class="fas fa-exclamation-triangle"></i> For income add + with amount and for expense add -</span>
            <br />
            <br />
            <button type="submit"><i class="fas fa-plus-square"></i> Add Transaction</button>
            </form>
        </div>
    )


}