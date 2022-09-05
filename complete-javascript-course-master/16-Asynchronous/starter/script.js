'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = function (data) {
  const html = `<article class="country">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} crore people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const getCountryNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  // console.log(request.responseText);

  request.addEventListener('load', function () {
    // console.log(this.responseText);
    //for India use this bcs there are two countires ofthe same name else
    //   const [a, data] = JSON.parse(this.responseText);
    //use this
    if (country === 'india') {
      var [a, data] = JSON.parse(this.responseText);
      console.log(data);
      renderCountry(data);
      //   console.log(1);
    } else {
      var [data] = JSON.parse(this.responseText);
      //   console.log(2);
      console.log(data);
      renderCountry(data);
    }

    //  get neeihbour country
    const neighbour = data.borders?.[0];
    //2nd ajax calls for neighbour
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2);
    });
  });
};
// getCountryNeighbour('kenya');
getCountryNeighbour('india');
