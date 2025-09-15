// js/order.js
// This module handles the WhatsApp order submission

export function initOrderForm() {
    const form = document.getElementById('orderForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const product = document.getElementById('product').value;
        const quantity = document.getElementById('quantity').value.trim();
        const address = document.getElementById('address').value.trim();

        // Validation for each field
        if (!name) {
            alert('Please enter your Name!');
            return;
        }
        if (!phone) {
            alert('Please enter your Phone Number!');
            return;
        }
        if (!product) {
            alert('Please select a Product!');
            return;
        }
        if (!quantity || quantity <= 0) {
            alert('Please enter a valid Quantity!');
            return;
        }
        if (!address) {
            alert('Please enter your Delivery Address!');
            return;
        }

        // Construct WhatsApp message
        const message = `New Order:%0AName: ${name}%0APhone: ${phone}%0AProduct: ${product}%0AQuantity: ${quantity}%0AAddress: ${address}`;
        const url = `https://wa.me/919626112848?text=${encodeURIComponent(message)}`;

        // Open WhatsApp in a new tab
        window.open(url, '_blank');

        // Reset the form
        form.reset();
    });
}

// Initialize automatically
initOrderForm();
