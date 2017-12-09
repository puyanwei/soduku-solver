"use strict";

let Soduku = function() {
  this.rows = document.getElementsByTagName("tr");
  this.cells = document.getElementsByTagName("td");
  this.error = document.getElementById("error-message");
};

Soduku.prototype.checkers = function(row, column, entry, squareIndex) {
  this.rowChecker(row, entry);
  this.colChecker(column, entry);
  this.squareCheckers(squareIndex, entry);
};

Soduku.prototype.rowChecker = function(row, entry) {
  if (this.rows[row].innerText.includes(entry)) {
    this.error.innerText = "row has duplicate number";
    throw "row has duplicate number";
  }
};

Soduku.prototype.colChecker = function(column, entry) {
  let columnArray = [];
  for (var i = 0; i < this.rows.length; i++) {
    columnArray.push(this.rows[i].children[column].innerText);
  }
  if (columnArray.includes(entry)) {
    this.error.innerText = "column has duplicate number";
    throw "column has duplicate number";
  }
};

Soduku.prototype.squareCheckers = function(squareIndex, entry) {
  var arr = [];
  for (var i = 0; i < 9; i += 3) {
    for (var j = 0; j < 9; j += 3) {
      var square = [];
      for (var l = i; l < i + 3; l++) {
        for (var m = j; m < j + 3; m++) {
          square.push(this.rows[l].children[m].innerText);
        }
      }
      arr.push(square);
    }
  }
  if (arr[squareIndex].includes(entry)) {
    this.error.innerText = "inner square has duplicate number";
    throw "inner square has duplicate number";
  }
};
