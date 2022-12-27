describe('expect.anything', () => {
  test('mock called with anything', async () => {
    const mock = jest.fn();
    mock(1);
    expect(mock).toBeCalledWith(expect.anything());
  });
});
