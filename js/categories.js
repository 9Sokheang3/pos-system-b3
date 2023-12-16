function removeProcduct(event){
    let stock = event.target.closest('tr')
    stock.remove()
}

function viewProduct(){
    console.log(9);
}

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
function renderProducts() {
    let sumAll = 0
    loadProducts()
    tbody.remove() 
    let tBody = document.createElement('tbody')
    productsData.products.forEach(product=>{
    let tRow = document.createElement('tr')
    let tdName = document.createElement('td')
    let tdQty = document.createElement('td')
    let tdUnitPrice = document.createElement('td')
    let tdTotalPrice = document.createElement('td')
    let tdAction = document.createElement('td')
    tdAction.className = "row"
    let qtyInput = document.createElement('input')
    let closte = document.createElement('i');
    closte.className ="material-icons"
    closte.textContent = "close"
    let btn = document.createElement('button')

    // tdQty.textContent = product.id
    tdName.textContent =  product.name
    qtyInput.setAttribute('type',"number")
    qtyInput.value = product.quantity
    tdQty.appendChild(qtyInput)
    tdUnitPrice.textContent = product.price + "$"
    tdTotalPrice.textContent = product.price * product.quantity + "$"
    btn.textContent = "View all"
    // btn.addEventListener('click'viewProduct)
    closte.addEventListener('click',removeProcduct)

    tdAction.appendChild(btn)
    tdAction.appendChild(closte)
    tRow.appendChild(tdQty)
    tRow.appendChild(tdName)
    tRow.appendChild(tdQty)
    tRow.appendChild(tdUnitPrice)
    tRow.appendChild(tdTotalPrice)
    tRow.appendChild(tdAction)

    tBody.appendChild(tRow)
    })

    table.appendChild(tBody);
    total.textContent = sumAll + "$"
}
let productsData = {
    products : [],
    latestId : null
};
const tbody = document.querySelector('tbody')
let total = document.querySelector('.total');
let table = document.querySelector('table')

loadProducts()
renderProducts();
