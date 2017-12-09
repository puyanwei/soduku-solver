$(document).ready(() => {
  soduku = new Soduku();

  $("td").click(function() {
    this.rows = document.getElementsByTagName("tr");

    var row = this.parentNode.rowIndex;
    var column = this.cellIndex;
    var entry = $("#dropdown-choice").val();
    soduku.checkers(row, column, entry);

    // this.rows[row].children[column].innerText = entry;
  });
});
