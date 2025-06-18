import express from 'express';
import {
  register,
  login,
  getUsers,
  getUserByEmail,
  updateUser,
  deleteUser
} from '../controllers/authController.js';
const router = express.Router();

router.post('/register', register);    
router.post('/login', login);         

router.get('/users', getUsers);        
router.get('/users/:email', getUserByEmail); 

router.put('/users/:email', updateUser); 
router.delete('/users/:email', deleteUser); 

export default router;
