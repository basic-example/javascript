describe('expect().toBeNaN', () => {
  test('it expected to be NaN', async () => {
    expect(NaN).toBeNaN();
    expect(10).not.toBeNaN();
  });
});
