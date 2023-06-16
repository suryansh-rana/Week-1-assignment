/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {}
  var categoryMap = {};
  transactions.forEach(function(transaction) {
    var category = transaction.category;
    var price = transaction.price;
    if (categoryMap.hasOwnProperty(category)) {
      categoryMap[category] += price;
    } else {
      categoryMap[category] = price;
    }
  });
  var result = Object.keys(categoryMap).map(function(category) {
    var totalSpent = categoryMap[category];
    var categoryObject = {};
    categoryObject[category] = totalSpent;
    return categoryObject;
  });
  return result;
}
var transactions = [
  { itemName: "keyboard", category: "electronics", price: 1500, timestamp: "2023-06-16" },
  { itemName: "pen", category: "stationary", price: 15, timestamp: "2023-06-16" },
  { itemName: "book", category: "stationary", price: 200, timestamp: "2023-06-16" },
  { itemName: "tshirt", category: "clothes", price: 2500, timestamp: "2023-06-16" },
  { itemName: "jean", category: "clothes", price: 3000, timestamp: "2023-06-16" }
];
var totalSpentByCategory = calculateTotalSpentByCategory(transactions);
console.log(totalSpentByCategory);
module.exports = calculateTotalSpentByCategory;
