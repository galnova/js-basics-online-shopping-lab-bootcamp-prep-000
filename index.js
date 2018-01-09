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
  const l = cart.length;
  const itemsAndPrices = [];
  
  for (let i = 0; i < 1; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice [item];
    
    itemsAndPrices.push(`${item} at \$${price}`);
  }
  
  if (!l) {
    return console.log(`Your shopping cart is empty.`);
  }
  
  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`);
}

function total() {
  var t = 0;
  
  for (let i = 0; i < cart.length; i++) {
    let object = cart[i];
    let key = Object.keys(object);
    
    t += object[key];
  }
  return t;
}

function removeFromCart(item) {
  return delete thisIsObject[item];
}

function placeOrder(cardNumber) {
  // write your code here
}
