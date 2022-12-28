describe('expect().toBeDefined', () => {
  test('it expected to be defined', async () => {
    expect(true).toBeDefined();
    expect(1).toBeDefined();
    expect(undefined).not.toBeDefined();
  });
});
