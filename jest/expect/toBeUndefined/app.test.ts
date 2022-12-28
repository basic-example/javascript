describe('expect().toBeUndefined', () => {
  test('it expected to be undefined', async () => {
    expect(undefined).toBeUndefined();
    expect(NaN).not.toBeUndefined();
    expect(null).not.toBeUndefined();
    expect(false).not.toBeUndefined();
    expect(10).not.toBeUndefined();
  });
});
