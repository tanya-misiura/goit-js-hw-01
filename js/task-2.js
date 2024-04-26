function getShippingMessage(country, price, deliveryFee) {
    const totalCost = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalCost} credits`;
}

getShippingMessage("Australia", 120, 50);
getShippingMessage("Germany", 80, 20);
getShippingMessage("Sweden", 100, 20);

console.log(getShippingMessage("Australia", 120, 50)); // Returns "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // Returns "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // Returns "Shipping to Sweden will cost 120 credits"
