const search = document.querySelector('#search-data');
const results = document.querySelector('#results-list');

const data = [
  {
    cityName: 'Paris',
  },
  {
    cityName: 'Los Angeles',
  },
  {
    cityName: 'Barcelona',
  },
  {
    cityName: 'Bucharest',
  },
  {
    cityName: 'Berlin',
  },
  {
    cityName: 'London',
  },
  {
    cityName: 'Cluj Napoca',
  },
  {
    cityName: 'Roma',
  },
  {
    cityName: 'New York City',
  },
  {
    cityName: 'Boston',
  },
];

// render function with default parameter
const render = (word = '') => {
  const wordLowerCase = word.toLowerCase();
  const filterWord = data.filter((item) => {
    return item.cityName.toLowerCase().includes(wordLowerCase);
  });

  // overwrite the previous values
  results.innerHTML = '';

  filterWord.forEach((item) => {
    results.insertAdjacentHTML('beforeend', `<li>${item.cityName}</li>`);
  });
};

// render as the user types
search.addEventListener('keyup', () => {
  render(search.value);
});

// render on page load
render();
