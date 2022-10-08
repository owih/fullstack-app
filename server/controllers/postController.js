const uuid = require('uuid');
const path = require('path');

const {Post} = require('../models/models');
const ApiError = require('../error/ApiError');

class PostController {
  async create(req, res, next) {
    try {
      const {description, profileId} = req.body;
      const {img} = req.files;
      const fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const post = await Post.create({description, img: fileName, profileId});
      return res.json(post);
    } catch(error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getAll(req, res, next) {
    try {
      let {limit, page, profileId} = req.query;
      page = page || 1;
      limit = limit || 9;
      const offset = page * limit - limit;
      let posts = [];
      if (profileId) {
        posts = await Post.findAll({limit, offset, where: { profileId }});
      } else {
        posts = await Post.findAndCountAll({limit, offset});
      }
      return res.json(posts);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getOne(req, res) {
     const {id} = req.params;
     const post = await Post.findOne({ where: { id } });
     return res.json(post);
  }
}

module.exports = new PostController();
