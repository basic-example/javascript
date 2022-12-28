describe('expect().toHaveBeenLastCalledWith', () => {
  test('it expected to have been last called with', async () => {
    const mock1 = jest.fn()

    mock1('abcd')
    mock1('bcde')

    expect(mock1).not.toHaveBeenLastCalledWith('abcd');
    expect(mock1).toHaveBeenLastCalledWith('bcde');
  });
});
