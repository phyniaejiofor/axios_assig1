
const  createTd = function(country) {
    const td = document.createElement('td');

    //adding details to th
    td.textContent = `${country.name}`;
    return td;
}

const appendToDOM = function(countries) {
    const tr = document.querySelector('tr');

    //iterates over all countries
    countries.map(function(country) {
        tr.appendChild(createTd(country));
    });
};

    const fetchCountries = () => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then( function(response) {
          const countries = response.data;
             console.log(`GET list countries`, countries);
             //appendToDOM
             appendToDOM(fixers);
       })
        .catch(error => console.error(error));
     };

fetchCountries();






// const  createLi = (country) => {
//     const li = document.createElement('li');

//     //adding details to li
//     li.textContent = `${country.name}`;
//     return li;
// }

// const appendToDOM = (countries) => {
//     const ul = document.querySelector('ul');

//     //iterates over all countries
//     countries.map(country => {
//         ul.appendChild(createLi(country));
//     });
// };

//     const fetchCountries = () => {
//     axios.get('https://restcountries.eu/rest/v2/all')
//       .then(response => {
//           const countries = response.data;
//              console.log(`GET list countries`, countries);
//              //appendToDOM
//              appendToDOM(countries);
//        })
//         .catch(error => console.error(error));
//      };

// fetchCountries();