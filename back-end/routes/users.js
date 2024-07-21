const express = require('express');
const router = express.Router();
const connectDb = require('../models/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = 'yourSecretKey'; // Ensure this is stored securely

/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    const db = await connectDb();
    const userCollection = db.collection('users');
    const users = await userCollection.find().toArray();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

/* POST login */
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const db = await connectDb();
    const userCollection = db.collection('users');
    const user = await userCollection.findOne({ email,password });
    console.log(user);
    if (user && password) {
      console.log('Login successful');
      const token = jwt.sign({ email, role: user.role,image:user.image,username:user.username }, secretKey, { expiresIn: '1h' });
      console.log(token);
      
      res.status(200).json({ message: 'Login successful', token,user });
    } else {
      console.log('Invalid email or password');
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Middleware to authenticate token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401); // Unauthorized
  
  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden
    req.user = user;
    next();
  });
}

router.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Authenticated successfully' });
});

module.exports = router;
