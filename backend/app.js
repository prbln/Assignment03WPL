const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

let allGameCards = [];

//////////////connecting to front end
port = 3000;
app.listen(port, () => {});

///////Adding elements to all games array.
const addEleToArray = (ele) => {
  allGameCards.push(ele);
};

//////////////////////Mongo Connection
const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  // Connect the client to the server
  await client.connect();

  // Establish and verify connection
  await client.db("arcade").command({ ping: 1 });
}

////////////Get respose --> endpoint
app.get("/", async (req, res) => {
  const db = client.db("Arcade");
  const coll = db.collection("games");
  const cursor = await coll.find({});
  const documentArray = await cursor.toArray();
  res.status(200).json(documentArray);
});
run().catch(console.dir);
