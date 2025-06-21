// Appointment form handler
const appointmentForm = document.getElementById('appointmentForm');
const appointmentSuccess = document.getElementById('appointmentSuccess');
if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        appointmentForm.style.display = 'none';
        appointmentSuccess.style.display = 'block';
    });
}

// Simple cart functionality
let cart = [];
function addToCart(product, price) {
    cart.push({ product, price });
    renderCart();
}
window.addToCart = addToCart;

function renderCart() {
    const cartList = document.getElementById('cart');
    const cartTotal = document.getElementById('cartTotal');
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach((item, idx) => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price}`;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.style.marginLeft = '1rem';
        removeBtn.onclick = () => {
            cart.splice(idx, 1);
            renderCart();
        };
        li.appendChild(removeBtn);
        cartList.appendChild(li);
    });
    cartTotal.textContent = total > 0 ? `Total: $${total}` : '';
}
