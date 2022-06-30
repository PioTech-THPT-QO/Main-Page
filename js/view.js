const view = {};
view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case "homeScreen":
      document.getElementById("app").innerHTML = components.homeScreen;
      break;

    case "playScreen":
      document.getElementById("app").innerHTML = components.playScreen;
      break;

    case "leaderBoard":
      document.getElementById("app").innerHTML = components.leaderBoard;
      break;

    case "helpScreen":
      document.getElementById("app").innerHTML = components.helpScreen;
      break;
  }
};

view.setActiveScreen('homeScreen');

document.getElementById("_home").addEventListener("click",() => {
  view.setActiveScreen("homeScreen");
})
document.getElementById("_help").addEventListener("click", () => {
  view.setActiveScreen("helpScreen");
});  

document.getElementById("_leaderboard").addEventListener("click", () => {
  view.setActiveScreen("leaderBoard");
  });  