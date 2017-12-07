describe("Soduku", () => {
  var soduku;

  beforeEach(() => {
    soduku = new Soduku();
  });

  describe("#initialize", () => {
    it("adds a blank 9 x 9 2D array", () => {
      expect(soduku.board.length).toEqual(9);
      expect(soduku.board[0].length).toEqual(9);
    });
  });

  describe("#entry", () => {
    it("enters a number into the array", () => {
      soduku.entry(4, 4, 9);
      expect(soduku.display(4, 4)).toEqual(9);
    });
  });

  describe("#rowChecker", () => {
    it("checks the rows for duplicate numbers", () => {
      soduku.entry(1, 2, 9);
      expect(() => {
        soduku.rowChecker(1, 9);
      }).toThrow("row has duplicate number");
    });
  });

  describe("#colChecker", () => {
    it("checks the columns for duplicate numbers", () => {
      expect(() => {
        soduku.colChecker(1, 5);
      }).toThrow("column has duplicate number");
    });
  });
});
