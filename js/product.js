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
});g