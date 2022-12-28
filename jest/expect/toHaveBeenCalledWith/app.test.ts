describe('expect().toHaveBeenCalledWith', () => {
  test('it expected to have been called with', async () => {
    const mock1 = jest.fn()

    mock1('abcd')

    expect(mock1).toHaveBeenCalledWith('abcd');
  });

  test('it expected to have been called with', async () => {
    const mock1 = jest.fn()

    mock1('abcd', 'bcde')

    expect(mock1).not.toHaveBeenCalledWith('bcde');
    expect(mock1).not.toHaveBeenCalledWith('bcde', expect.any(String));
    expect(mock1).toHaveBeenCalledWith(expect.any(String), 'bcde');
  });
});
