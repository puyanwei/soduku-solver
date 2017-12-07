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
});
