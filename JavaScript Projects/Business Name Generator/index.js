// Create a buiseness name generator by combining list of adjectives and shop name and another word

// Adjectives
// Crazy
// Amazing
// Fire

// Shop Name
// Engine
// Foods
// Garments

// Another word
// Bros
// Limited
// Hub

const random_Number = ((min, max) => {
  num = Math.floor(Math.random() * (max - min) + min);
  console.log(num);
  return num;
})(1, 4);

const random_Name = ((random_Number) => {
  let adj, Shop, Another;
  switch (random_Number) {
    case 1:
      adj = "Crazy";
      break;
    case 2:
      adj = "Amazing";
      break;
    case 3:
      adj = "Fire";
      break;
  }

  switch (random_Number) {
    case 3:
      Shop = "Engine";
      break;
    case 2:
      Shop = "Foods";
      break;
    case 1:
      Shop = "Garments";
      break;
  }

  switch (random_Number) {
    case 1:
      Another = "Bros";
      break;
    case 2:
      Another = "Limited";
      break;
    case 3:
      Another = "Hub";
      break;
  }

  console.log(`${adj} ${Shop} ${Another}`);
})(random_Number);
