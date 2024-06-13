const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const pdfRouter = require('./pdfserver');
const { authRouter, authenticateJWT } = require('./authserver');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/employee', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => console.log(err));

app.use('/files', express.static('files'));
app.use('/pdf', pdfRouter);
app.use('/auth', authRouter);

const PORT = process.env.PORT || 3002;  // Change the port here
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
