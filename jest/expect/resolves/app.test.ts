describe('expect().resolve', () => {
  test('it expected Promise.resolve value', async () => {
    expect(Promise.resolve('hello world')).resolves.toBe('hello world');
  });
});
