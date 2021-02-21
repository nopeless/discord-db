// this is how you write unit tests
describe(`this is a template test`, function() {
  describe(`1+1 calculation`, function() {
    it(`should return 2`, function() {
      assert.strictEqual(1 + 1, 2);
    });
  });
});

describe(`Discord bot`, function() {
  after(function() {
    // runs once after the last test in this block
    discordDB.destroy();
  });
  describe(`constructor tests`, function() {
    it(`should run without errors`, function() {
      assert(!!discordDB);
    });
  });
});