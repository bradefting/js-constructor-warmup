"use strict";

var Cup = function(name, temp, alcoholic, price){
  this.name = name;
  this.temperature = temp;
  this.alcoholic = alcoholic;
  this.price = price;
};

Cup.prototype.fillUp = function fillUp(){
  this.isFull = true;
};

Cup.prototype.sipping = function sipping(){
  this.isFull = false;
};

Cup.prototype.changeTemp = function changeTemp(newTemp){
  this.temperature = newTemp;
};

Cup.prototype.discountPrice = function changePrice(discountAmount){
  if(this.price > 2){
    this.price = Math.round((this.price - discountAmount)*100)/100;
  }
};

var hotChocolate = new Cup('hot chocolate', 'hot', false, 1.99);
var soda = new Cup('Dr Pepper', 'cold', false, 0.99);
var wine = new Cup('merlot', 'warm', true, 4.99);

console.log(hotChocolate);
hotChocolate.sipping();
console.log(wine);
wine.changeTemp('cool');
wine.discountPrice(1.25);
soda.discountPrice(0.50);

console.log(hotChocolate);
hotChocolate.fillUp();
console.log("That looks like a full hot chocolate. Is it full? " + hotChocolate.isFull);
console.log(soda);
console.log("The discounted wine price is $" + wine.price);
