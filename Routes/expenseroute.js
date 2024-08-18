// routes/expenses.js
const express = require('express');
const { addExpense, getExpenses, deleteExpense } = require('../controllers/expensecontroller');
const { auth } = require('../middleware/auth');

const router = express.Router();

router.route('/')
  .post(auth, addExpense)
  .get(auth, getExpenses);

router.route('/:id')
  .delete(auth, deleteExpense);


module.exports = router;
