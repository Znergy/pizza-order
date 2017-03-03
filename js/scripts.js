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
  
  if (this.toppings.length === 6) {
    totalCost = totalCost + 3;
  } else if (this.toppings.length === 5) {
    totalCost = totalCost + 2.5;
  } else if (this.toppings.length === 4) {
    totalCost = totalCost + 2;
  } else if (this.toppings.length === 3) {
    totalCost = totalCost + 1.5;
  } else if (this.toppings.length === 3) {
    totalCost = totalCost + 1;
  } else if (this.toppings.length === 1) {
    totalCost = totalCost + 0.50;
  } else {
    totalCost = 0;
  }
  
  // topping amount has been accounted for..
  
  return totalCost; // send the total back
  
}





/**** Front End Logic ****/

//var pizza = new Pizza("large"); // new pizza instance
//
//pizza.setToppings(toppingArray); // saves toppingArray in the pizza.toppings array
//
//var toppingList = pizza.getToppings(); // returns ["pepperoni", "sausage", "hamburger"]
//
//var totalPrice = pizza.calculatePrice(); // tally up the total cost
//
//// display total price, toppings, etc in the receipt


$(document).ready(function() {
  
  var idArray = ["checkbox1", "checkbox2", "checkbox3", "checkbox4", "checkbox5", "checkbox6"]; // id's for checkboxes
  var toppingArray = []; // empty array to populate with values of checkboxes
  var totalCost = 0;
  var size = "";
  
  $("#checkPrice").click(function() {
    
    toppingArray = [];
    
    // for each to cycle through checkboxes, save their values, and push each value to toppingArray (only if the checkbox has a value)
    idArray.forEach(function(id) {
      var currentBox = ("#" + id).toString(); // 1st loop: currentBox = #checkbox1 
      var value = $(currentBox).val();
      var isChecked = $(currentBox).is(':checked');
      if (isChecked === true) {
        toppingArray.push(value);
      }
    });
    
    size = $("#size").val(); // take size value (small, medium, etc)
    
    var pizza = new Pizza(size); // create new pizza object w/ size argument
    
    pizza.setToppings(toppingArray); // use a setter to pass our topping array
    
    totalCost = pizza.calculatePrice();
    
    console.log("Pizza Size: " + pizza.size + ". Pizza toppings: " + pizza.toppings[0] + ", " + pizza.toppings[1] + ", " + pizza.toppings[2]);
    
    $(".total").text("Total Cost: $ " + totalCost);
    
    $("h3.total").show();
    $("#confirmPurchase").show();
  });
  
  $("#confirmPurchase").click(function() {
    
    $("#pizzaSize").text("Pizza Size: " + size);
    
    for(i=0; i < toppingArray.length; i++) {
      var value = "";
      if(toppingArray[i] != "") {
        value = toppingArray[i];
        $(".ulToppings").append("<li>" + value + "</li>");
      }
    }
    $("#totalPrice").text("Total Cost: $ " + totalCost);
    $(".receipt").show();
  });
});







