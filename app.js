// let restaurants = []; // global

// async function loadRestaurants() {
//   const response = await fetch('restaurants.json'); // load JSON file
//   restaurants = await response.json(); // parse JSON
//   getrestaurant(restaurants); // render after loading


// // Call the async function to load data



// document.getElementById('Alcohol').addEventListener('click', () => {
//   const result = restaurants.filter((obj) => obj.alcohol == true);
//   // document.getElementById('root').innerHTML="";
//   document.getElementById('root').replaceChildren();
//   getrestaurant(result);
// });
// document.getElementById('Rating').addEventListener('click', () => {
//   const result = restaurants.filter((obj) => obj.rating > 3);
//   document.getElementById('root').replaceChildren();
//   getrestaurant(result);
// });
// const popup = document.getElementById('popupOverlay');
// const filterBtn = document.getElementById('filterBtn');
// const closeBtn = document.getElementById('closePopup');

// // Show popup
// filterBtn.addEventListener('click', () => {
//   popup.classList.add('active'); // adds display:flex
// });

// // Hide popup
// closeBtn.addEventListener('click', () => {
//   popup.classList.remove('active'); // back to display:none
// });
// }
// loadRestaurants();
let restaurants = []; // global

function getrestaurant(restaurants) {
  const root = document.getElementById('root');
  root.replaceChildren(); // clear previous cards

  restaurants.forEach((restaurant) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = `${restaurant.images}.png`;
    card.appendChild(image);

    const card_content = document.createElement('div');
    card_content.classList.add('card_content');

    // Header
    const card_header = document.createElement('div');
    card_header.classList.add('card_header');
    const h3 = document.createElement('h3');
    h3.textContent = restaurant.name;
    const rate = document.createElement('span');
    rate.textContent = 'Rating: ' + restaurant.rating;
    rate.classList.add('rating');
    card_header.appendChild(h3);
    card_header.appendChild(rate);

    // Footer
    const card_footer = document.createElement('div');
    card_footer.classList.add('card_footer');
    const food = document.createElement('span');
    food.textContent = restaurant.food_type;
    const price = document.createElement('span');
    price.textContent = '₹' + restaurant.pricefortwo;
    card_footer.appendChild(food);
    card_footer.appendChild(price);

    // Location
    const card_location = document.createElement('div');
    card_location.classList.add('card_location');
    const location = document.createElement('span');
    location.textContent = restaurant.location;
    const distance = document.createElement('span');
    distance.textContent = restaurant.distance_from_customer + ' km';
    card_location.appendChild(location);
    card_location.appendChild(distance);

    card_content.appendChild(card_header);
    card_content.appendChild(card_footer);
    card_content.appendChild(card_location);
    card.appendChild(card_content);

    root.appendChild(card);
  });
}
// creating dummy restaurant
async function loadRestaurants() {
  const response = await fetch('restaurants.json');
  restaurants = await response.json();
  getrestaurant(restaurants); // render after loading

document.getElementById('Open').addEventListener('click', () => {
  const now = new Date().getHours();
  const result = restaurants.filter((r) => {
    if (r.opentime <= r.closetime)
      return now >= r.opentime && now < r.closetime;
    else return now >= r.opentime || now < r.closetime;
  });
  getrestaurant(result);
});
document.getElementById('Offers').addEventListener('click', () => {
  const result = restaurants.filter((r) => r.offers > 0);
  getrestaurant(result);
});


  // Add event listeners AFTER DOM is ready and data loaded
  document.getElementById('Alcohol').addEventListener('click', () => {
    const result = restaurants.filter((obj) => obj.alcohol);
    getrestaurant(result);
  });

  document.getElementById('Rating').addEventListener('click', () => {
    const result = restaurants.filter((obj) => obj.rating > 3);
    getrestaurant(result);
  });

  const popup = document.getElementById('popupOverlay');
  const filterBtn = document.getElementById('filterBtn');
  const closeBtn = document.getElementById('closePopup');

  filterBtn.addEventListener('click', () => {
    popup.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
  });
}
const applyBtn = document.getElementById('applySort');
const sortForm = document.getElementById('sortForm');

applyBtn.addEventListener('click', () => {
  // Get the selected sort option
  const selected = sortForm.querySelector('input[name="sort"]:checked');

  if (!selected) {
    alert('Please select a sorting option!');
    return;
  }

  let sorted = [...restaurants]; // copy array so we don’t mutate original

  switch (selected.value) {
    case 'rating':
      sorted.sort((a, b) => b.rating - a.rating);
      break;

    case 'priceHigh':
      sorted.sort((a, b) => b.pricefortwo - a.pricefortwo);
      break;

    case 'priceLow':
      sorted.sort((a, b) => a.pricefortwo - b.pricefortwo);
      break;

    case 'distance':
      sorted.sort(
        (a, b) => a.distance_from_customer - b.distance_from_customer
      );
      break;
  }

  // Clear old results
  document.getElementById('root').innerHTML = '';

  // Render new sorted results
  getrestaurant(sorted);

  // Close popup
  document.getElementById('popupOverlay').classList.remove('active');
 

}
);

loadRestaurants();
