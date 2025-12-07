document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: "29.99" },
    { id: 2, name: "Product 2", price: "39.99" },
    { id: 3, name: "Product 3", price: "99.999" },
  ];

  const cart = [];

  const prodcutList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMsg = document.getElementById("empty-cart");
  const cartTotalMsg = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - $${product.price}</span>
    <button data-id="${product.id}">Add to Cart</button>
    `;
    prodcutList.append(productDiv);
  });

  prodcutList.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    console.log(cart);
    renderCart(cart);
  }

  function renderCart(cart) {
    cartItems.innerText = "";
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCartMsg.classList.add("hidden");
      cartTotalMsg.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += parseFloat(item.price);

        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
        ${item.name} - $${item.price}`;

        cartItems.appendChild(cartItem);

        totalPriceDisplay.textContent = `${totalPrice}`;
      });
    } else {
      emptyCartMsg.classList.remove("hidden");
      totalPriceDisplay.textContent = `$0.00`;
    }
  }

  checkoutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert("Checkout Successfully");
    renderCart(cart);
  });
});
