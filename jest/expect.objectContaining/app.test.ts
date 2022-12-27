describe('expect.objectContaining', () => {
  test('it matched expected values', async () => {
    class User {}
    const actual = {
      a: 1234,
      b: '2345',
      c: new User(),
    };
    const expected1 = {
      a: 1234,
      b: expect.any(String),
    };
    const expected2 = {
      a: 'invaild',
      b: '2345',
    };
    expect(actual).toEqual(expect.objectContaining(expected1));
    expect(actual).not.toEqual(expect.objectContaining(expected2));
  });
});
