const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, blogController.createBlog);
router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getBlogById);
router.put('/:id', authMiddleware, blogController.updateBlog);
router.delete('/:id', authMiddleware, blogController.deleteBlog);

module.exports = router;
