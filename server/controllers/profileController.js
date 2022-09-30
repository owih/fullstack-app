const {Profile} = require('../models/models');

class ProfileController {
  async getAll(req, res) {
    let {limit, page} = req.query;
     page = page || 1;
     limit = limit || 9;
     const offset = page * limit - limit;
     const profiles = await Profile.findAndCountAll({limit, offset});
     return res.json(profiles);
  }
  async getOne(req, res) {
     const {id} = req.params;
     const profile = await Profile.findOne({ where: {id} });
     return res.json(profile);
  }
}

module.exports = new ProfileController();
