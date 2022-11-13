const { Profile } = require('../models/models');
const { Op } = require("sequelize");
const uuid = require("uuid");
const path = require("path");

class ProfileController {
  async getAll(req, res) {
    let {limit, page} = req.query;
     page = page || 1;
     limit = limit || 9;
     const offset = page * limit - limit;
     const profiles = await Profile.findAndCountAll({limit, offset});
     return res.json(profiles);
  }
  async getPerName(req, res) {
    let {limit, page, name} = req.query;
    page = page || 1;
    limit = limit || 9;
    const offset = page * limit - limit;
    const profiles = await Profile.findAndCountAll({ limit, offset, where: { login: { [Op.substring]: name.trimStart().trimEnd().toLowerCase() } } });
    return res.json(profiles);
  }
  async getOne(req, res) {
     const {id} = req.params;
     const profile = await Profile.findOne({ where: {id} });
     return res.json(profile);
  }
  async changeProfileData(req, res) {
    const { name, status, description } = req.body;
    const {id} = req.params;
    const profile = await Profile.findOne({where: {id}});

    if (req.files) {
      const {img} = req.files;
      const fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      await profile.update({name, description, status, img: fileName});
      await profile.save();
      return res.json(profile);
    } else {
      await profile.update({name, description, status });
      await profile.save();
      return res.json(profile);
    }
  }
}

module.exports = new ProfileController();
