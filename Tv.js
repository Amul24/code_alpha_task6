// Wrap the code in a DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function () {
    const categoryFilters = document.querySelectorAll(".category-filter");
    const productCards = document.querySelectorAll(".card");

    categoryFilters.forEach((filter) => {
        filter.addEventListener("change", filterProducts);
    });

    function filterProducts() {
        const selectedCategories = Array.from(categoryFilters)
            .filter((filter) => filter.checked)
            .map((filter) => filter.name); // Use "name" instead of "value" to match the category data attribute

        productCards.forEach((card) => {
            const cardCategory = card.getAttribute("data-category");

            if (
                selectedCategories.length === 0 ||
                selectedCategories.includes(cardCategory)
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    // Initial filtering on page load
    filterProducts();
});
// Initialize cart as an empty array to store items
let cart = [];

// Function to add an item to the cart
function addtocart(itemId, price, imageSrc) {
    // Check if the item is already in the cart
    const existingItem = cart.find((item) => item.id === itemId);

    if (existingItem) {
        // If item is already in the cart, increment the quantity
        existingItem.quantity++;
    } else {
        // If item is not in the cart, add it with a quantity of 1
        cart.push({ id: itemId, price: price, quantity: 1, image: imageSrc });
    }

    // Update the cart display
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    // Get the cart element by its ID
    const cartElement = document.getElementById('cart-items');

    // Clear the cart element
    cartElement.innerHTML = '';

    // Calculate the total price and display each item in the cart
    let totalPrice = 0;
    cart.forEach((item) => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        // Create a cart item element and add it to the cart
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
      <img src="${item.image}" alt="Item Image" width=50px height=50px>
      <div class="jsdiv">
        <span >ID: ${item.id}</span>
        <span >Quantity: ${item.quantity}</span>
        <span >Price: &#8377;${itemTotal.toFixed(2)}</span>
      </div>
    `;
        cartElement.appendChild(cartItemElement);
    });

    // Display the total price at the end
    const totalElement = document.createElement('div');
    totalElement.classList.add('cart-total');
    totalElement.innerHTML = `Total: &#8377;${totalPrice.toFixed(2)}`;
    cartElement.appendChild(totalElement);
}

// Example function to increase the quantity of a specific item
function increaseQuantity(itemId) {
    const item = cart.find((item) => item.id === itemId);
    if (item) {
        item.quantity++;
        // Update the cart display
        updateCartDisplay();
    }
}

// Example function to decrease the quantity of a specific item
function decreaseQuantity(itemId) {
    const item = cart.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
        item.quantity--;
        // Update the cart display
        updateCartDisplay();
    }
}

// ... (previous code)

// Function to update the cart display
function updateCartDisplay() {
    // Get the cart element by its ID
    const cartElement = document.getElementById('cart-items');

    // Clear the cart element
    cartElement.innerHTML = '';

    // Calculate the total price and display each item in the cart
    let totalPrice = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        // Create a cart item element and add it to the cart
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="Item Image" width=250px height=250px>
            <div class="jsdiv">
                <span>ID: ${item.id}</span>
                <span>Quantity: ${item.quantity}</span>
                <span>Price: &#8377;${itemTotal.toFixed(2)}</span>
                <button onclick="deleteItem(${index})">Delete</button>
            </div>
        `;
        cartElement.appendChild(cartItemElement);
    });

    // Display the total price at the end
    const totalElement = document.createElement('div');
    totalElement.classList.add('cart-total');
    totalElement.innerHTML = `Total: &#8377;${totalPrice.toFixed(2)}`;
    cartElement.appendChild(totalElement);
}

// Function to delete an item from the cart
function deleteItem(index) {
    cart.splice(index, 1);
    // Update the cart display
    updateCartDisplay();
}

// ... (rest of the code)

// Initialize the cart display when the page loads
window.onload = function () {
    updateCartDisplay();
};


// Initialize the cart display when the page loads
window.onload = function () {
    updateCartDisplay();
};
