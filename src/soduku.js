"use strict";

var Soduku = function() {
  this.board = ["", "", "", ""];
};

Soduku.prototype.entry = function(position, number) {
  this.board[position - 1] = number;
};

// A soduku puzzle
// XXX 1XX XX2
// XXX XX5 8XX
// XX5 XX4 6XX
//
// X4X XX8 13X
// X7X XXX X4X
// X16 3XX X9X
//
// XX1 6XX 7XX
// XX3 5XX XXX
// 9XX XX2 XXX
