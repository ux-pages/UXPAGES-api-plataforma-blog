const Blog = require('../models/blogModel');

// Criação de um novo blog
exports.createBlog = async (req, res) => {
  try {
    console.log('Headers:', req.headers);
    console.log('Requisição recebida:', req.body); // Adicione log para verificar o corpo da requisição

    const {
      titulo, categoria_id, subtitulo, textone, subtextone,
      texttwo, subtextwo, textthree, subtextthree,
      textfour, subtextfour, textfive, subtextfive,
      textsix, subtextsix, textseven, subtextseven,
      texteight, subtexteight, textnine, subtextnine,
      textten, subtextten, photo
    } = req.body;

    console.log('Dados desestruturados:', {
      titulo, categoria_id, subtitulo, textone, subtextone,
      texttwo, subtextwo, textthree, subtextthree,
      textfour, subtextfour, textfive, subtextfive,
      textsix, subtextsix, textseven, subtextseven,
      texteight, subtexteight, textnine, subtextnine,
      textten, subtextten, photo
    });

    // Validação básica dos dados
    if (!titulo || !categoria_id || !subtitulo) {
      return res.status(400).json({ message: 'Campos obrigatórios não fornecidos.' });
    }

    // Criação do blog
    const blog = await Blog.create({
      titulo,
      categoria_id,
      subtitulo: subtitulo || null,
      textone: textone || null,
      subtextone: subtextone || null,
      texttwo: texttwo || null,
      subtextwo: subtextwo || null,
      textthree: textthree || null,
      subtextthree: subtextthree || null,
      textfour: textfour || null,
      subtextfour: subtextfour || null,
      textfive: textfive || null,
      subtextfive: subtextfive || null,
      textsix: textsix || null,
      subtextsix: subtextsix || null,
      textseven: textseven || null,
      subtextseven: subtextseven || null,
      texteight: texteight || null,
      subtexteight: subtexteight || null,
      textnine: textnine || null,
      subtextnine: subtextnine || null,
      textten: textten || null,
      subtextten: subtextten || null,
      photo: photo || null
    });

    res.status(201).json(blog);
  } catch (error) {
    console.error('Erro ao criar blog:', error);
    res.status(500).json({ message: 'Erro ao criar blog', error: error.message });
  }
};



// Obter todos os blogs com opções de paginação e filtragem
exports.getAllBlogs = async (req, res) => {
  try {
    const { page = 1, limit = 10, categoria_id } = req.query;
    const offset = (parseInt(page) - 1) * parseInt(limit);

    const queryOptions = {
      limit: parseInt(limit),
      offset,
      order: [['data_criacao', 'DESC']],
    };

    if (categoria_id) {
      queryOptions.where = { categoria_id: parseInt(categoria_id) };
    }

    const blogs = await Blog.findAndCountAll(queryOptions);

    res.status(200).json({
      totalItems: blogs.count,
      totalPages: Math.ceil(blogs.count / limit),
      currentPage: parseInt(page),
      blogs: blogs.rows,
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar blogs', error: error.message });
  }
};

// Obter um blog por ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog não encontrado' });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar blog', error: error.message });
  }
};

// Atualizar um blog existente
exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      titulo, categoria_id, subtitulo, textone, subtextone,
      texttwo, subtextwo, textthree, subtextthree,
      textfour, subtextfour, textfive, subtextfive,
      textsix, subtextsix, textseven, subtextseven,
      texteight, subtexteight, textnine, subtextnine,
      textten, subtextten, photo
    } = req.body;

    const blog = await Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog não encontrado' });
    }

    await blog.update({
      titulo, categoria_id, subtitulo, textone, subtextone,
      texttwo, subtextwo, textthree, subtextthree,
      textfour, subtextfour, textfive, subtextfive,
      textsix, subtextsix, textseven, subtextseven,
      texteight, subtexteight, textnine, subtextnine,
      textten, subtextten, photo
    });

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar blog', error: error.message });
  }
};

// Excluir um blog existente
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog não encontrado' });
    }
    await blog.destroy();
    res.status(200).json({ message: 'Blog excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir blog', error: error.message });
  }
};
