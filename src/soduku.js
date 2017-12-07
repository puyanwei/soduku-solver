"use strict";

let Soduku = function() {
  //prettier-ignore
  this.board = [[ 1, "",  3,  6, "",  4,  7, "",  9],
                ["",  2, "", "",  9, "", "",  1, ""],
                [ 7, "", "", "", "", "", "", "",  6],

                [ 2, "",  4, "",  3, "",  9, "",  8],
                ["", "", "", "", "", "", "", "", ""],
                [ 5, "", "",  9, "",  7, "", "",  1],

                [ 6, "", "", "",  5, "", "", "",  2],
                ["", "", "", "",  7, "", "", "", ""],
                [ 9, "", "",  8, "",  2, "", "",  5]]
};

Soduku.prototype.entry = function(row, column, entry) {
  this.board[row - 1][column - 1] = entry;
};

Soduku.prototype.display = function(row, column) {
  return this.board[row - 1][column - 1];
};

Soduku.prototype.rowChecker = function(row, entry) {
  if (this.board[row - 1].includes(entry)) {
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
