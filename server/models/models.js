const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
});

const Profile = sequelize.define('profile', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const ProfilePost = sequelize.define('profile_post', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Subscribe = sequelize.define('subscribe', {
   id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
   subscriber_id: {type: DataTypes.INTEGER},
   subscribe_object_id: {type: DataTypes.INTEGER},
});

const Post = sequelize.define('post', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  description: {type: DataTypes.STRING},
  likes: {type: DataTypes.INTEGER, defaultValue: 0},
  img: {type: DataTypes.STRING, allowNull: false},
});

const LikeState = sequelize.define('LikeState', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  isLiked: {type: DataTypes.BOOLEAN, defaultValue: false},
});

// Many to many example
// const TypeBrand = sequelize.define('type_brand', {
//   id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })
// Type.belongsToMany(Brand, {through: TypeBrand })
// Brand.belongsToMany(Type, {through: TypeBrand })

User.hasOne(Profile);
Profile.belongsTo(User);

User.hasMany(LikeState);
LikeState.belongsTo(User);

Profile.hasMany(ProfilePost);
ProfilePost.belongsTo(Profile);

Profile.hasMany(Subscribe);
Subscribe.belongsTo(Profile);

Post.hasMany(ProfilePost);
ProfilePost.belongsTo(Post);

Post.hasMany(LikeState);
LikeState.belongsTo(Post);

module.exports = {
  User,
  Profile,
  ProfilePost,
  Post,
  LikeState,
}
