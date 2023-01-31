const { Profile } = require('../models/models');
const { Op } = require("sequelize");
const uuid = require("uuid");
const path = require("path");
const ApiError = require("../error/ApiError");

class ProfileController {
  async getAll(req, res, next) {
    try {
      let { limit, page } = req.query;
      page = page || 1;
      limit = limit || 9;
      const offset = page * limit - limit;
      const profiles = await Profile.findAndCountAll({ limit, offset });
      return res.json(profiles);
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
  async getPerName(req, res, next) {
    try {
      let { limit, page, name } = req.query;
      page = page || 1;
      limit = limit || 9;
      const offset = page * limit - limit;
      const profiles = await Profile.findAndCountAll({ limit, offset, where: { login: { [Op.iLike]: '%' + name.trimStart().trimEnd().toLowerCase() + '%' } } });
      return res.json(profiles);
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
  async getOne(req, res, next) {
     try {
       const {id} = req.params;
       const profile = await Profile.findOne({ where: { id } });
       return res.json(profile);
     } catch (e) {
       next(ApiError.badRequest(e.message))
     }
  }
  async changeProfileData(req, res, next) {
    try {
      let { name, status, description } = req.body;
      status = status || '';
      description = description || '';
      const { id } = req.params;
      const profile = await Profile.findOne({ where: { id } });

      if (req.files) {
        const { img } = req.files;
        const fileName = uuid.v4() + '.jpg';
        img.mv(path.resolve(__dirname, '..', 'static', fileName));
        await profile.update({ name, description, status, img: fileName });
        await profile.save();
        return res.json(profile);
      } else {
        await profile.update({ name, description, status });
        await profile.save();
        return res.json(profile);
      }
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new ProfileController();
