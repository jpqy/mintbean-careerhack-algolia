const algoliasearch = require("algoliasearch");
const axios = require("axios");
require("dotenv").config();
const client = algoliasearch(process.env.APPLICATION_ID, process.env.ADMIN_API);

const index = client.initIndex("pokemon");

axios
  .get(
    "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
  )
  .then(function (response) {
    const { pokemon } = response.data;
    return index.saveObjects(pokemon, {
      autoGenerateObjectIDIfNotExist: true,
    });
  })
  .catch(err => console.log(err));
