describe('expect().toBeInstanceOf', () => {
  test('it expected to be instance of', async () => {
    class User {}
    class Account {}
    expect(new User()).toBeInstanceOf(User);
    expect(new Account()).not.toBeInstanceOf(User);
  });
});
