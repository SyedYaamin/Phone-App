const phones = [
    {
        brand: "Apple",
        model: "iPhone 13 Pro",
        RAM: "6 GB",
        ROM: "128 GB",
        quantity: 1,
        camera: "Triple 12 MP",
        screenSize: "6.1 inches",
        description: "The latest flagship iPhone with a powerful A15 Bionic chip and advanced camera system.",
        price: 999
    },
    {
        brand: "Samsung",
        model: "Galaxy S21 Ultra",
        RAM: "12 GB",
        ROM: "256 GB",
        quantity: 1,
        camera: "Quad 108 MP",
        screenSize: "6.8 inches",
        description: "Samsung's premium flagship featuring a versatile camera setup and a vibrant AMOLED display.",
        price: 1599
    },
    {
        brand: "Google",
        model: "Pixel 6 Pro",
        RAM: "12 GB",
        ROM: "128 GB",
        quantity: 1,
        camera: "Triple 50 MP",
        screenSize: "6.7 inches",
        description: "Google's flagship phone with an emphasis on photography and AI-powered features.",
        price: 1299
    },
    {
        brand: "OnePlus",
        model: "9 Pro",
        RAM: "8 GB",
        ROM: "256 GB",
        quantity: 1,
        camera: "Quad 48 MP",
        screenSize: "6.7 inches",
        description: "OnePlus's premium offering with a smooth 120Hz display and Hasselblad-tuned cameras.",
        price: 799    
    },
    {
        brand: "Xiaomi",
        model: "Mi 11 Ultra",
        RAM: "12 GB",
        ROM: "256 GB",
        quantity: 1,
        camera: "Triple 50 MP",
        screenSize: "6.81 inches",
        description: "Xiaomi's flagship phone featuring a massive camera sensor and a secondary display on the back.",
        price: 699
    },
    {
        brand: "Sony",
        model: "Xperia 1 III",
        RAM: "12 GB",
        ROM: "256 GB",
        quantity: 1,
        camera: "Triple 12 MP",
        screenSize: "6.5 inches",
        description: "Sony's premium smartphone with a 4K OLED display and advanced camera features inspired by Alpha cameras.",
        price: 499
    },
    {
        brand: "Huawei",
        model: "P50 Pro",
        RAM: "8 GB",
        ROM: "256 GB",
        quantity: 1,
        camera: "Quad 50 MP",
        screenSize: "6.6 inches",
        description: "Huawei's flagship phone known for its exceptional camera capabilities and elegant design.",
        price: 499
    },
    {
        brand: "Realme",
        model: "GT Master Edition",
        RAM: "8 GB",
        ROM: "256 GB",
        quantity: 1,
        camera: "Triple 64 MP",
        screenSize: "6.43 inches",
        description: "Realme's performance-focused phone featuring a unique suitcase-inspired design and a high-refresh-rate display.",
        price: 799
    },
    {
        brand: "Motorola",
        model: "Edge 20 Pro",
        RAM: "12 GB",
        ROM: "256 GB",
        quantity: 1,
        camera: "Triple 108 MP",
        screenSize: "6.7 inches",
        description: "Motorola's flagship device with a Snapdragon 870 processor and a high-resolution main camera.",
        price: 499
    },
    {
        brand: "Oppo",
        model: "Find X3 Pro",
        RAM: "12 GB",
        ROM: "256 GB",
        quantity: 1,
        camera: "Quad 50 MP",
        screenSize: "6.7 inches",
        description: "Oppo's premium smartphone featuring a unique microscope camera and a vibrant 120Hz display.",
        price: 399
    }
];

let Phonearr;
let items = JSON.parse(localStorage.getItem('cartItems'));
if (items === null) {
    Phonearr = [];
} else {
    Phonearr = items;
}

let productsDiv = document.querySelector("#products-div");

function renderItems() {
    for (let i = 0; i < phones.length; i++) {
        productsDiv.innerHTML += `
        <div class="card text-center text-light bg-dark border-light" style="width: 18rem;">
             <div class="card-body">
             <h5 class="card-title text-center">${phones[i].model}</h5>
             <p class="card-text text-center">${phones[i].description}</p>
             <p class="card-text text-center">${phones[i].RAM} RAM, ${phones[i].ROM} ROM</p>
             <p class="card-text text-center">Camera: ${phones[i].camera}</p>
             <button class="card-text text-center bg-primary rounded" onclick="addToCart(${i})">Add to Cart</button>
             </div>
        </div>`;
    }
}

renderItems();

function addToCart(index) {
    const phone = phones[index];
    const existingPhone = Phonearr.find(item => item.model === phone.model);
    if (existingPhone) {
        existingPhone.quantity += 1;
    } else {
        Phonearr.push({ ...phone, quantity: 1 });
    }
    console.log(Phonearr);
}

function gotoCart() {
    localStorage.setItem('cartItems', JSON.stringify(Phonearr));
    window.location = 'cart.html';
}
