let openBtn = document.getElementsByClassName("menu-btn")[0];
let closeBtn = document.getElementById("close-btn");

openBtn.onclick = function() {
  let asideMenu = document.getElementsByClassName("aside-menu")[0];
  asideMenu.style.width = "20%";

  function darkScreen() {
    let darkScreen = document.getElementsByClassName("dark-screen")[0];
    darkScreen.style.opacity = "0.4";
    darkScreen.style.zIndex = "1";
  }

  setTimeout(darkScreen, 300);
  
}

closeBtn.onclick = function() {
  let asideMenu = document.getElementsByClassName("aside-menu")[0];
  asideMenu.style.width = "0%";

    let darkScreen = document.getElementsByClassName("dark-screen")[0];
    darkScreen.style.opacity = "0";
    darkScreen.style.zIndex = "-1";
}