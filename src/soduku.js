"use strict";

var Soduku = function() {
  this.board = ["", "", "", ""];
};

Soduku.prototype.play = function(position, number) {
  errorChecker(position, number);
  entry(position, number);
};

Soduku.prototype.entry = function(position, number) {
  this.board[position - 1] = number;
};

Soduku.prototype.errorChecker = function(position, number) {
  _position_taken(position, number);
  _duplicate(position, number);
};

Soduku.prototype._position_taken = function(position, number) {
  if (this.board[position - 1] !== "") {
    throw "position already taken";
  }
};

Soduku.prototype._duplicate = function(position, number) {
  if (this.board.includes(number)) {
    throw "cannot have duplicate numbers";
  }
};
