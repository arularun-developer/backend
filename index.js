// app.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Import cors
const connectDB = require('./db');
const userRoutes = require('./Routes/userroute');
const expenseRoutes = require('./Routes/expenseroute');

dotenv.config();
connectDB();

const app = express();

app.use(cors()); // Use cors middleware
app.use(express.json());

// Add a route for the root URL to send the welcome message
app.get('/', (req, res) => {
  res.send('Welcome to Expense Tracker App');
});

app.use('/user', userRoutes);
app.use('/expenses', expenseRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
