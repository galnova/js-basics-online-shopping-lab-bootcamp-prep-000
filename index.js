var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor((Math.random() * 100) + 1);
  cart.push({item: price});
  
  console.log(`${item} has been added to your cart.`);
  
  return cart;

}

function viewCart() {
  
var cart_list = new Array
  for (var item = 0; item < getCart().length; item++) {
    for (var name in getCart()[item]){

    cart_list.push(` ${name} at $${getCart()[item][name]}`)
    }
  }
  if (cart_list.length > 0) {
    console.log(`In your cart, you have${cart_list.join(",")}.`)
  }
  else {
    console.log("Your shopping cart is empty.")
  }
  
  // const l = cart.length;
  
  // if (!l) {
  //   return console.log(`Your shopping cart is empty.`);
  // }
  
  // const itemsAndPrices = [];
  
  // for (let i = 0; i < 1; i++) {
  //   let itemAndPrice = cart[i];
  //   let item = Object.keys(itemAndPrice)[0];
  //   let price = itemAndPrice [item];
    
  //   itemsAndPrices.push(`${item} at \$${price}`);
  // }
  
  // console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`);
}

function total() {
  
  var total = null;
  for (var item in getCart()) {
    for (var name in getCart()[item]) {
       total += getCart()[item][name];
    }
  }
  return total;
  
  // var t = 0;
  
  // for (let i = 0; i < cart.length; i++) {
  //   let object = cart[i];
  //   let key = Object.keys(object);
    
  //   t += object[key];
  // }
  // return t;
}

function removeFromCart(item) {
  return delete thisIsObject[item];
}

function placeOrder(cardNumber) {
  // write your code here
}