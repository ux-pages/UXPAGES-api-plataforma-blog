const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rotas de usuários
router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);

// Rota para buscar todos os usuários
router.get('/', authMiddleware, userController.getAllUsers);

// Rota para buscar um usuário por ID
router.get('/users/:id', authMiddleware, userController.getUserById);

// Rota para atualizar um usuário por ID
router.put('/users/:id', authMiddleware, userController.updateUser);

// Rota para deletar um usuário por ID
router.delete('/users/:id', authMiddleware, userController.deleteUser);

// Rota para buscar um usuário por email
router.get('/email', authMiddleware, userController.getUserByEmail);

module.exports = router;
