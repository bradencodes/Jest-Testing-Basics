const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

//To Be null
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

//To Be Falsy
test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

//To Equal
test('User should be Braden Walker object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Braden',
    lastName: 'Walker'
  });
});

// Less than and greater than
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in username', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

// Async Data
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toBe('Leanne Graham');
  });
});

// Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();

  expect(data.name).toBe('Leanne Graham');
});
