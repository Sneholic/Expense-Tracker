import React, { useContext } from 'react';
import { GlobalContext } from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/contast/GlobalState.js';
  

export const Transaction = ({ transaction }) => {

  const { deleteTransaction } =useContext(GlobalContext);

    const sign=transaction.amount<0?'-':'+';

  return (
    <li class={transaction.amount<0?'minus':'plus'}>
        {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span><button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}
