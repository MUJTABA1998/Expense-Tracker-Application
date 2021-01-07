import React, {useContext} from 'react'
import {TransactionContext} from './TransactionContext'


export default History = ({}) => {

    let {transactions} = useContext(TransactionContext)
    

    

    return(
        <div className="History">
           <ul>
               {transactions.map((obj, index) => {
                   return(
                       <li key={index}>
                           <span>{obj.desc}</span>
                           <span>{obj.amount}</span>
                       </li>
                   )
               })}
           </ul>
        </div>
    )



}