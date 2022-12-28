describe('expect().toBeTruthy', () => {
  test('it expected to be truthy', async () => {
    expect(undefined).not.toBeTruthy();
    expect(null).not.toBeTruthy();
    expect(false).not.toBeTruthy();
    expect(0).not.toBeTruthy();
    expect(true).toBeTruthy();
    expect(1).toBeTruthy();
  });
});
