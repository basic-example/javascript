describe('expect().toBeNull', () => {
  test('it expected to be null', async () => {
    expect(null).toBeNull();
    expect(10).not.toBeNull();
  });
});
