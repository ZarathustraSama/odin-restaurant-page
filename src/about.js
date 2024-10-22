function about(templates) {
  templates["headerTitle"].innerText = "About Us";
  templates["section1"].innerText = "";
  templates["section2"].innerText = "";
  templates["section3"].innerText = "";

  templates["section1"].classList = "info-card";
  templates["section2"].classList = "info-card";
  templates["section3"].classList = "info-card";

  const headerSection1 = document.createElement("h2");
  const headerSection2 = document.createElement("h2");
  const headerSection3 = document.createElement("h2");

  headerSection1.innerText = "How to contact us!";
  headerSection2.innerText = "When to find us!";
  headerSection3.innerText = "Where to find us!";

  templates["section1"].innerText = `Email: sushi.future@tomorrow.com\n\nTelephone number: 555-5555555`;
  templates["section2"].innerText = `Monday 12:00-15:00\n\nTuesday 12:00-15:00\n\nWednesday Closed\n\nThursday Closed\n\nFriday 19:00-23:00\n\nSaturday 18:00-00:00\n\nSunday 18:00-00:00`;
  templates["section3"].innerText = "Dreamland Street 123, Atlantis";

  templates["section1"].prepend(headerSection1);
  templates["section2"].prepend(headerSection2);
  templates["section3"].prepend(headerSection3);
}

export default about;