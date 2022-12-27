describe('expect.stringContaining', () => {
  test('it matched expected values', async () => {
    const actual = 'aaa bbb ccc';
    const expected1 = 'bbb';
    const expected2 = 'ddd';
    expect(actual).toEqual(expect.stringContaining(expected1));
    expect(actual).not.toEqual(expect.stringContaining(expected2));
  });
});
