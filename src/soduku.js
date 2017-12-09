"use strict";

let Soduku = function() {
  this.rows = document.getElementsByTagName("tr");
  this.cells = document.getElementsByTagName("td");
  this.error = document.getElementById("error-message");
};

Soduku.prototype.action = function(row, column, entry) {
  this.checkers(row, column, entry);
  this.addToBoard(row, column, entry);
};

Soduku.prototype.checkers = function(row, column, entry) {
  this.rowChecker(row, entry);
  this.colChecker(column, entry);
  this.squareChecker(column, row, entry);
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
    columnArray.push(this.rows[i].children[column - 1].innerText);
  }
  if (columnArray.includes(entry)) {
    this.error.innerText = "column has duplicate number";
    throw "column has duplicate number";
  }
};

Soduku.prototype.squareChecker = function(column, row, entry) {
  let innerSquare = [];
  for (var i = 0; i < 27; i += 3) {
    innerSquare.push(this.cells[i + 0].innerText);
    innerSquare.push(this.cells[i + 1].innerText);
    innerSquare.push(this.cells[i + 2].innerText);
    innerSquare.push(this.cells[i + 9].innerText);
    innerSquare.push(this.cells[i + 10].innerText);
    innerSquare.push(this.cells[i + 11].innerText);
    innerSquare.push(this.cells[i + 18].innerText);
    innerSquare.push(this.cells[i + 19].innerText);
    innerSquare.push(this.cells[i + 20].innerText);
    if (innerSquare.includes(entry)) {
      this.error.innerText = "inner square has duplicate number";
      throw "inner square has duplicate number";
      innerSquare = [];
    }
  }
};

Soduku.prototype.addToBoard = function(row, column, entry) {
  this.rows[row - 1].children[column - 1].innerText = entry;
};
