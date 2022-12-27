describe('expect.arrayContaining', () => {
  test('it matched expected values', async () => {
    const actual = ['AAA', 'BBB', 'CCC'];
    const expected1 = ['BBB', 'CCC'];
    const expected2 = ['CCC', 'DDD'];
    expect(actual).toEqual(expect.arrayContaining(expected1));
    expect(actual).not.toEqual(expect.arrayContaining(expected2));
  });
});
