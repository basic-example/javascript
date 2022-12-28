describe('expect().toHaveNthReturnedWith', () => {
  test('it expected to have N th returned with M', async () => {
    const mock1 = jest.fn((x) => x);
    mock1(1);
    mock1('abcd');
    mock1(true);

    expect(mock1).toHaveNthReturnedWith(1, 1);
    expect(mock1).toHaveNthReturnedWith(2, 'abcd');
    expect(mock1).toHaveNthReturnedWith(3, true);
    expect(mock1).not.toHaveNthReturnedWith(3, 'abcd');
    expect(mock1).not.toHaveNthReturnedWith(4, true);
  });
});
