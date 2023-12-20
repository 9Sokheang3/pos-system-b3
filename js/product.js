document.addEventListener('DOMContentLoaded', function () {
  const tbody = document.querySelector('tbody');
  const phoneModel = document.querySelector('#phone_model');
  const Price = document.querySelector('#price');
  const typePhone = document.querySelector('#phone');
  const addButton = document.querySelector('#addPhone');
  // Load data from local storage when the page loads
  loadLocalStorageData();
  
  addButton.addEventListener('click', function (e) {
    e.preventDefault();
    addPhone();
  });
  
  function addPhone() {
    let tableRow = document.createElement('tr');
    let maxId = 0;
    
    for (let i = 0; i < tbody.children.length; i++) {
      let currentRow = tbody.children[i];
      let currentRowId = parseInt(currentRow.children[0].textContent);
      
      if (currentRowId > maxId) {
        maxId = currentRowId;
      }
    }
    
    let tdId = document.createElement('td');
    tdId.textContent = maxId + 1;
    
    let tdPhone = document.createElement('td');
    tdPhone.textContent = phoneModel.value;
    
    let tdTypePhone = document.createElement('td');
    tdTypePhone.textContent = typePhone.value;
    
    let tdPrice = document.createElement('td');
    tdPrice.textContent = Price.value + '$';
    
    let tdAction = document.createElement('td');


    let btnDelete = createButton('Delete', 'btnDelete', function () {
      deleteRow(tableRow);
      updateLocalStorage();
    });

    let btnEdit = createButton('Edit', 'btnEdit');
    let btnDetail = createButton('Detail', 'btnDetail');

    tableRow.appendChild(tdId);
    tableRow.appendChild(tdPhone);
    tableRow.appendChild(tdTypePhone);
    tableRow.appendChild(tdPrice);
    tdAction.appendChild(btnDelete);
    tdAction.appendChild(btnEdit);
    tdAction.appendChild(btnDetail);
    tableRow.appendChild(tdAction);
    
    tbody.appendChild(tableRow);
    updateLocalStorage();
  }

  function deleteRow(row) {
    row.remove();
    updateLocalStorage();
  }

  function updateLocalStorage() {
    const rows = tbody.children;
    const data = [];

    for (let i = 0; i < rows.length; i++) {
      let row = rows[i];
      let rowData = {
        id: row.children[0].textContent,
        phone: row.children[1].textContent,
        type: row.children[2].textContent,
        price: row.children[3].textContent,
      };
      data.push(rowData);
    }

    localStorage.setItem('phoneData', JSON.stringify(data));
  }

  function loadLocalStorageData() {
    const storedData = localStorage.getItem('phoneData');

    if (storedData) {
      const data = JSON.parse(storedData);

      for (let i = 0; i < data.length; i++) {
        let rowData = data[i];
        let tableRow = document.createElement('tr');

        for (let key in rowData) {
          let td = document.createElement('td');
          td.textContent = rowData[key];
          tableRow.appendChild(td);
        }

        let btnDelete = createButton('Delete', 'btnDelete', function () {
          deleteRow(tableRow);
          updateLocalStorage();
        });

        let btnEdit = createButton('Edit', 'btnEdit');
        let btnDetail = createButton('Detail', 'btnDetail');

        tableRow.appendChild(btnDelete);
        tableRow.appendChild(btnEdit);
        tableRow.appendChild(btnDetail);

        tbody.appendChild(tableRow);
      }
    }
  }

  function createButton(text, className, clickHandler) {
    let button = document.createElement('button');
    button.setAttribute('class', className);
    button.textContent = text;

    if (clickHandler) {
      button.addEventListener('click', clickHandler);
    }

    return button;
  }
});
