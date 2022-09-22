const uuid = require('uuid');
const path = require('path');

const {Post} = require('../models/models');
const ApiError = require('../error/ApiError');

class PostController {
  async create(req, res, next) {
    try {
      const {description} = req.body;
      const {img} = req.files;
      const fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const post = await Post.create({description, img: fileName});
      return res.json(post);
    } catch(error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getAll(req, res) {
     const posts = await Post.findAll();
     return res.json(posts);
  }
  async getOne(req, res) {

  }
}

module.exports = new PostController();
