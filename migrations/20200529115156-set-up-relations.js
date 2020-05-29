//1. Set up homepage and story relations
//1. Need homepageId in stories table
//2. Set up user and homepage
//2. Need userId in homepage table

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("homepages", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("stories", "homepageId", {
      type: Sequelize.INTEGER,
      references: {
        model: "homepages",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("homepages", "userId");
    await queryInterface.removeColumn("stories", "homepageId");
  },
};
