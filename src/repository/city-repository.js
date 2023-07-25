const { City } = require("../models/index");
const { Op } = require("sequelize");
class CityRepository {
  async createCity(data) {
    try {
      if (Array.isArray(data)) {
        const city = await City.bulkCreate(data, { returning: true });
        return city;
      }
      const city = await City.create({ name: data.name });
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
  async getCity(cityId, url) {
    try {
      const parts = url.split("/"); // Split the URL by "/"
      const airport = parts[2]; // The "airport" segment is at index 5
      if (airport == "airport" && cityId) {
        const city = await City.findOne({
          where: {
            id: cityId,
          },
        });
        const airports = await city.getAirports();
        return airports;
      }

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
