function createTemplate() {
  const content = document.getElementById("content");

  const main = document.createElement("main");
  const headerTitle = document.createElement("h1");
  const section1 = document.createElement("section");
  const section2 = document.createElement("section");
  const section3 = document.createElement("section");

  main.append(headerTitle);
  main.append(section1);
  main.append(section2);
  main.append(section3);
  content.append(main);

  return {
    "main": main,
    "headerTitle": headerTitle,
    "section1": section1,
    "section2": section2,
    "section3": section3,
  }
}

export default createTemplate;