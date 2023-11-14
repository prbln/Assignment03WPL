let allGameCards = [];
url = "http://localhost:3000/";

fetch(url)
  .then((response) => response.json())
  .then((games) => {
    allGameCards = games;
    let allGames = "";
    allGameCards.map((game, index) => {
      allGames += `
      <div class="card" style="width: 25rem; height: 15rem;">
        <a onclick="${onImageClick(index)} "><img class="card-img-top" src=${
        game.image.path
      } alt=${
        game.image.description
      } style="max-width: 100%; max-height: 90%;/><a>
        <div class="card-body">
          <p class="card-text">${game.name}</p>
        </div>
      </div>`;
    });
    // console.log(allGames);
    document.getElementById("cardContainer").innerHTML = allGames;
  });
const addNewGame = () => {
  window.location.href = "newGame.html";
};

const onImageClick = (ind) => {
  // Redirect to the game_details.html page

  window.location.href = "game/ind";
  window.onload(fetch);
};
