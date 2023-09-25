import React, { useState, useContext } from 'react'
import { GlobalContext } from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/contast/GlobalState.js';

export const AddTransaction = () => {
    const [text, setText]=useState('');
    const[amount,setAmuont]=useState(0);

    const { addTransaction } =useContext(GlobalContext);

    const onSubmit=e=>{
        e.preventDefault();

        const newTransaction={
            
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }
  return (
    <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">
                    Amount<br />
                    (negative-expense,positive-income)
                </label>
                <input type="number" value={amount} onChange={(e)=>setAmuont(e.target.value)} placeholder="Enter text..." />
            </div>
            <button class="btn">Add transaction</button>
        </form>
    </>
  )
}
