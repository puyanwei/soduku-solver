# Soduku Interface

This is a self initiated practice exercise for myself to create a working interface for a [Soduku](https://en.wikipedia.org/wiki/Sudoku) puzzle.

[screen shot 2017-12-30 at 16 43 09](https://user-images.githubusercontent.com/14803518/34455887-a22edf8e-ed80-11e7-80c0-0e884a1d291e.png)

## Tech Stack

* Javascript
* Node JS
* JQuery
* HTML
* CSS
* Jasmine

## Installation

Go to your terminal and `git clone git@github.com:puyanwei/soduku-solver.git`. Go
to the project folder and `open index.html`

## Features

* Choose your input number via the dropdown menu.
* Clicking in the cell location will enter that number.
* The interface will show an error if your entry has a duplicate in the rows, columns or inner squares.

## Process and Challenges

It has been a tough exercise as I am quite new with JQuery and CSS. The biggest challenge is testing effectively, and this is still unfinished as I have problems because my code is so intertwined with the front end, it has made it difficult to test. I may have to use a headless browser like zombie.js to complete this.

The logic of the inner squares has been very challenging. The complexity of having four loops makes it difficult to keep track of, but ultimately is better then having 81 seperate lines of checking!

It has been a rather longwinded process with this task. I started with a test driven pure code with no interface, but in spiking I realised that doubling up on an array for the board would seem counter intuitive. The location of the user's entry was originally a text box, followed by a dropdown menu, then finally using the location of mouse click in the end.

## Potential Directions

The following features I would like to implement in the future;

* A congratulations message for completing the puzzle.
* Deleting an entry.
* Fully completed tests with good coverage.
* A better coding structure, I'm not too sure about the conventions as well as where JQuery code combined with Javascript code should be located, especially for the purposes of effective testing.
* Have the Soduku be solved in real time, but showing visuals of the brute force calculations.
