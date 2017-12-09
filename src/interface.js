$(document).ready(() => {
  soduku = new Soduku();

  $("td").click(function() {
    this.rows = document.getElementsByTagName("tr");

    var row = this.parentNode.rowIndex;
    var column = this.cellIndex;
    console.log(Math.floor(row / 3), Math.floor(column / 3));
    var entry = $("#dropdown-choice").val();
    var squareIndex = convertToIndex(row, column);

    soduku.checkers(row, column, entry, squareIndex);
    this.rows[row].children[column].innerText = entry;
  });

  function convertToIndex(row, column) {
    var rowFloored = Math.floor(row / 3);
    var columnFloored = Math.floor(column / 3);
    var index = rowFloored * 3;
    return index + columnFloored;
  }
});
