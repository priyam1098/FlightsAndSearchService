const { City } = require("../models/index");
const { Op } = require("sequelize");
class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something went wrong at repo layer");
      throw error;
    }
  }
  async updateCity(cityName, cityId) {
    try {
      // const city = await City.update(
      //   { name: cityName.name },
      //   { where: { id: cityId } }
      // );
      const city = await City.findByPk(cityId);
      city.name = cityName.name;
      await city.save();
      return city.name;
    } catch (error) {
      console.log("Something went wrong at repo layer");
      throw error;
    }
  }
  async deleteCity(cityId) {
    try {
      const city = await City.destroy({
        //custome object key is where and another object
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong at repo layer");
      throw error;
    }
  }
  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      console.log(city);
      return city;
    } catch (error) {
      console.log("Something went wrong at repo layer");
      throw error;
    }
  }
  async getAllCities(filter) {
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something went wrong at repo layer");
      throw error;
    }
  }
}

module.exports = CityRepository;
