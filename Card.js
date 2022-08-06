// Initial variables
const itemPlus = document.getElementById('item-plus');
const itemMinus = document.getElementById('item-minus');
const itemPrice = document.getElementById('item-price');
const itemQty = document.getElementById('item-qty');

const purchaseAmount = document.getElementById('purchase-amount');
const taxAmount = document.getElementById('tax-amount');
const deliveryAmount = document.getElementById('delivery-amount');
const totalAmount = document.getElementById('total-amount');

const coupon = document.getElementById('coupon');
const couponBtn = document.getElementById('coupon-btn');

// Qty plus
itemPlus.addEventListener('click', function () {
    itemQty.value = parseInt(itemQty.value) + 1;

    calculateCart();
})

// Qty minus
itemMinus.addEventListener('click', function () {
    if (itemQty.value >= 1) {
        itemQty.value = parseInt(itemQty.value) - 1;

        calculateCart();
    }
})
