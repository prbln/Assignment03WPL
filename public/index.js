let allGameCards = [];
url = "http://localhost:3000/";

fetch(url)
  .then((response) => response.json())
  .then((games) => {
    allGameCards = games;
    let allGames = "";
    allGameCards.map((game) => {
      allGames += `
      <div class="card" style="width: 25rem; height: 15rem;">
        <img class="card-img-top" src=${game.image.path} alt=${game.image.description} style="max-width: 100%; max-height: 90%;/>
        <div class="card-body">
          <p class="card-text">${game.name}</p>
        </div>
      </div>`;
    });
    // console.log(allGames);
    document.getElementById("cardContainer").innerHTML = allGames;
  });
