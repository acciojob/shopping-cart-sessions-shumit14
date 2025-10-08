// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

// ✅ Load cart from sessionStorage (if available)
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// Function to render product list
function renderProducts() {
  productList.innerHTML = "";
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${product.name} - $${product.price}</span>
      <button>Add to Cart</button>
    `;
    const button = li.querySelector("button");
    button.addEventListener("click", () => addToCart(product));
    productList.appendChild(li);
  });
}

// Function to render the shopping cart
function renderCart() {
  cartList.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

// Add item to cart and update sessionStorage
function addToCart(product) {
  cart.push(product);
  updateSessionStorage();
  renderCart();
}

// Clear cart functionality
function clearCart() {
  cart = [];
  updateSessionStorage();
  renderCart();
}

// Update sessionStorage with current cart data
function updateSessionStorage() {
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

// Initialize page
renderProducts();
renderCart();

// Clear Cart button click handler
clearCartBtn.addEventListener("click", clearCart);
