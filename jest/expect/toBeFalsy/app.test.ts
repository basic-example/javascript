describe('expect().toBeFalsy', () => {
  test('it expected to be falsy', async () => {
    expect(undefined).toBeFalsy();
    expect(null).toBeFalsy();
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect(true).not.toBeFalsy();
    expect(1).not.toBeFalsy();
  });
});
