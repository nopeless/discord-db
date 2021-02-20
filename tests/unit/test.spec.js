const assert = require(`assert`);

describe(`1+1 test`, function() {
  describe(`performs calculation`, function() {
    it(`should return 2`, function() {
      assert.strictEqual(1 + 1, 2);
    });
  });
});