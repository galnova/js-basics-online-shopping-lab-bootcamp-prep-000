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
  
   if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
    return;
  }

  if (cart.length === 1) {
    //log for 1 item
    console.log(
      `In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][
        Object.keys(cart[0])[0]
      ]}.`
    );
  } else if (cart.length === 2 /*cart has 2 items*/) {
    console.log(
      `In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][
        Object.keys(cart[0])[0]
      ]} and ${Object.keys(cart[1])[0]} at $${cart[1][
        Object.keys(cart[1])[0]
      ]}.`
    ); //
  } else {
    var priceItemName = [];
    for (let i = 0; i < cart.length; i++) {
      var itemName = Object.keys(cart[i])[0];
      var price = cart[i][itemName];
      if(cart.length -1 === i) {
      priceItemName.push(`and ${itemName} at $${price}.`)
     } else {
      priceItemName.push(`${itemName} at $${price}`)
      }


    }
    console.log (`In your cart, you have ${priceItemName.join(", ")}`)
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
