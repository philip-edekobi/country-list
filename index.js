const { appendFileSync } = require("fs");
const path = require("path");
const { getSortedCountryList } = require("./countries");

(async () => {
  let countriesWithFlagList = [];

  const countries = await getSortedCountryList();
  for (let country of countries) {
    countriesWithFlagList.push(`${country.flag} ${country.name}\n`);
  }

  for (let country of countriesWithFlagList) {
    appendFileSync("." + path.sep + "data.txt", country);
  }

  console.log("complete...");
})();
