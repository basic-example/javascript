describe('expect().toHaveBeenCalled', () => {
  test('it expected to have been called', async () => {
    const mock1 = jest.fn()
    const mock2 = jest.fn()

    mock1('abcd')

    expect(mock1).toHaveBeenCalled();
    expect(mock2).not.toHaveBeenCalled();
  });
});
