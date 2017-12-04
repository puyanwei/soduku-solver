"use strict";

var Soduku = function() {
  this.board = ["", "", "", ""];
};

Soduku.prototype.play = function(position, number) {
  errorChecker(number);
  entry(position, number);
};

Soduku.prototype.entry = function(position, number) {
  this.board[position - 1] = number;
};

Soduku.prototype.errorChecker = function(number) {
  if (this.board.includes(number)) {
    throw "Cannot have duplicate numbers";
  }
};
