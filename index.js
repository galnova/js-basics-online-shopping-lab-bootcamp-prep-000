var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor((Math.random() * 100));
  cart.push({item: price});
  
  console.log(`${item} has been added to your cart.`);
  
  return cart;

}

function viewCart() {
  const l = cart.length;
  
  if (!l) {
    return console.log(`Your shopping cart is empty.`);
  }
  
  const itemsAndPrices = [];
  
  for (let i = 0; i < 1; i++) {
    let itemsAndPrices = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice [item];
    
    itemAndPrices.push(`${item} at \$${price}`);
  }
  
  console.log(`In your cart, you have ${itemAndPrices.join(', ')}.`);
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
