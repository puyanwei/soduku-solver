$(document).ready(() => {
  $("#input-form").submit(event, () => {
    event.preventDefault();

    var dropdownChoice = $("#dropdown-choice").val();
    var dropdownRow = $("#dropdown-row").val();
    var dropdownCol = $("#dropdown-col").val();

    var rows = document.getElementsByTagName("tr");
    console.log(rows);
    console.log(dropdownRow);
    rows[dropdownRow - 1].children[dropdownCol - 1].innerText = dropdownChoice;
  });
});
