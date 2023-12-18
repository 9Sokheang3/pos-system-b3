
document.addEventListener('DOMContentLoaded', function () {
  function AddPhone() {
    // create table row named tableRow
    let tableRow = document.createElement('tr');

    // Find the highest current ID in the table
    let maxId = 0;
    for (let i = 0; i < tbody.children.length; i++) {
      let currentRow = tbody.children[i];
      let currentRowId = parseInt(currentRow.children[0].textContent);
      if (currentRowId > maxId) {
        maxId = currentRowId;
      }
    }

    // Set the ID for the new row
    let tdId = document.createElement('td');
    tdId.textContent = maxId + 1;

    let tdPhone = document.createElement('td');
    tdPhone.textContent = phoneModel.value;
    let tdPrice = document.createElement('td');
    tdPrice.textContent = Price.value + '$';
    let tdTypePhone = document.createElement('td');
    tdTypePhone.textContent = typePhone.value;

    let btnDelete = document.createElement('button');
    btnDelete.setAttribute('class', 'btnDelete')
    btnDelete.textContent = 'Delete';
    btnDelete.addEventListener('click', function () {
      // Call a function to handle the row deletion
      deleteRow(tableRow);
      updateLocalStorage();
    });
    let btnEdit = document.createElement('button');
    btnEdit.setAttribute('class', 'btnEdit')
    btnEdit.textContent = 'Edit';
    let btnDetail = document.createElement('button');
    btnDetail.setAttribute('class', 'btnDetail')
    btnDetail.textContent = 'Detail';
    


    tableRow.appendChild(tdId);
    tableRow.appendChild(tdPhone);
    tableRow.appendChild(tdTypePhone);
    tableRow.appendChild(tdPrice);
    tableRow.appendChild(btnDelete);
    tableRow.appendChild(btnEdit);
    tableRow.appendChild(btnDetail);

    // append tableRow to tbody
    tbody.appendChild(tableRow);
    
  }
  function deleteRow(row) {
    row.remove();
  }

  // Main
  const phoneModel = document.querySelector('#phone_model');
  const Price = document.querySelector('#price');
  const typePhone = document.querySelector('#phone');
  const addButton = document.querySelector('#addPhone');

  const tbody = document.querySelector('tbody');

  addButton.addEventListener('click', (e) => {
    e.preventDefault();
    AddPhone();
  });
});

