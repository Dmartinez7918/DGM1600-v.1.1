let ship = document.querySelector("#ship")
let crew =document.querySelector("#crew")

fetch('https://swapi.co/api/starships/9')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    ship.textContent = myJson.name
    crew.textContent = myJson.crew
    console.log(myJson);
  });

  let planet = document.querySelector ("#planet")
  let pop = document.querySelector("#pop")
  fetch('https://swapi.co/api/planets/2')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    planet.textContent = myJson.name
    pop.textContent = myJson.population
    console.log(myJson);
  });

