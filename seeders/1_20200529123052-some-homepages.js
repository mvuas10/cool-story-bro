"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "homepages",
      [
        {
          title: "testhomepage",
          description: "random",
          backgroundColor: "#80ced6",
          color: "#260C19",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "dummyhomepage",
          description: "random",
          backgroundColor: "#d5f4e6",
          color: "#260C19",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("homepages", null, {});
  },
};
