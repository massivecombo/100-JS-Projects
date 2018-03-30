/**
 * This script suggests where to eat for lunch
 */

const restaurantData = require('./restaurantData');

// describe('lunchApp')
// .it('Should display a single restaurant suggestion')
// .it('Should display a random restaurant if not restaurants are input')
// .it('Should take at least 2 restaurants')

const suggestionText = document.querySelector('.Restaurant-suggestion');

const randomizeSuggestion = restaurant => {
  const floor = 0;
  const ceiling = restaurant.length;
  const randomInclusiveNumber = Math.floor(Math.random() * (ceiling - floor)) + floor;  
  restaurant.map((r, index) => {
    if (randomInclusiveNumber === index) {
      console.log(r);
      return r.name;
    }
  });
};

randomizeSuggestion(restaurantData);

suggestionText.innerHTML = randomizeSuggestion(restaurantData);