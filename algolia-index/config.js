const algoliasearch = require("algoliasearch");
const axios = require("axios");
require("dotenv").config();
const client = algoliasearch(process.env.APPLICATION_ID, process.env.ADMIN_API);

const index = client.initIndex("pokemon");

index.setSettings({
  // Select the attributes you want to search in
  searchableAttributes: ["num", "name", "type", "height", "weight"],
  // Define business metrics for ranking and sorting
  customRanking: ["asc(num)"],
  // Set up some attributes to filter results on
  attributesForFaceting: ["searchable(weaknesses)", "searchable(type)"],
});
