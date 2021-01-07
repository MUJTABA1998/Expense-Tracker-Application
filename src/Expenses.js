import React, {useContext} from 'react'
import { TransactionContext } from './TransactionContext'


export default  function Expenses () {

    let {transactions} = useContext(TransactionContext);

    
    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income = income + transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let exp = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                exp = exp + transactions[i].amount
        }
        return exp;
    }

    return(

        
        <div className="expenses">
            <div id="balance">
                <h1>Your Balance Is Rs. {getIncome() + getExpense()}</h1>
            </div>
            <div id="source">
               <div className="income">
                    <h4>Income</h4>
                    <p>Rs. {getIncome()}</p>
               </div>
               <div className="expense">
                    <h4>Expenses</h4>
                    <p>Rs. {getExpense()}</p>
               </div>
            </div>
        </div>
    )


}