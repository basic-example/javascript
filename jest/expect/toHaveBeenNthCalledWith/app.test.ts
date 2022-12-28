describe('expect().toHaveBeenNthCalledWith', () => {
  test('it expected to have been nth called with', async () => {
    const mock1 = jest.fn()

    mock1('abcd')
    mock1('bcde')

    expect(mock1).toHaveBeenNthCalledWith(1, 'abcd');
    expect(mock1).toHaveBeenNthCalledWith(2, 'bcde');
  });
});
