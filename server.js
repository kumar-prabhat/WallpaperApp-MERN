const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect database
connectDB();

//Init middleware
app.use(express.json({ extends: false }));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/imagedata', require('./routes/api/imageData'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
