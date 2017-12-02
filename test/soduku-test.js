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

  describe("#errorChecker", () => {
    it("throws an error if number is duplicate", () => {
      soduku.entry(2, 9);
      soduku.entry(1, 9);
      expect(() => {
        soduku.errorChecker();
      }).toThrow(Error, "cannot have duplicate numbers");
    });
  });
});

// XXX 1 XX XX2
// XXX XX5 8 XX
// XX5 XX4 6 XX
//
// X4X XX8 13 X
// X7X XXX X4X
// X16 3 XX X9X
//
// XX1 6 XX 7 XX
// XX3 5 XX XXX
// 9 XX XX2 XXX
