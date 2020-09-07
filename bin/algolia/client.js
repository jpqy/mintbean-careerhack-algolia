// Generates an Algolia client using Algolia's SDK and your Algolia app's API
// keys in .env. The client allows operations to be run against your Algolia
// app in Node.

require("dotenv").config();
const algoliasearch = require("algoliasearch");

const { REACT_APP_ALGOLIA_APPLICATION_ID, ALGOLIA_ADMIN_API_KEY } = process.env;

if (!REACT_APP_ALGOLIA_APPLICATION_ID || !ALGOLIA_ADMIN_API_KEY) {
  throw new Error(
    "Please configure the variables [REACT_APP_ALGOLIA_APPLICATION_ID] and [ALGOLIA_ADMIN_API_KEY] in your .env file"
  );
}

const client = algoliasearch(
  REACT_APP_ALGOLIA_APPLICATION_ID,
  ALGOLIA_ADMIN_API_KEY
);

module.exports = client;
