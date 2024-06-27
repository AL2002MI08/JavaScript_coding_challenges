async function submitOrder(user) {
    try {
        var shoppingCart, zipCode, shippingRate, orderSuccessful;
    shoppingCart = await OrderAPI.getShoppingCartAsync(user)
    const profile = await CustomerAPI.getProfileAsync(user)
    zipCode = profile.zipCode;
    shippingRate = calculateShipping(shoppingCart, zipCode);
    orderSuccessful = await OrderAPI.placeOrderAsync(shoppingCart, shippingRate)
    console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
    } catch (error) {
        console.error('Error', error)
    }
    
  }