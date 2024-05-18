let cart = [];
let totalAmount = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    totalAmount += price;
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');

    cartItemsElement.textContent = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.item} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
    });

    totalAmountElement.textContent = totalAmount.toFixed(2);
}

function checkout() {
    const address = document.getElementById("address").value;
    const deliveryTime = document.getElementById("delivery-time").value;

    if (address.trim() === "") {
        alert("Please enter your delivery address.");
        return;
    }

    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before checking out.");
        return;
    }

    const cartItems = cart.map(item => `${item.item} - $${item.price.toFixed(2)}`).join('\n');
    const confirmationMessage = `Thank you for your order!\n\nDelivery Address: ${address}\nDelivery Time: ${deliveryTime}\n\nCart Items:\n${cartItems}\n\nTotal: $${totalAmount.toFixed(2)}`;
    alert(confirmationMessage);

    document.getElementById("checkout-form").reset();
    document.getElementById("cart-items").textContent = "";
    document.getElementById("total-amount").textContent = "0.00";

    cart = [];
    totalAmount = 0;
}
