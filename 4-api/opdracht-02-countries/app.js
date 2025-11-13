fetch("https://restcountries.com/v3.1/all?fields=name,flags")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("countries");

    data.forEach(country => {
      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      img.src = country.flags.png;
      img.alt = `Flag of ${country.name.common}`;

      const name = document.createElement("h3");
      name.textContent = country.name.common;

      card.appendChild(img);
      card.appendChild(name);
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Er ging iets mis:", error);
    document.getElementById("countries").innerHTML =
      "<p>Sorry, landen konden niet geladen worden.</p>";
  });
