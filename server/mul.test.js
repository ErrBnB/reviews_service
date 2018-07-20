const multiple = require('./mul');

test('the multiple should be 48', () => {
	expect(multiple(6, 8)).toBe(48);
});

test('the multiple should be 120' , () => {
	expect(multiple(3, 40)).toBe(120);
});
