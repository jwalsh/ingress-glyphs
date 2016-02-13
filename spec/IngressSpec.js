describe("Module", function() {
  var ingress = require('../dist/ingress').ingress;

  beforeEach(function() {

  });

  it("should have glyphs, aliases, and sequences", function() {

    expect(Object.keys(ingress).length).toEqual(3);

  });

    it("should have populated data", function() {

    expect(Object.keys(ingress.glyphs).length > 1).toBe(true);
    expect(Object.keys(ingress.aliases).length > 1).toBe(true);
    expect(ingress.sequences.length > 1).toBe(true);

  });

});
