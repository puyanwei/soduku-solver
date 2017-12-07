$(document).ready(() => {
  $("#input-form").submit(event, function() {
    event.preventDefault();

    var dropdownChoice = $("#dropdown-choice").val();
    var dropdownRow = $("#dropdown-row").val();
    var dropdownCol = $("#dropdown-col").val();

    var rows = document.getElementsByTagName("tr");
    rows[dropdownRow - 1].children[dropdownCol - 1].innerText = dropdownChoice;
  });
});
