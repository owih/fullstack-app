const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('users', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: 'user'},
});

const Profile = sequelize.define('profile', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  login: {type: DataTypes.STRING, unique: true, allowNull: false},
  img: {type: DataTypes.STRING},
  description: {type: DataTypes.STRING},
  status: {type: DataTypes.STRING},
});

const Post = sequelize.define('post', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  description: {type: DataTypes.STRING},
  link: {type: DataTypes.STRING},
  likes: {type: DataTypes.INTEGER, defaultValue: 0},
  img: {type: DataTypes.STRING, allowNull: false},
  profileImg: {type: DataTypes.STRING},
  profileId: {type: DataTypes.INTEGER, allowNull: false},
  profileName: {type: DataTypes.STRING, allowNull: false},
});

// Many to many example
// const TypeBrand = sequelize.define('type_brand', {
//   id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })
// Type.belongsToMany(Brand, {through: TypeBrand })
// Brand.belongsToMany(Type, {through: TypeBrand })

User.hasOne(Profile);
Profile.belongsTo(User);

Profile.hasMany(Post);
Post.belongsTo(Profile);

module.exports = {
  User,
  Profile,
  Post,
}
