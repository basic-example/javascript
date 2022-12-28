describe('expect().toHaveLength', () => {
  test('it expected to have N length', async () => {
    expect([1, 2]).toHaveLength(2);
    expect([1, 2, 3]).toHaveLength(3);
    expect([1, 2, 3]).not.toHaveLength(4);
  });
});
