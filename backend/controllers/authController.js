import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    console.log("Register API hit");             // Add this
    console.log("Data received:", req.body);   
  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashed });
  await user.save();
  res.json({ message: 'User registered' });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Invalid email' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

  const token = jwt.sign({ userId: user._id }, 'secretkey');
  res.json({ token });
};
// GET /users
export const getUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
};

// GET /users/:email
export const getUserByEmail = async (req, res) => {
  const user = await User.findOne({ email: req.params.email }).select('-password');
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

// PUT /users/:email
export const updateUser = async (req, res) => {
  const updated = await User.findOneAndUpdate(
    { email: req.params.email },
    req.body,
    { new: true }
  );
  if (!updated) return res.status(404).json({ message: 'User not found' });
  res.json(updated);
};

// DELETE /users/:email
export const deleteUser = async (req, res) => {
  const deleted = await User.findOneAndDelete({ email: req.params.email });
  if (!deleted) return res.status(404).json({ message: 'User not found' });
  res.json({ message: 'User deleted successfully' });
};