// import React, { useContext,useEffect } from 'react';
// import { Transaction } from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/components/Transaction.js';

// import { GlobalContext } from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/contast/GlobalState.js';

// export const TransactionList = () => {
//   const { transactions}=useContext(GlobalContext);
//   // useEffect(()=>{
//   //   gettransactions()
//   // },[])


//   return (
//     <>
//         <h3>History</h3>
//         <ul id="list" className="list">
//           {transactions.map(transaction=>(<Transaction key={transaction.id} transaction={transaction} />))}
            
//         </ul>
//     </>
//   )
// }



import React, { useContext, useEffect } from 'react';
import { Transaction } from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/components/Transaction.js';

import { GlobalContext } from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/contast/GlobalState.js';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
      </ul>
    </>
  )
}
