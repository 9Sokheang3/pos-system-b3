const searchPhone = () => {
    let trs = document.querySelectorAll('tbody tr')
    let textsearch = search.value.toLowerCase()
    for (let t of trs) {
        let list = t.firstElementChild.nextElementSibling.textContent.toLowerCase()
        if (list.includes(textsearch)) {
            t.style.display = "blocked";
        } else {
            t.style.display = "none";
        }
        if(textsearch.length === 0){
            window.location.reload()
        }  
    }
}

function addCategory() {
    if (input.value === '' ) {
        return alert('please enter a Category');
    }
    let uniqueId = localStorage.getItem('id');
    if (uniqueId === null) {
        uniqueId = 1;
        localStorage.setItem('id', JSON.stringify(uniqueId));
    } else {
        uniqueId = parseInt(uniqueId) + 1
        localStorage.setItem('id', JSON.stringify(uniqueId));
    }
    let stock = {
        id: uniqueId,
        title: input.value,
    }
    console.log(stock);
    stocks.push(stock)
    localStorage.setItem('stocks', JSON.stringify(stocks));
    window.location.reload();
}
function getCategory() {
    let tbody = document.querySelector('tbody');
    tbody.remove();
    tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for (let index = 0; index < stocks.length; index++) {
        let stocker = stocks[index]

        let tr = document.createElement('tr');
        tr.dataset.index = index;
        let tdId = document.createElement('td');
        let tdtitle = document.createElement('td');
        let tdaction = document.createElement('td');

        let iconDelete = document.createElement('i');
        iconDelete.className ="material-icons";
        iconDelete.textContent = "delete";
        iconDelete.addEventListener('click',deleteCategory);

        let iconEdit = document.createElement('i');
        iconEdit.className ="material-icons";
        iconEdit.textContent = "edit";
        iconEdit.addEventListener('click',editeCategory)

        tdaction.appendChild(iconEdit);
        tdaction.appendChild(iconDelete);

        tdId.textContent = stocker.id;
        tdtitle.textContent = stocker.title;

        tr.appendChild(tdId);
        tr.appendChild(tdtitle);
        tr.appendChild(tdaction);
        tbody.appendChild(tr);
    }
}
function deleteCategory(event){
    let index = event.target.closest('tr').dataset.index;
    stocks.splice(index, 1)
    getCategory();
    localStorage.setItem('stocks', JSON.stringify(stocks));
}
function editeCategory(event) {
    btnadd.className = 'hide';
    btnUpdate.className = "show";
    input.type ='hidden'
    input2.type = '' 
    let index = event.target.parentElement.parentElement.dataset.index;
    input2.value = stocks[index].title;
    local = index;
}
function updateCategory() {
    btnadd.className = 'hide';
    btnUpdate.className = "show";
    stocks[local].title = input2.value ;

    btnadd.className = 'show';  
    btnUpdate.className = "hide";
    input.type =''
    input2.type = 'hidden'
    localStorage.setItem('stocks', JSON.stringify(stocks));
    addCategory()
    getCategory();
}
let local;
let stocks = [];
let btnadd = document.querySelector('#add');
let input = document.querySelector('input');
let btnUpdate = document.getElementById('update')
let queryData = localStorage.getItem('stocks');
let table = document.querySelector('table');
let input2 = document.querySelector('#book-id')
const searchText = document.querySelector('#search');
searchText.addEventListener('keyup', searchPhone)

if (queryData !== null) {
    stocks = JSON.parse(queryData)
}
btnadd.addEventListener('click', addCategory)
btnUpdate.addEventListener('click', updateCategory)

getCategory();