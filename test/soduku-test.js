describe("Soduku", () => {
  var soduku;

  beforeEach(() => {
    soduku = new Soduku();
  });

  describe("#initialize", () => {
    it("adds a blank 2 x 2 array", () => {
      expect(soduku.board.length).toEqual(4);
    });
  });

  describe("#entry", () => {
    it("adds a number to the array", () => {
      soduku.entry(2, 9);
      expect(soduku.board).toEqual(["", 9, "", ""]);
    });
  });

  // describe("#errorChecker", () => {
  //   it("throws an error if number is duplicate", () => {
  //     soduku.entry(2, 9);
  //     soduku.entry(3, 9);
  //     expect(() => {
  //       soduku.errorChecker();
  //     }).toThrowError();
  //   });
  // });

  describe("#errorChecker", () => {
    it("throws an error if position is already taken", () => {
      soduku.entry(2, 9);
      expect(() => {
        soduku.errorChecker(2, 8);
      }).toThrow("position already taken");
    });
    it("throws an error if number is duplicate", () => {
      soduku.entry(2, 9);
      expect(() => {
        soduku.errorChecker(3, 9);
      }).toThrow("cannot have duplicate numbers");
    });
  });
});
