describe('expect.stringMatching', () => {
  test('it matched expected values', async () => {
    const actual = 'aaa bbb ccc';
    const expected1 = /c{3}$/;
    const expected2 = /c{4}$/;
    expect(actual).toEqual(expect.stringMatching(expected1));
    expect(actual).not.toEqual(expect.stringMatching(expected2));
  });
});
