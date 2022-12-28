describe('expect().toContainEqual', () => {
  test('it expected to be containEqual', async () => {
    const obj = { a: 'aaa', b: 'bbb' };
    expect([1, 2, obj]).toContainEqual(1);
    expect([1, 2, obj]).toContainEqual(2);
    expect([1, 2, obj]).toContainEqual(obj);
    expect([1, 2, obj]).toContainEqual({ a: 'aaa', b: 'bbb' });
    expect([1, 2, obj]).not.toContainEqual(0);
    expect([1, 2, obj]).not.toContainEqual(3);
  });
});
