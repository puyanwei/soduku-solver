$(document).ready(() => {
  soduku = new Soduku();

  // $("td").click(function(event) {
  //   console.log(event.target.cellIndex);
  // });

  $("td").click(function() {
    this.rows = document.getElementsByTagName("tr");

    var column = this.cellIndex;
    var row = this.parentNode.rowIndex;

    this.rows[row].children[column].innerText = 9;
  });

  // $("#input-form").submit(event, function() {
  //   event.preventDefault();
  //
  //   var dropdownChoice = $("#dropdown-choice").val();
  //   var dropdownRow = $("#dropdown-row").val();
  //   var dropdownCol = $("#dropdown-col").val();
  //
  //   soduku.action(dropdownRow, dropdownCol, dropdownChoice);
  // });
});
// });

// });
