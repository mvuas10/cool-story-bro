//2. Set up relation in homepage has many stories
//3. Set up relation homepage belongs to 1 user

"use strict";
module.exports = (sequelize, DataTypes) => {
  const homepage = sequelize.define(
    "homepage",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      backgroundColor: {
        type: DataTypes.STRING,
        defaultValue: "#ffffff",
      },
      color: {
        type: DataTypes.STRING,
        defaultValue: "#000000",
      },
    },
    {}
  );

  homepage.associate = function (models) {
    homepage.hasMany(models.story);
    homepage.belongsTo(models.user);
  };
  return homepage;
};
