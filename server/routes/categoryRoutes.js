const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController'); // Ajuste o caminho conforme necessário

// Criar nova categoria
router.post('/create', categoryController.createCategory);

// Obter todas as categorias
router.get('/', categoryController.getAllCategories);

// Obter categoria por ID
router.get('/:id', categoryController.getCategoryById);

// Atualizar categoria
router.put('/:id', categoryController.updateCategory);

// Excluir categoria
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
