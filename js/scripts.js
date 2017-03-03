/* Application: Pizza Order
* File Name: scripts.js
* Programmer: Ryan Jones
* Version: 03/03/2017
*/


/**** Back-End Logic ****/

class Pizza {
  constructor(size, quantity) {
        this.toppings = [];
        this.size = size;
        this.quantity = quantity;
  }
    
  // getters
  getSize() {
    return this.size;
  }
  
  getQuantity() {
    return this.quantity;
  }

  getToppings() {
    return this.toppings;
  }

  // setters
  setToppings(toppings) {
    this.toppings = toppings;
  }

  setQuantity(quantity) {
    this.quantity = quantity;
  }

  setSize(size) {
    this.size = size;
  }
}

// calculate price function (could also just be inside the pizza class)

Pizza.prototype.calculateSizeCost = function(quantity) {
  var totalCost = 0;
  
  if (this.size === "small") {
    totalCost = 5;
  } else if (this.size === "medium") {
    totalCost = 7;
  } else if (this.size === "large") {
    totalCost = 10;
  } else if (this.size === "extra-large") {
    totalCost = 12; 
  }
  
  return totalCost * quantity;
}

Pizza.prototype.calculateToppingCost = function() {
  var totalCost = 0;
  
  // size has been accounted for..
  
  if (this.toppings.length === 6) {
    totalCost = totalCost + 3;
  } else if (this.toppings.length === 5) {
    totalCost = totalCost + 2.5;
  } else if (this.toppings.length === 4) {
    totalCost = totalCost + 2;
  } else if (this.toppings.length === 3) {
    totalCost = totalCost + 1.5;
  } else if (this.toppings.length === 2) {
    totalCost = totalCost + 1;
  } else if (this.toppings.length === 1) {
    totalCost = totalCost + 0.50;
  }
  
  // topping amount has been accounted for..
  
  return totalCost; // send the total back
  
}





/**** Front End Logic ****/

$(document).ready(function() {
  
  var idArray = ["checkbox1", "checkbox2", "checkbox3", "checkbox4", "checkbox5", "checkbox6"]; // id's for checkboxes
  var toppingArray = []; // empty array to populate with values of checkboxes
  var totalCost = 0;
  var quantity = 0;
  var size = "";
  
  $("#checkPrice").click(function() {
    
    toppingArray = [];
    
    // for each to cycle through checkboxes
    idArray.forEach(function(id) {
      var currentBox = ("#" + id).toString();
      var value = $(currentBox).val();
      var isChecked = $(currentBox).is(':checked');
      if (isChecked === true) {
        toppingArray.push(value);
      }
    });
    
    size = $("#sizeForm input[type='radio']:checked").val();
    
    quantity = $("#quantityForm input[type='radio']:checked").val();
    
    var pizza = new Pizza(size, quantity); // create new pizza object w/ size argument and quantity argument
    
    pizza.setToppings(toppingArray); // use a setter to pass our topping array
    
    totalCost = pizza.calculateSizeCost(pizza.quantity) + pizza.calculateToppingCost(); // get total cost of toppings and size
    
    console.log(totalCost);
    
    $(".total").text("Total Cost: $ " + totalCost);
    
    $("h3.total").show();
    $("#confirmPurchase").show();
  });
  
  $("#confirmPurchase").click(function() {
    
    $(".ulToppings").empty();
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







