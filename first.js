const fs = require('fs');
const restaurant = [];
const images = ['first', 'second', 'third', 'fourth', 'fifth'];
const restaurantNames = [
  'Spice Junction',
  'Royal Tandoor',
  'Jaipur Zaika',
  'Thali Mahal',
  'Curry Castle',
  'Hawa Mahal Café',
  'Rajwada Rasoi',
  'Pink City Diner',
  'Rajasthani Rasoi',
  'Chatori Gali',
];
const ratings = [1, 2, 3, 4, 5];
const foodTypes = [
  'North Indian',
  'South Indian',
  'Chinese',
  'Italian',
  'Mexican',
  'Rajasthani Thali',
  'Mughlai',
  'Street Food',
  'Fast Food',
  'Continental',
];
const locations = [
  'MI Road',
  'C-Scheme',
  'Vaishali Nagar',
  'Malviya Nagar',
  'Tonk Road',
  'Raja Park',
  'Mansarovar',
  'Bapu Bazaar',
  'Johari Bazaar',
  'Amer Road',
];

for (let i = 1; i <= 100; i++) {
  const obj = {};
  obj['images'] = images[Math.floor(Math.random() * images.length)];
  obj['name'] = restaurantNames[Math.floor(Math.random() * 10)];
  obj['rating'] = (Math.random() * 5).toFixed(1);
  obj['food_type'] = foodTypes[Math.floor(Math.random() * foodTypes.length)];
  obj['pricefortwo'] = Math.floor(Math.random() * 2401 + 100);
  obj['location'] = locations[Math.floor(Math.random() * locations.length)];
  obj['distance_from_customer'] = (Math.random() * 10).toFixed(1);

  obj['offers'] = Math.floor(Math.random() * 30);
  obj['alcohol'] = Math.random() > 0.7;
  obj['opentime'] = Math.floor(Math.random() * 24);
  obj['closetime'] = (obj['opentime'] + 12) % 24;

  restaurant.push(obj);
}
const jsonData = JSON.stringify(restaurant, null, 2);

fs.writeFileSync('restaurants.json',jsonData);
console.log(" jsons saved");