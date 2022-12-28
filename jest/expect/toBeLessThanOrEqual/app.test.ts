describe('expect().toBeLessThanOrEqual', () => {
  test('it expected to be less than or equal', async () => {
    expect(10).toBeLessThanOrEqual(11);
    expect(10).toBeLessThanOrEqual(10);
    expect(10).not.toBeLessThanOrEqual(9);
  });
});
