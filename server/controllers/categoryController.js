const Category = require('../models/categoryModel'); // Ajuste o caminho conforme necessário

exports.createCategory = async (req, res) => {
    try {
        // Desestruturação dos dados recebidos
        const { nome } = req.body;

        // Validação básica dos dados
        if (!nome) {
            return res.status(400).json({ message: 'Nome da categoria é obrigatório.' });
        }

        // Criação da categoria
        const category = await Category.create({ nome });

        // Resposta de sucesso
        res.status(201).json(category);
    } catch (error) {
        // Log do erro detalhado
        console.error('Erro ao criar categoria:', error);

        // Resposta de erro com mensagem detalhada
        res.status(500).json({
            message: 'Erro ao criar categoria',
            error: error.message
        });
    }
};



// Obter todas as categorias
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching categories', error });
    }
};

// Obter categoria por ID
exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching category', error });
    }
};

// Atualizar categoria
exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome } = req.body; // Esperando 'nome' no body
        const category = await Category.findByPk(id);
        if (!category) {
            return res.status(404).json({ message: 'Categoria não encontrada' });
        }
        await category.update({ nome: nome });
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar categoria', error });
    }
};


// Excluir categoria
exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        await category.destroy();
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting category', error });
    }
};
