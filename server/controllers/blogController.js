const Blog = require('../models/blogModel');

exports.createBlog = async (req, res) => {
  try {
    const { title, category, text, subtitles, photo } = req.body;
    const blog = await Blog.create({ title, category, text, subtitles, photo, userId: req.user.id });
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog', error });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog', error });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, category, text, subtitles, photo } = req.body;
    const blog = await Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    await blog.update({ title, category, text, subtitles, photo });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error updating blog', error });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    await blog.destroy();
    res.status(200).json({ message: 'Blog deleted successfully' });
} catch (error) {
  res.status(500).json({ message: 'Error deleting blog', error });
}
}
