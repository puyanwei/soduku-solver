describe("Soduku", () => {
  var soduku;

  beforeEach(() => {
    soduku = new Soduku();
  });

  describe("#initialize", () => {
    it("adds a blank 4 x 4 array", () => {
      expect(soduku.board.length).toEqual(16);
    });
  });

  describe("#entry", () => {
    it("adds a number to the array", () => {
      soduku.entry(2, 9);
      expect(soduku.board).toEqual([
        "",
        9,
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]);
    });
  });

  describe("#errorChecker", () => {
    it("throws an error if position is already taken", () => {
      soduku.entry(2, 9);
      expect(() => {
        soduku._position_taken(2, 8);
      }).toThrow("position already taken");
    });
    // it("inner 2 x 2 squares cannot have duplicate numbers", () => {
    //   soduku.entry(1, 4);
    //   expect(() => {
    //     soduku._duplicate(2, 4);
    //   }).toThrow("inside square has duplicate numbers");
    // });
  });

  describe("#arrayConvertor", () => {
    it("reorganises the array by columns", () => {
      soduku.board = [1, 2, 3, 4, 3, 4, 1, 2, 2, 3, 4, 1, 4, 1, 2, 3];
      expect(soduku.convertCols).toEqual([
        1,
        3,
        2,
        4,
        2,
        4,
        3,
        1,
        3,
        1,
        4,
        2,
        4,
        2,
        1,
        3
      ]);
    });
  });
});
