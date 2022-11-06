/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function (foods, cuisines, ratings) {
  this.foods = foods;
  this.cuisines = cuisines;
  this.ratings = ratings;
  return this;
};

/**
 * @param {string} food
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function (food, newRating) {
  let ind = this.foods.findIndex((i) => i === food);
  this.ratings[ind] = newRating;
};

/**
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function (cuisine) {

  let ind = this.cuisines
    .map((i, ind) => (i === cuisine ? ind : -1))
    .filter((i) => i !== -1);
  let maxRating = -1;
  this.ratings
    .filter((i, index) => ind.includes(index))
    .forEach((i) => (maxRating = Math.max(maxRating, i)));
  ind = this.ratings
    .map((i, ind1) => (i === maxRating && ind.includes(ind1)  ? ind1 : -1))
    .filter((i) => i !== -1);
  let x = this.foods.filter((i, index) => ind.includes(index));
  let z = x[0];
  return x.reduce(e => e < z ? e : z,z)
};

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */
// var obj = new FoodRatings(foods, cuisines, ratings);
// obj.changeRating(food, newRating);
// var param_2 = obj.highestRated(cuisine);

var foodRatings = new FoodRatings(
  ["emgqdbo", "jmvfxjohq", "qnvseohnoe", "yhptazyko", "ocqmvmwjq"],
  ["snaxol", "snaxol", "snaxol", "fajbervsj", "fajbervsj"],
  [2, 6, 18, 6, 5]
);
let arg = [
  ["qnvseohnoe", 11],
  ["fajbervsj"],
//   ["emgqdbo", 3],
//   ["jmvfxjohq", 9],
//   ["emgqdbo", 14],
//   ["fajbervsj"],
//   ["snaxol"],
];
console.log(
  [
    "changeRating",
    "highestRated",
    // "changeRating",
    // "changeRating",
    // "changeRating",
    // "highestRated",
    // "highestRated",
  ].map((e, ind) => foodRatings[e](...arg[ind]))
);

[
  "FoodRatings",
  "changeRating",
  "highestRated",
  "changeRating",
  "changeRating",
  "changeRating",
  "highestRated",
  "highestRated",
][
  ([
    ["emgqdbo", "jmvfxjohq", "qnvseohnoe", "yhptazyko", "ocqmvmwjq"],
    ["snaxol", "snaxol", "snaxol", "fajbervsj", "fajbervsj"],
    [2, 6, 18, 6, 5],
  ],
  ["qnvseohnoe", 11],
  ["fajbervsj"],
  ["emgqdbo", 3],
  ["jmvfxjohq", 9],
  ["emgqdbo", 14],
  ["fajbervsj"],
  ["snaxol"])
];
