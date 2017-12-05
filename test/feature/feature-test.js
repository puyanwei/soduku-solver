describe("Soduku", () => {
  var soduku;

  beforeEach(() => {
    soduku = new Soduku();
  });

  describe("Feature Test 4 x 4 Board", () => {
    it("shows the board", () => {
      soduku.entry(1, 1);
      soduku.entry(2, 2);
      soduku.entry(3, 3);
      soduku.entry(4, 4);
      soduku.entry(5, 3);
      soduku.entry(6, 4);
      soduku.entry(7, 1);
      soduku.entry(8, 2);
      soduku.entry(9, 2);
      soduku.entry(10, 3);
      soduku.entry(11, 4);
      soduku.entry(12, 1);
      soduku.entry(13, 4);
      soduku.entry(14, 1);
      soduku.entry(15, 2);
      soduku.entry(16, 3);
      expect(soduku.board).toEqual([
        1,
        2,
        3,
        4,
        3,
        4,
        1,
        2,
        2,
        3,
        4,
        1,
        4,
        1,
        2,
        3
      ]);
    });
  });
});

// 1,2,3,4
// 3,4,1,2
// 2,3,4,1
// 4,1,2,3
