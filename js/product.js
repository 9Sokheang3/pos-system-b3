document.addEventListener('DOMContentLoaded', function () {
  // Get all delete buttons
  var deleteButtons = document.querySelectorAll('.btnDelete');

  // Add click event listener to each delete button
  deleteButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Find the closest parent <tr> element and remove it
      var row = button.closest('tr');
      row.remove();
    });
  });
});
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
    let btnDelete = document.createElement('i');
    btnDelete.setAttribute('class', 'material-icons')
    btnDelete.textContent = 'delete';

    tableRow.appendChild(tdId);
    tableRow.appendChild(tdPhone);
    tableRow.appendChild(tdTypePhone);
    tableRow.appendChild(tdPrice);

    // append tableRow to tbody
    tbody.appendChild(tableRow);
    console.log(1);
  }
  // object = [];
  // id = 0;

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