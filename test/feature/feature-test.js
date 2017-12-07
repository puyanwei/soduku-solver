describe("Soduku", () => {
  let soduku;

  beforeEach(() => {
    soduku = new Soduku();
  });

  describe("Feature Test 1 - Duplicate Entry", () => {
    it("Throws an error if a duplicate is entered in a row", () => {
      expect(() => {
        soduku.action(1, 2, 1);
      }).toThrow("row has duplicate number");
    });
  });
});
