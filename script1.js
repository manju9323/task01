var xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.send();
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 405) {
    var data = JSON.parse(xhr.response);

    data.forEach((item) => {
      console.log(`
      name:${item.name}
      region:${item.region}
      sub region:${item.subregion}
      population:${item.population}
      `);
    })
}
else {
    console.log("Data is not available");
  }
};
