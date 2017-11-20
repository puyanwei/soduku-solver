describe('Soduku', () => {
  var soduku;

  beforeEach(() => (soduku = new Soduku()));

  describe('#initialize', () => {
    it('makes a new soduku', () => {
      expect(soduku).toEqual(soduku);
    });
  });
});
