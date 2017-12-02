describe("Soduku", () => {
  var soduku;

  beforeEach(() => {
    soduku = new Soduku();
  });

  describe("Feature Test 2 x 2 Board", () => {
    it("shows the board", () => {
      soduku.entry(1, 1);
      soduku.entry(2, 2);
      soduku.entry(3, 3);
      soduku.entry(4, 4);
      expect(soduku.board).toEqual([1, 2, 3, 4]);
    });
  });
});
