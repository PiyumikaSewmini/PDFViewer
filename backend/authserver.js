const express = require("express");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const AuthenticationModel = require("./models/Authentication");

const authRouter = express.Router();

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, 'jwtSecret');
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
};

authRouter.post('/register', async (req, res) => {
    const { email, password, confirmPassword } = req.body;
    
    console.log("Received data:", req.body); // Log received data
    
    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        let user = await AuthenticationModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new AuthenticationModel({ email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Signup failed. Please try again.' });
    }
});

authRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await AuthenticationModel.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Email or password is wrong' });

        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) return res.status(400).json({ message: 'Email or password is wrong' });

        const token = jwt.sign({ _id: user._id }, 'jwtSecret');
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Login failed. Please try again.' });
    }
});

authRouter.delete('/delete-account', authenticateJWT, async (req, res) => {
    try {
        const user = await AuthenticationModel.findById(req.user._id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        await AuthenticationModel.findByIdAndDelete(req.user._id);
        res.json({ message: 'User account deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete account. Please try again.' });
    }
});

module.exports = { authRouter, authenticateJWT };
