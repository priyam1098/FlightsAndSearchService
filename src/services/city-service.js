const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }
  async createCity(cityId) {
    try {
      const city = await this.cityRepository.createCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw error;
    }
  }
  async updateCity(cityName, cityId) {
    try {
      const city = await this.cityRepository.updateCity(cityName, cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw error;
    }
  }
  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw error;
    }
  }
  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw error;
    }
  }
}
module.exports = {
  CityService,
};
