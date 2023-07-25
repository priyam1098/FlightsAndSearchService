"use strict";

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
    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          modelNumber: "Boeing 737",
          capacity: 120,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Airbus A320",
          capacity: 140,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Cessna 172",
          capacity: 120,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Bombardier Global 7500",
          createdAt: new Date(),
          capacity: 120,
          updatedAt: new Date(),
        },
      ],
      {}
    );
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
