import Nigiri from "./assets/img/nigiri.jpg";
import NigiriTea from "./assets/img/nigiri-tea.jpg";
import FancyBento from "./assets/img/fancy-bento.jpg";

function menu(templates) {
  templates["headerTitle"].innerText = "Menù";
  templates["section1"].innerText = "";
  templates["section2"].innerText = "";
  templates["section3"].innerText = "";

  templates["section1"].classList = "food-card";
  templates["section2"].classList = "food-card";
  templates["section3"].classList = "food-card";

  const headerSection1 = document.createElement("h2");
  const headerSection2 = document.createElement("h2");
  const headerSection3 = document.createElement("h2");

  headerSection1.innerText = "Nigiri Set ($8,99)";
  headerSection2.innerText = "Nigiri Set With Tea ($15,99)";
  headerSection3.innerText = "The Fancy Bento ($24,99)";

  templates["section1"].appendChild(headerSection1);
  templates["section2"].appendChild(headerSection2);
  templates["section3"].appendChild(headerSection3);

  const nigiri = new Image();
  const nigiriTea = new Image();
  const fancyBento = new Image();

  nigiri.src = Nigiri;
  nigiriTea.src = NigiriTea;
  fancyBento.src = FancyBento;

  templates["section1"].appendChild(nigiri);
  templates["section2"].appendChild(nigiriTea);
  templates["section3"].appendChild(fancyBento);
}

export default menu;