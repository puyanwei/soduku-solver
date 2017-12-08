describe("Soduku", () => {
  var soduku;

  beforeEach(() => {
    soduku = new Soduku();
  });

  describe("#addToBoard", () => {
    it("enters a number into the board", () => {
      soduku.addToBoard(4, 4, 9);
      console.log(document.getElementsByTagName("td"));
      expect(soduku.cells[29]).toEqual(9);
    });
  });

  // describe("#rowChecker", () => {
  //   it("checks the rows for duplicate numbers", () => {
  //     soduku.input(1, 2, 9);
  //     expect(() => {
  //       soduku.rowChecker(1, 9);
  //     }).toThrow("row has duplicate number");
  //   });
  // });
  //
  // describe("#colChecker", () => {
  //   it("checks the columns for duplicate numbers", () => {
  //     expect(() => {
  //       soduku.colChecker(1, 5);
  //     }).toThrow("column has duplicate number");
  //   });
  // });
});
