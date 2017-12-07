$(document).ready(() => {
  soduku = new Soduku();

  $("#input-form").submit(event, function() {
    event.preventDefault();

    var dropdownChoice = $("#dropdown-choice").val();
    var dropdownRow = $("#dropdown-row").val();
    var dropdownCol = $("#dropdown-col").val();

    soduku.rowChecker(dropdownRow, dropdownChoice);
    soduku.addToBoard(dropdownRow, dropdownCol, dropdownChoice);
  });
});
