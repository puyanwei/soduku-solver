describe("Soduku", () => {
  var soduku;

  beforeEach(() => {
    soduku = new Soduku();
  });

  describe("Feature Test 1 - Duplicate Entry", () => {
    it("Throws an error if a duplicate is entered in a row", () => {
      soduku.entry(1, 2, 1);
      expect(() => {
        soduku.checker();
      }).toThrow("Row has duplicate entry");
    });
  });
});
