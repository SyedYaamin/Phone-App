const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const cartMsg = document.querySelector('#cart-msg');
const totalAmount = document.querySelector('#total-amount');

function renderItems() {
    cartMsg.innerHTML = '';
    totalAmount.innerHTML = '';
    let total = 0;

    if (cartItems.length > 0) {
        for (let i = 0; i < cartItems.length; i++) {
            total += cartItems[i].price * cartItems[i].quantity;
            cartMsg.innerHTML += `
            <div class="card text-center">
                <div class="card-header bg-dark text-light">
                    <h4>${cartItems[i].model}</h4>
                </div>
                <div class="card-body bg-dark text-light">
                    <h5 class="card-title">RAM:${cartItems[i].RAM}, ROM:${cartItems[i].RAM}</h5>
                    <h5 class="card-title">Quantity: ${cartItems[i].quantity}</h5>
                    <h5 class="card-title">Price: ${cartItems[i].price * cartItems[i].quantity}</h5>
                    <p class="card-title">Description: ${cartItems[i].description}</p>
                    <a href="#" class="btn btn-primary" onclick="addQuantity(${i})">Add</a>
                    <a href="#" class="btn btn-primary" onclick="lessQuantity(${i})">Less</a>
                    <button class="btn btn-danger" onclick="deleteItem(${i})">Delete</button>
                </div>
            </div>`;
        }
        totalAmount.innerHTML = `Total Amount = ${total}`;
    } else {
        cartMsg.innerHTML = `
        <h3 class="text-center">Your Cart is empty! Please Select one..</h3>
        `;
    }

}

function updateCart() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    renderItems();
}

function addQuantity(i) {
    cartItems[i].quantity += 1;
    updateCart();
}

function lessQuantity(i) {
    if (cartItems[i].quantity <= 1) {
        cartItems.splice(i, 1);
    } else {
        cartItems[i].quantity -= 1;
    }
    updateCart();
}

function deleteItem(i) {
    cartItems.splice(i, 1);
    updateCart();
    alert("Item has been Removed!!");
}

renderItems();
