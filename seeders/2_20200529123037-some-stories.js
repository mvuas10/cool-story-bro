"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("stories", [
      {
        name: "unicorn",
        content: "become a politician",
        imageUrl:
          "https://i.pinimg.com/236x/a0/51/e6/a051e66bddb550c293a4ba3ace9228b3--vladimir-putin-the-late.jpg",
        homepageId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "I am a doggy",
        content: "becoming a good boy",
        imageUrl: "http://www.dumpaday.com/wp-content/uploads/2016/05/353.jpg",
        homepageId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "My family",
        content: "At lunch my family just stood there and watch",
        imageUrl:
          "http://www.dumpaday.com/wp-content/uploads/2016/09/baptism-baby.jpg",
        homepageId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Immigration",
        content: "Graduation is harder than crossing border",
        imageUrl:
          "http://www.dumpaday.com/wp-content/uploads/2016/09/graduation.jpg",
        homepageId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stories", null, {});
  },
};
