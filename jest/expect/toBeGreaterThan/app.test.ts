describe('expect().toBeGreaterThan', () => {
  test('it expected to be greater than', async () => {
    expect(10).toBeGreaterThan(7);
    expect(10).toBeGreaterThan(8);
    expect(10).toBeGreaterThan(9);
    expect(10).not.toBeGreaterThan(10);
  });
});
