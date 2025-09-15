// js/order.js
// This module handles the WhatsApp order submission

export function initOrderForm() {
    const form = document.getElementById('orderForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const product = document.getElementById('product').value;
        const quantity = document.getElementById('quantity').value.trim();

        if (!name || !phone || !product || !quantity) {
            alert('Please fill in all fields!');
            return;
        }

        const message = `New Order:%0AName: ${name}%0APhone: ${phone}%0AProduct: ${product}%0AQuantity: ${quantity}`;
        const url = `https://wa.me/919626112848?text=${message}`;

        // Open WhatsApp in a new tab
        window.open(url, '_blank');

        // Optionally reset the form
        form.reset();
    });
}

// Initialize automatically
initOrderForm();

