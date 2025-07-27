const cartKey = "cart";

document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest(".product-card");
    const id = card.getAttribute("data-id");
    const name = card.getAttribute("data-name");
    const price = parseFloat(card.getAttribute("data-price"));

    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cart.push({ id, name, price, qty: 1 });
    }

    localStorage.setItem(cartKey, JSON.stringify(cart));
    alert(`${name} added to cart`);
  });
 
});
 function addToCart(product) {
  alert(`${product} added to cart!`);
}