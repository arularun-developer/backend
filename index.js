// app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const userRoutes = require('./Routes/userroute');
const expenseRoutes = require('./Routes/expenseroute');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/user', userRoutes);
app.use('/expenses', expenseRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
