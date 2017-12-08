"use strict";

let Soduku = function() {
  this.rows = document.getElementsByTagName("tr");
  this.cells = document.getElementsByTagName("td");
  this.error = document.getElementById("error-message");
};

Soduku.prototype.rowChecker = function(row, entry) {
  if (this.rows[row - 1].innerText.includes(entry)) {
    this.error.innerText = "row has duplicate number";
    throw "row has duplicate number";
  }
};

Soduku.prototype.colChecker = function(column, entry) {
  let columnArray = [];
  for (var i = 0; i < this.rows.length; i++) {
    console.log(this.rows[i].children[column - 1].innerText);
    columnArray.push(this.rows[i].children[column - 1].innerText);
  }
  console.log(columnArray);
  if (columnArray.includes(entry)) {
    this.error.innerText = "column has duplicate number";
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
