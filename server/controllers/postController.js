const {Post} = require('../models/models');
const ApiError = require('../error/ApiError');

class PostController {
  async create(req, res) {
    const {description, img} = req.body;
    const post = await Post.create({description, img});
    return res.json(post);
  }
  async getAll(req, res) {
     const posts = await Post.findAll();
     return res.json(posts);
  }
  async getOne(req, res) {

  }
}

module.exports = new PostController();
