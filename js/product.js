document.addEventListener('DOMContentLoaded', function () {
  const tbody = document.querySelector('tbody');
  const phoneModel = document.querySelector('#phone_model');
  const price = document.querySelector('#price');
  const typePhone = document.querySelector('#phone');
  const addButton = document.querySelector('#addPhone');

  // Load data from local storage when the page loads
  loadLocalStorageData();

  // Event listener for adding a new phone
  addButton.addEventListener('click', function (e) {
    e.preventDefault();
    addPhone();
  });

  // Function to add a new phone to the table
  function addPhone() {
    let tableRow = document.createElement('tr');
    let maxId = getMaxId();

    // Create table cells
    let tdId = createTableCell(maxId + 1);
    let tdPhone = createTableCell(phoneModel.value);
    let tdTypePhone = createTableCell(typePhone.value);
    let tdPrice = createTableCell(`${price.value}$`);
    let tdAction = createTableCell();

    // Create action buttons
    let btnDelete = createButton('Delete', 'btnDelete', function () {
      deleteRow(tableRow);
      updateLocalStorage();
    });
    let btnEdit = createButton('Edit', 'btnEdit');
    let btnDetail = createButton('Detail', 'btnDetail');

    // Append cells and buttons to the row
    appendCellsToRow(tableRow, [tdId, tdPhone, tdTypePhone, tdPrice, tdAction]);
    appendButtonsToCell(tdAction, [btnDelete, btnEdit, btnDetail]);

    // Append the row to the table body
    tbody.appendChild(tableRow);

    // Update local storage
    updateLocalStorage();
  }

  // Function to delete a row
  function deleteRow(row) {
    row.remove();
    updateLocalStorage();
  }

  // Function to update local storage with current table data
  function updateLocalStorage() {
    const data = getTableData();
    localStorage.setItem('phoneData', JSON.stringify(data));
  }

  // Function to load data from local storage and populate the table
  function loadLocalStorageData() {
    const storedData = localStorage.getItem('phoneData');

    if (storedData) {
      const data = JSON.parse(storedData);
      data.forEach((rowData) => {
        let tableRow = createTableRow(rowData);
        tbody.appendChild(tableRow);
      });
    }
  }

  // Function to create a button element
  function createButton(text, className, clickHandler) {
    let button = document.createElement('button');
    button.setAttribute('class', className);
    button.textContent = text;

    if (clickHandler) {
      button.addEventListener('click', clickHandler);
    }

    return button;
  }

  // Function to create a table cell element
  function createTableCell(text = '') {
    let td = document.createElement('td');
    td.textContent = text;
    return td;
  }

  // Function to get the maximum ID from the existing rows
  function getMaxId() {
    let maxId = 0;

    for (let i = 0; i < tbody.children.length; i++) {
      let currentRow = tbody.children[i];
      let currentRowId = parseInt(currentRow.children[0].textContent);

      if (currentRowId > maxId) {
        maxId = currentRowId;
      }
    }

    return maxId;
  }

  // Function to get the data from the table
  function getTableData() {
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

    return data;
  }

  // Function to create a table row element from given data
  function createTableRow(rowData) {
    let tableRow = document.createElement('tr');

    for (let key in rowData) {
      let td = createTableCell(rowData[key]);
      tableRow.appendChild(td);
    }

    let tdAction = createTableCell();
    let btnDelete = createButton('Delete', 'btnDelete', function () {
      deleteRow(tableRow);
      updateLocalStorage();
    });
    let btnEdit = createButton('Edit', 'btnEdit');
    let btnDetail = createButton('Detail', 'btnDetail');

    appendButtonsToCell(tdAction, [btnDelete, btnEdit, btnDetail]);
    tableRow.appendChild(tdAction);

    return tableRow;
  }

  // Function to append an array of cells to a row
  function appendCellsToRow(row, cells) {
    cells.forEach((cell) => {
      row.appendChild(cell);
    });
  }

  // Function to append an array of buttons to a cell
  function appendButtonsToCell(cell, buttons) {
    buttons.forEach((button) => {
      cell.appendChild(button);
    });
  }
});