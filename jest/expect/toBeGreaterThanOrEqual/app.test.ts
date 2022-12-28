describe('expect().toBeGreaterThanOrEqual', () => {
  test('it expected to be greater than or equal', async () => {
    expect(10).toBeGreaterThanOrEqual(7);
    expect(10).toBeGreaterThanOrEqual(8);
    expect(10).toBeGreaterThanOrEqual(9);
    expect(10).toBeGreaterThanOrEqual(10);
    expect(10).not.toBeGreaterThanOrEqual(11);
  });
});
