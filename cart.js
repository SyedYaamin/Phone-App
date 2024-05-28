const cartDiv = document.querySelector('.cart-items');
let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

function renderCart() {
    cartDiv.innerHTML = '';
    for (let i = 0; i < cart.length; i++) {
        cartDiv.innerHTML += `
            <div class="cart-item card bg-dark text-light border-light" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${cart[i].brand} ${cart[i].model}</h5>
                    <p class="card-text">Price: Rs ${cart[i].price}</p>
                    <p class="card-text">Quantity: ${cart[i].quantity}</p>
                    <button onclick="removeFromCart(${i})" class="btn btn-danger">Remove from Cart</button>
                </div>
            </div>`;
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cart));
    renderCart();
}

function goBack() {
    window.location = 'index.html';
}

renderCart();
