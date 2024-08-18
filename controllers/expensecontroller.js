// controllers/expenseController.js
const Expense = require('../model/expense');
exports.addExpense = async (req, res) => {
  const { amount, category, date, description } = req.body;

  try {
    const expense = new Expense({
      user: req.user.id,
      amount,
      category,
      date,
      description,
    });

    const createdExpense = await expense.save();
    res.status(201).json({
      message: 'Expense added successfully',
      expense: createdExpense,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await Expense.findById(id);
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    if (expense.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Unauthorized action' });
    }

    await Expense.findByIdAndDelete(req.params.id);

    res.json({ message: 'Expense successfully deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error, please try again later' });
  }
};


