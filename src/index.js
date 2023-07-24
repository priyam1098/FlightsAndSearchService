const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const { CityRepository } = require("./repository/city-repository");
const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
    const cityRepository = new CityRepository();
    //cityRepository.createCity({ name: "New Delhi" });
    //cityRepository.deleteCity({ cityId: 5 });
    //cityRepository.updateCity({ cityName: "Mumbai", cityId: 6 });
    //console.log(await cityRepository.getCity(6));
    // const city = await cityRepository.getCity(6);
    // console.log(city.dataValues.name);
    //cityRepository.createCity({ name: "PriyamCity" });
    //cityRepository.deleteCity({ cityId: 7 });
    //cityRepository.updateCity({ cityName: "Rajashtan", cityId: "9" });
  });
};
setupAndStartServer();
