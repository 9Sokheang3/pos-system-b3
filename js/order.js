function saveProducts(){
    localStorage.setItem('productsData', JSON.stringify(productsData));
}

function loadProducts(){
    let loadProducts = JSON.parse(localStorage.getItem('productsData'));
    if (loadProducts != undefined) {
        productsData = loadProducts
    }
    else{
        saveProducts()
    }
}
function addProduct() {
    let proId = productsData.latestId;
    if (proId === null || productsData.products.length === 0) {
        proId = 1;
    } else {
        proId = proId + 1;
    }

    productsData.latestId = proId;

    let product = {
        id: proId,
        name: productName.value,
        quantity: quantity.value,
        price: price.value,
    }
 
    productsData.products.push(product);
 
    saveProducts()
         
    productName.value = "";
    quantity.value = "";
    price.value = "";
}

const productName = document.querySelector('#product-name');
const price = document.querySelector('#price');
const quantity = document.querySelector('#qty');
const btn = document.querySelector('button');

let productsData = {
    products : [],
    latestId : null
};
 
loadProducts()
btn.addEventListener('click', addProduct);

function saveProducts() {
    localStorage.setItem('productsData', JSON.stringify(productsData));
}

function loadProducts() {
    let loadProducts = JSON.parse(localStorage.getItem('productsData'));
    if (loadProducts != undefined) {
        productsData = loadProducts
    }
    else {
        saveProducts()
    }
}

function renderProducts() {
    loadProducts();

    tbody.innerHTML = '';

    productsData.products.forEach(product => {
        let tBody = document.createElement("tbody");

        let tRow = document.createElement("tr");

        let tdName = document.createElement("td");
        tdName.textContent = product.name;

        let tdQty = document.createElement("td");
        tdQty.dataset.id = product.id;

        let qtyInput = document.createElement("input");
        // qtyInput.type = 'number';
        qtyInput.value = product.quantity;
        tdQty.appendChild(qtyInput);

        let tdUnitPrice = document.createElement("td");
        tdUnitPrice.textContent = product.price + "$";

        let tdTotalPrice = document.createElement("td");
        tdTotalPrice.textContent = (product.price * product.quantity) + "$";

        tRow.appendChild(tdName);
        tRow.appendChild(tdQty);
        tRow.appendChild(tdUnitPrice);
        tRow.appendChild(tdTotalPrice);

        tBody.appendChild(tRow);

        let table = document.querySelector('table');
        table.appendChild(tBody);

    });


}
 
let productsData = {
    products: [],
    latestId: null
};

const tbody = document.querySelector('tbody')
let total = document.querySelector('.total');
 
loadProducts()
renderProducts();