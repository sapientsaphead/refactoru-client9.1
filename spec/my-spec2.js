describe("Module", function() {
  it("should do something", function() {
    expect(true).toEqual(false);
  });
});

describe('getDayName', function() {
 it('should return Sunday for 0', function() {
  expect(getDayName(0)).toBe('Sunday');
 });
 it('should return Monday for 1', function() {
  expect(getDayName(1)).toBe('Monday');
 });
})

describe("Join", function() {
	it("should ignore falsey values", function() {
		expect(join([kittens, puppies, false, null, pandas, undefined, babies, 0, hedgehogs], " and ").toBe('kittens and puppies and pandas and babies and hedgehogs'));
	})
})