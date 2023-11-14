let allGameCards = [];
url = "http://localhost:3000/";

const addNewGame = () => {
  window.location.href = "newGame";
};
const onSaveNewGame = async () => {
  newGameTitle = document.getElementById("newGameTitle").value;
  newGameTextArea = document.getElementById("newGameTextArea").value;
  newGameType = document.getElementById("newGameType").value;
  newGameMinAge = document.getElementById("newGameMinAge").value;
  newGamePricingHourly = document.getElementById("newGamePricingHourly").value;
  newGamePricingPerGame = document.getElementById(
    "newGamePricingPerGame"
  ).value;
  newGameImagePath = document.getElementById("newGameImagePath").value;
  newGameAltText = document.getElementById("newGameAltText").value;

  newGameDetails = {
    name: newGameTitle,
    description: newGameTextArea,
    type: newGameType,
    minimumAge: newGameMinAge,
    pricing: {
      hourly: newGamePricingHourly,
      perGame: newGamePricingPerGame,
    },
    image: {
      description: newGameAltText,
      path: newGameImagePath,
    },
  };

  await fetch("http://localhost:3000/newGame", {
    method: "POST",
    body: newGameDetails,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log("Posted Successfully");
    // window.location.href = "games";
  });
};
const onImageClick = (ind) => {
  // Redirect to the game_details.html page

  window.location.href = "game/ind";
  window.onload(fetch);
};
