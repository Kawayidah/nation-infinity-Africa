const products = [
    {
        name: "Chocolate Chip Cookies",
        image: "file:///F:/Nation%20infinity%20wedsite/image/Cookie3.png", // Replace with actual image path
        description: "Delicious chocolate chip cookies baked to perfection.",
        price: 5.00,
        stock: 50 // Total stock available
    },
    {
        name: "Oatmeal Raisin Cookies",
        image: "file:///F:/Nation%20infinity%20wedsite/image/Cookie1.png", // Replace with actual image path
        description: "Chewy oatmeal cookies with juicy raisins.",
        price: 4.50,
        stock: 30 // Total stock available
    },
    {
        name: "Peanut Butter Cookies",
        image: "file:///F:/Nation%20infinity%20wedsite/image/Cookie2.jpg", // Replace with actual image path
        description: "Rich and creamy peanut butter cookies.",
        price: 5.50,
        stock: 20 // Total stock available
    },
    {
        name: "Abstract Art Piece",
        image: "file:///F:/Nation%20infinity%20wedsite/image/Art1.png", // Replace with actual image path
        description: "A stunning abstract piece to enhance your space.",
        price: 150.00,
        stock: 10 // Total stock available
    },
    {
        name: "Landscape Painting",
        image: "file:///F:/Nation%20infinity%20wedsite/image/Art2.png", // Replace with actual image path
        description: "A beautiful landscape painting that captures nature.",
        price: 200.00,
        stock: 5 // Total stock available
    },
    {
        name: "Inspirational Quote Print",
        image: "file:///F:/Nation%20infinity%20wedsite/image/Art3.png", // Replace with actual image path
        description: "A motivational print for your workspace.",
        price: 30.00,
        stock: 15 // Total stock available
    },
    {
        name: "Green T-Shirt",
        image: "file:///F:/Nation%20infinity%20wedsite/image/tshirtgreen.png", // Replace with actual image path
        description: "Comfortable green T-shirt made from high-quality fabric.",
        price: 24.00,
        stock: 100 // Total stock available
    },
    {
        name: "Black T-Shirt",
        image: "file:///F:/Nation%20infinity%20wedsite/image/tshirtblack.png", // Replace with actual image path
        description: "Stylish black T-shirt for everyday wear.",
        price: 24.00,
        stock: 80 // Total stock available
    }
];

// Render products
const productList = document.getElementById('product-list');
const totalProductsElement = document.getElementById('total-products');
totalProductsElement.innerText = products.length; // Display total products

products.forEach((product, index) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product-item');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>${product.description}</p>
        <p class="price">$${product.price.toFixed(2)}</p>
        <p>Stock: <span id="stock-${index}">${product.stock}</span></p>
        <label for="qty-${index}">Quantity:</label>
        <input type="number" id="qty-${index}" value="1" min="1" max="${product.stock}" style="width: 60px;">
        <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
});

// Cart functionality
let cart = [];

function addToCart(index) {
    const qtyInput = document.getElementById(`qty-${index}`);
    const qty = parseInt(qtyInput.value);
    const product = { ...products[index], quantity: qty };

    const existingProductIndex = cart.findIndex(p => p.name === product.name);
    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += qty;
    } else {
        cart.push(product);
    }

    // Update stock
    products[index].stock -= qty;
    document.getElementById(`stock-${index}`).innerText = products[index].stock;

    document.getElementById('checkout-btn').classList.remove('hidden');
    updateCartSummary();
    alert(`${product.name} added to cart!`);
}

// Update cart summary
function updateCartSummary() {
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    document.getElementById('total-quantity').innerText = `Total Products: ${totalQuantity}`;
    document.getElementById('total-amount').innerText = `Total Amount: $${totalAmount}`;
    document.getElementById('cart-items').innerHTML = cart.map((item, index) => `
        <li>
            ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)} 
            <button onclick="removeFromCart(${index})">Remove</button>
        </li>
    `).join('');
    document.getElementById('cart-summary').classList.toggle('hidden', cart.length === 0);
}

// Remove item from cart
function removeFromCart(index) {
    const item = cart[index];
    products.find(p => p.name === item.name).stock += item.quantity; // Restore stock
    cart.splice(index, 1);
    updateCartSummary();
}

// Go to payment
function goToPayment() {
    document.getElementById('store').classList.add('hidden');
    document.getElementById('payment').classList.remove('hidden');
}

// Go back to store
function goBackToStore() {
    document.getElementById('payment').classList.add('hidden');
    document.getElementById('store').classList.remove('hidden');
    cart = []; // Reset cart
    updateCartSummary();
}

// Process payment
function processPayment(event, method) {
    event.preventDefault();
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert(`Payment of $${(cart.reduce((sum, item) => sum + item.price * item.quantity, 0)).toFixed(2)} completed using ${method}!`);
    goBackToStore();
}