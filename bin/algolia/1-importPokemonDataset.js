// Imports a Pokemon index (i.e. dataset) into your Algolia app.
const client = require("./client");
const axios = require("axios");

const index = client.initIndex("pokemon");

console.log("Importing dataset into Algolia...");

axios
  .get(
    "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
  )
  .then(response => {
    const { pokemon } = response.data;
    return index.saveObjects(pokemon, {
      autoGenerateObjectIDIfNotExist: true,
    });
  })
  .then(() => console.log("Import complete."))
  .catch(err => console.log(err));
