const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
var path = require("path");
let allGameCards = [];

publicPath = __dirname + "/public";
app.use(express.static(publicPath));

//////////////connecting to front end
port = 3000;
app.listen(port, () => {});

///////Adding elements to all games array.
const addEleToArray = (ele) => {
  allGameCards.push(ele);
};

//////////////////////Mongo Connection ************************************************
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
}
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

////////////Get respose --> endpoint
app.get("/", async (req, res) => {
  res.redirect("/games");
});
app.get(["/games"], async (req, res) => {
  const cursor = client.db("Arcade").collection("games").find({});
  const allGames = await cursor.toArray();
  res.render("pages/games", { games: allGames });
});

app.get(["/newGame"], async (req, res) => {
  res.render("pages/newGame");
});

app.post("/newGame", async (req, res) => {
  console.log(req.body, "here");
  res.json();
  // InsertNewGame(client, newGameDetails);
});
run();
//////////Queries

/////////01. Insertion
async function InsertNewGame(client, newGameDetails) {
  const result = await client
    .db("Arcade")
    .collection("games")
    .insertOne(newGameDetails);
  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
}
////testing
// newGameDetails =

///////////02. Deletion
async function DeleteGame(client, DeleteCriteria) {
  const result = await client
    .db("Arcade")
    .collection("games")
    .deleteOne(DeleteCriteria);
  console.log(`${result.deletedCount} document(s) was/were deleted.`);
}
DeleteCriteria = {
  name: "Life Game",
};
// DeleteGame(client, DeleteCriteria);

////////////03. Find
async function findOneListingByName(client, searchCriteria) {
  const result = await client
    .db("Arcade")
    .collection("games")
    .findOne(searchCriteria);

  if (result) {
    console.log(`Found something with'${searchCriteria}':`);
    console.log(result);
  } else {
    console.log(`Nothing found with '${searchCriteria}'`);
  }
}
// const searchCriteria = {}
// findOneListingByName(client, searchCriteria);

//////////////04. Read all
// async function findAllGame(client, allGames) {}
// findAllGame(client);

////////////05. Update
async function updateGame(client, gameName, updatedListing) {
  const result = client
    .db("Arcade")
    .collection("games")
    .updateOne({ name: gameName }, { $set: updatedListing });
}
// gameName = "Yo-ball";
// updateGame(client, gameName, { name: "Skee-ball" });
