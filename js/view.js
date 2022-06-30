const view = {};
view.setActiveScreen = (screenName) => {
  // hiểu đây là 1 function
  switch (screenName) {
    case "welcomeScreen":
      document.getElementById("app").innerHTML = components.welcomeScreen;
      break;

    case "homeScreen":
      document.getElementById("app").innerHTML = components.homeScreen;
        //log out
      document
        .getElementById("logOutButton")
        .addEventListener("click", () => {
          
          view.setActiveScreen("loginScreen");
        });
        //play
      document.getElementById("_play").addEventListener("click", () => {
        view.setActiveScreen("playScreen");
      }); 
        //help
      document.getElementById("_help").addEventListener("click", () => {
        view.setActiveScreen("helpScreen");
      });  

        //leaderboard
      document.getElementById("_leaderboard").addEventListener("click", () => {
        view.setActiveScreen("leaderBoard");
        });  
      break;
    case "playScreen":
      document.getElementById("app").innerHTML = components.playScreen;
      //bắt đầu game
      Snake()

      document.getElementById("return").addEventListener("click",() => {
        view.setActiveScreen("homeScreen");
      })
    break;

    case "leaderBoard":
      document.getElementById("app").innerHTML = components.leaderBoard;

      //play
      document.getElementById("_play").addEventListener("click", () => {
        view.setActiveScreen("playScreen");
      }); 

       //help
       document.getElementById("_help").addEventListener("click", () => {
        view.setActiveScreen("helpScreen");
      });  

      //home
      document.getElementById("_home").addEventListener("click",() => {
        view.setActiveScreen("homeScreen");
      })

      document
        .getElementById("logOutButton")
        .addEventListener("click", () => {
          
          view.setActiveScreen("loginScreen");
        });
    break

    case "helpScreen":
      document.getElementById("app").innerHTML = components.helpScreen;

      //home
      document.getElementById("_home").addEventListener("click",() => {
        view.setActiveScreen("homeScreen");
      })

      //play
      document.getElementById("_play").addEventListener("click", () => {
        view.setActiveScreen("playScreen");
      }); 

      //leaderboard
      document.getElementById("_leaderboard").addEventListener("click", () => {
        view.setActiveScreen("leaderBoard");
        });  

        document
        .getElementById("logOutButton")
        .addEventListener("click", () => {
          
          view.setActiveScreen("loginScreen");
        });  
  }
};

view.setActiveScreen('homeScreen');