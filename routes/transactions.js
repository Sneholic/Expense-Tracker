const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction } = require('/home/racitsolution/Desktop/Expense_tracker-main/controllers/transactions.js');

router
  .route('/')
  .get(getTransactions)
  .post(addTransaction);

router
  .route('/:id')
  .delete(deleteTransaction);

module.exports = router;