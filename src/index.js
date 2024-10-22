import "./styles.css";
import createTemplate from "./template";
import home from "./home";
import menu from "./menu";
import about from "./about";

function selectPage() {
  const templates = createTemplate();
  const homeButton = document.getElementById("home");
  const menuButton = document.getElementById("menu");
  const aboutButton = document.getElementById("about");

  homeButton.addEventListener("click", () => {
    menuButton.style.backgroundColor = "whitesmoke";
    aboutButton.style.backgroundColor = "whitesmoke";
    homeButton.style.backgroundColor = "gold";
    home(templates);
  });

  menuButton.addEventListener("click", () => {
    homeButton.style.backgroundColor = "whitesmoke";
    aboutButton.style.backgroundColor = "whitesmoke";
    menuButton.style.backgroundColor = "gold";
    menu(templates);
  });

  aboutButton.addEventListener("click", () => {
    homeButton.style.backgroundColor = "whitesmoke";
    menuButton.style.backgroundColor = "whitesmoke";
    aboutButton.style.backgroundColor = "gold";
    about(templates);
  });

  home(templates);
}

selectPage();