describe('expect().toHaveBeenCalledTimes', () => {
  test('it expected to have been 3 times', async () => {
    const mock1 = jest.fn()

    mock1('abcd')
    mock1('bcde')
    mock1('cdef')

    expect(mock1).toHaveBeenCalledTimes(3);
  });

  test('it expected to have been 2 times', async () => {
    const mock1 = jest.fn()

    mock1('abcd')
    mock1('bcde')

    expect(mock1).toHaveBeenCalledTimes(2);
  });

  test('it expected to have been 0 times', async () => {
    const mock1 = jest.fn()

    expect(mock1).toHaveBeenCalledTimes(0);
  });
});
