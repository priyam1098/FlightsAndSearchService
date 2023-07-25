"use strict";

const { DATE } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Airports", [
      {
        name: "Chennai International Airport",
        cityId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rajashtan International Airport",
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rajashtan Airport",
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bengluru International Airport",
        cityId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Manglore Bengluru  Airport",
        cityId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Goa International Airport",
        cityId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
