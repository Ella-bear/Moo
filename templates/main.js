// Cart functionality
function updateCart(productId, quantity) {
    fetch(`/cart/update/${productId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('cart-count').textContent = data.cartCount;
            document.getElementById(`product-${productId}-total`).textContent = 
                `₹${data.itemTotal}`;
            document.getElementById('cart-total').textContent = `₹${data.cartTotal}`;
        }
    });
}

// Calendar functionality
document.addEventListener('DOMContentLoaded', function() {
    const dateButtons = document.querySelectorAll('.date-button');
    dateButtons.forEach(button => {
        button.addEventListener('click', function() {
            dateButtons.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});

// Profile image upload preview
function previewImage(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-preview').src = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
}