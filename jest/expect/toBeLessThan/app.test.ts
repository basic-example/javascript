describe('expect().toBeLessThan', () => {
  test('it expected to be less than', async () => {
    expect(10).toBeLessThan(11);
    expect(10).not.toBeLessThan(10);
    expect(10).not.toBeLessThan(9);
  });
});
