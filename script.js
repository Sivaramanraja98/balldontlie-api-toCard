// Creating div element for the container
const container = document.createElement('div');
container.className = 'container';
container.id = 'background';
document.body.appendChild(container);

// Creating div element for the row of cards
const cardRow = document.createElement('div');
cardRow.className = 'row g-5 ';
cardRow.id = 'row';
container.appendChild(cardRow);

// Function to fetch data from the API and create cards
async function fetchballdontlieApiData() {
  try {
    // Fetch data from the API
    const response = await fetch('https://www.balldontlie.io/api/v1/players');

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Error fetching data. Status: ${response.status}`);
    }

    // Parse the response to JSON format
    const playerData = await response.json();

    // Get the cardRow container element
    const cardRow = document.getElementById('row');

    // Loop through the player data and create cards for each player
    playerData.data.forEach(player => {
      const cardcol = document.createElement('div');
      cardcol.className = 'col-lg-4 col-sm-12'; 

      const card = document.createElement('div');
      card.className = 'card ';
      card.id = 'cardsty';

      const cardbody = document.createElement('div');
      cardbody.className = 'card-body';
      cardbody.id = 'c-body';

      const cardheader = document.createElement('div')
      const h5 = document.createElement('p');
      h5.id = 'name';
      cardheader.className = 'card-title';
      cardheader.id = 'c-title';
      h5.innerHTML = `PLAYER NAME - ${player.first_name} ${player.last_name}`;

      const text1 = document.createElement('p');
      text1.className = 'text1';
      text1.id = 't1';
      text1.innerHTML = `POSITION - ${player.position}`;

      const text2 = document.createElement('p');
      text2.className = 'text1';
      text2.id = 't2';
      text2.innerHTML = `TEAM - ${player.team.full_name}`;

      const text3 = document.createElement('p');
      text3.className = 'text1';
      text3.id = 't3';
      text3.innerHTML = `CITY - ${player.team.city}`;

      // Append the elements to create the card structure
      cardRow.appendChild(cardcol);
      cardcol.appendChild(card);
      card.appendChild(cardbody);
      cardheader.appendChild(h5);
      cardbody.appendChild(cardheader);
      cardbody.appendChild(text1);
      cardbody.appendChild(text2);
      cardbody.appendChild(text3);
    });

    console.log('Cards created successfully');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the fetchPunkApiData function to populate the cards
fetchballdontlieApiData();
