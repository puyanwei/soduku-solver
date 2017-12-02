"use strict";

var Soduku = function() {
  this.board = ["", "", "", ""];
};

Soduku.prototype.entry = function(position, number) {
  this.errorChecker(number);
  this.board[position - 1] = number;
};

Soduku.prototype.errorChecker = function(number) {
  if (this.board.includes(number)) {
    throw "Cannot have duplicate numbers";
  }
};
