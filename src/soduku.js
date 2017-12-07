"use strict";

let Soduku = function() {
  this.rows = document.getElementsByTagName("tr");
  this.cells = document.getElementsByTagName("td");
  this.error = document.getElementById("error-message");
};

Soduku.prototype.rowChecker = function(row, entry) {
  if (this.rows[row - 1].innerText.includes(entry)) {
    this.error.innerText = "error - row has duplicate number";
    throw "row has duplicate number";
  }
};

Soduku.prototype.colChecker = function(column, entry) {
  let columnArray = [];
  for (var i = 0; i < this.board.length; i++) {
    columnArray.push(this.board[i][column - 1]);
  }
  if (columnArray.includes(entry)) {
    throw "column has duplicate number";
  }
};

Soduku.prototype.addToBoard = function(row, column, entry) {
  this.rows[row - 1].children[column - 1].innerText = entry;
};

// Soduku.prototype.action = function(row, column, entry) {
//   this.checkers(row, column, entry);
//   this.addToBoard(row, column, entry);
// };
//
// Soduku.prototype.checkers = function(row, column, entry) {
//   this.rowChecker(row, entry);
//   this.colChecker(column, entry);
// };
