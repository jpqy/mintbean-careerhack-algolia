// Configures the Pokemon index (i.e. dataset) in your Algolia app.
const client = require("./client");

const index = client.initIndex("pokemon");

console.log("Configuring the Algolia index...");

index
  .setSettings({
    // Select the attributes you want to search in
    searchableAttributes: ["num", "name", "type", "height", "weight"],

    // Define business metrics for ranking and sorting
    customRanking: ["asc(num)"],

    // Set up some attributes to filter results on
    attributesForFaceting: ["searchable(weaknesses)", "searchable(type)"],
  })
  .then(() => console.log("Finished configuring the Algolia database"));
