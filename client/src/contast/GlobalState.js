// import React, { createContext, useReducer } from 'react';
// import AppReducer from './AppReducer';
// import axios from 'axios'
// import { gettransactions } from '/home/racitsolution/Desktop/Expense_tracker-main/controllers/transactions.js';

// const initialState = {
//     transactions: [],
//     error:null,
//     loading:true
// }


//  export const GlobalContext=createContext(initialState);
//  export const GlobalProvider=({ children }) =>{
//     const [state, dispatch]=useReducer(AppReducer, initialState);

// //actions
//     async function gettransactions(id){
//         try{
//             const res=await axios.get('/api')
//             dispatch({
//                 type:"GET_TRANSACTIONS",
//                 payload:res.data.data
//             })
//         }catch(err){
//             dispatch({
//                 type:"TRANSACTION_ERROR",
//                 payload:err.response.data.error
//             })

//         }

//     }
//     function deleteTransaction(id){
//         dispatch({
//             type:'DELETE_TRANSACTION',
//             payload: id
//         });
//     }

//     function addTransaction(transaction){
//         dispatch({
//             type:'ADD_TRANSACTION',
//             payload: transaction
//         });
//     }

//     return(<GlobalContext.Provider value={{
//         transactions: state.transactions,
//         error:state.error,
//         loading:state.loading,
//         deleteTransaction,
//         addTransaction
//     }}>
//         {children}
//     </GlobalContext.Provider>);
//  }






import React, { createContext, useReducer } from 'react';
import AppReducer from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/contast/AppReducer.js';
import axios from 'axios';

// Initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    try {
      const res = await axios.get('/api/v1/transactions');

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);

      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/v1/transactions', transaction, config);

      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    error: state.error,
    loading: state.loading,
    getTransactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}