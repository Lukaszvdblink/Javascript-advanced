fetch('https://fortnite-api.com/v2/cosmetics/new')
  .then(response => response.json())
  .then(data => {
    const container = document.createElement('div');
    container.classList.add('grid');
    document.body.appendChild(container);

    for (let item of data.data.items.br) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${item.images.icon}" alt="${item.name}">
        <h3>${item.name}</h3>
      `;
      container.appendChild(card);
    }
  })
  .catch(error => {
    console.log('Er ging iets mis:', error);
    document.body.innerHTML = '<p>Sorry, data kon niet geladen worden.</p>';
  });

