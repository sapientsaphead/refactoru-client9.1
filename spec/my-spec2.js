// describe("Module", function() {
//   it("should do something", function() {
//     expect(true).toEqual(false);
//   });
// });

describe("Join", function() {
	it('should remove zero-length strings', function() {
	  expect(join(['kittens', "", 'puppies', false, null, 'pandas', undefined, 0, 'hedgehogs'], " and ")).toBe('kittens and puppies and false and null and pandas and undefined and 0 and hedgehogs');
	});
	it('should use a default comma if no delimeter is specified', function() {
	  expect(join(['kittens', 'puppies', 'pandas', 'hedgehogs'])).toBe('kittens,puppies,pandas,hedgehogs');
	});
	it('should turn delimeter to string if needed ', function() {
	  expect(join(['kittens', 'puppies','pandas'], [4, 'u'])).toBe('kittens4,upuppies4,upandas');
	});
})

// should use a default comma if no delimeter is specified
// should remove zero-length string elements from the array
// should it remove all falsey values?? no... you could have array of true false values and want to keep false
// should ignore any additional arguments that may be passed?
// should turn delimeter into string if necessary - apparently it does this already...

describe("Map", function() {
	it('should remove zero-length strings', function() {
	  expect(join(['kittens', "", 'puppies', false, null, 'pandas', undefined, 0, 'hedgehogs'], " and ")).toBe('kittens and puppies and false and null and pandas and undefined and 0 and hedgehogs');
	});
	it('should use a default comma if no delimeter is specified', function() {
	  expect(join(['kittens', 'puppies', 'pandas', 'hedgehogs'])).toBe('kittens,puppies,pandas,hedgehogs');
	});
	it('should turn delimeter to string if needed ', function() {
	  expect(join(['kittens', 'puppies','pandas'], [4, 'u'])).toBe('kittens4,upuppies4,upandas');
	});
})