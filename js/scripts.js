/* Application: Pizza Order
* File Name: scripts.js
* Programmer: Ryan Jones
* Version: 03/03/2017
*/


/**** Back-End Logic ****/

class Pizza {
    constructor(size) {
        this.toppings = [];
        this.size = size;
    }
    
    getSize() {
        return this.size;
    }
    
    getToppings() {
        return this.toppings;
    }
    
    // passing an array of toppings
    setToppings(toppings) {
      this.toppings = toppings;
    }
  
    setSize(size) {
      this.size = size;
    }
}

// calculate price function (could also just be inside the pizza class)

Pizza.prototype.calculatePrice = function() {
  var totalCost = 0;
  if (this.size === "small") {
    totalCost = 5;
  } else if (this.size === "medium") {
    totalCost = 7;
  } else if (this.size === "large") {
    totalCost = 10;
  } else if (this.size === "extra-large" || this.size === "extra large") {
    totalCost = 12; 
  }
  
  // size has been accounted for..
  
  if (this.toppings.length === 3) {
    totalCost = totalCost + 1.50;
  } else if (this.toppings.length === 2) {
    totalCost = totalCost + 1;
  } else if (this.toppings.length === 1) {
    totalCost = totalCost + 0.50;
  }
  
  // topping amount has been accounted for..
  
  return totalCost; // send the total back
  
}





/**** Front End Logic ****/

var idArray = ["checkbox1", "checkbox2", "checkbox3"]; // id's for checkboxes
var toppingArray = []; // empty array to populate with values of checkboxes

// for each to cycle through checkboxes, save their values, and push each value to toppingArray (only if the checkbox has a value)
idArray.forEach(function(id) {
  var value = $("#" + id).val();
  if(value != "") {
    toppingArray.push(value);
  }
});

var pizza = new Pizza("large"); // new pizza instance

pizza.setToppings(toppingArray); // saves toppingArray in the pizza.toppings array

var toppingList = pizza.getToppings(); // returns ["pepperoni", "sausage", "hamburger"]

var totalPrice = pizza.calculatePrice(); // tally up the total cost

// display total price, toppings, etc in the receipt








