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






// front end logic

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

pizza.toppings = toppingArray; // set toppings to our topping array

pizza.getToppings(); // returns ["pepperoni", "sausage", "hamburger"]









