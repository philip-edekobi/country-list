const axios = require("axios");

async function getCountries() {
  const countryApiResp = await axios.get("https://restcountries.com/v3.1/all");

  const data = await countryApiResp.data;
  return data;
}

async function getSortedCountryList() {
  let modCountries = [];

  const countries = await getCountries("https://restcountries.com/v3.1/all");

  for (let country of countries) {
    modCountries.push({
      flag: country.flag,
      name: country.name.common,
    });
  }

  modCountries.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return modCountries;
}

module.exports = {
  getCountries,
  getSortedCountryList,
};
