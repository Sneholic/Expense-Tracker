import React, { useContext } from 'react';
import { GlobalContext } from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/contast/GlobalState.js';

export const Balance = () => {
  const { transactions }=useContext(GlobalContext);

  const amounts=transactions.map(transaction=>transaction.amount);


  const total=amounts.reduce((acc, item)=>(acc+=item),0).toFixed(2);

  return (
    <>
    <h4>your Balance</h4>
    <h1>${total}</h1>
    </>
  )
}

