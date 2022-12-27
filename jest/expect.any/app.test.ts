describe('expect.any', () => {
  test('mock called with any User', async () => {
    class User {}
    const mock = jest.fn();
    mock(new User());
    expect(mock).toBeCalledWith(expect.any(User));
  });
});
