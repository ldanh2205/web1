const cartContainer = document.querySelector('.cart-container table');
const orderTotal = document.querySelector('.cart-container h2');
const orderBtn = document.querySelector('.order-form button');
const customerName = document.querySelector('.customer-name');
const customerPhone = document.querySelector('.customer-phone');
const customerAddress = document.querySelector('.customer-address');

let items = JSON.parse(window.localStorage.getItem("cart")) || [];
let total = 0;

for (const item of items) {
    const product = document.createElement("tr");
    product.innerHTML =
        `<td>
            <div class="item-info">
                <img src="${item.image}">
                <div>
                    <p class="name">${item.title}</p>
                    <button type="button" class="remove-item"><i class="fa-solid fa-trash-can"></i>Xoá</button>
                </div>
            </div>
        </td>
        <td><p>${item.amount}</p></td>
        <td class="price">${item.price * item.amount}000đ</td>`;
    cartContainer.appendChild(product);
    total += item.price * item.amount;
}

orderTotal.outerHTML =
    `<h2>Tổng cộng: 
        <span class="total">${total}000đ</span>
    </h2>`;

orderBtn.addEventListener('click', function () {
    if (customerName.value === '' || customerPhone.value === '' || customerAddress.value === '') {
        alert('Vui lòng nhập đầy đủ thông tin');
        return;
    }

    // Tạo đơn hàng mới
    const newOrder = {
        customerName: customerName.value,
        customerPhone: customerPhone.value,
        customerAddress: customerAddress.value,
        orderItems: items,
        orderTotal: total
    };

    // Đẩy vào localStorage sau một khoảng thời gian ngắn
    setTimeout(() => {
        saveOrderToLocalStorage(newOrder);

        alert('Đã đặt hàng!');
        window.location.href = 'index.html'
        localStorage.removeItem('cart');
    }, 100);
});

function saveOrderToLocalStorage(order) {
    // Lấy danh sách đơn hàng đã đặt trước đó (nếu có)
    const previousOrders = JSON.parse(localStorage.getItem('orders')) || [];

    // Thêm đơn hàng mới vào danh sách
    previousOrders.push(order);

    // Lưu danh sách đơn hàng mới vào localStorage
    localStorage.setItem('orders', JSON.stringify(previousOrders));
}





document.addEventListener('DOMContentLoaded', function () {
    displayOrders();
});

function displayOrders() {
    const orderListContainer = document.getElementById('order-list1');

    // Lấy danh sách đơn hàng từ localStorage
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    // Hiển thị thông tin đơn hàng trong bảng
    for (const order of orders) {
        const orderRow = document.createElement('tr');
        orderRow.innerHTML = `
         
        <td>${order.customerName}</td>
        <td>${order.customerPhone}</td>
        <td>${order.customerAddress}</td>
        <td>${order.productName}</td>
        <td>${order.purchaseTime}</td>
        <td>${order.orderTotal}000đ</td>
        `;
        orderListContainer.appendChild(orderRow);
    }
}
const orderList = [
    { id: 1, name: 'John Doe', phone: '123456789', address: '123 Main St', total: 50.000 },
    // Add more order objects as needed
];

const orderTable = document.getElementById('order-list1');

orderList.forEach(order => {
    const row = orderTable.insertRow();

    // Insert cells with order information
    // ...

    // Add a cell with the confirmation button
    const confirmCell = row.insertCell();
    const confirmButton = document.createElement('button');
 
   
    confirmCell.appendChild(confirmButton);
});


   
// Trong file scripts/checkout.js (hoặc một file mới nếu cần)
// In scripts/checkout.js



