describe('expect().toContain', () => {
  test('it expected to be contain', async () => {
    const obj = { a: 'aaa', b: 'bbb' };
    expect([1, 2, obj]).toContain(1);
    expect([1, 2, obj]).toContain(2);
    expect([1, 2, obj]).toContain(obj);
    expect([1, 2, obj]).not.toContain({ a: 'aaa', b: 'bbb' });
    expect([1, 2, obj]).not.toContain(0);
    expect([1, 2, obj]).not.toContain(3);
  });
});
