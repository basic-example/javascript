describe('expect().toHaveProperty', () => {
  test('it expected to have property', async () => {
    const obj = {
      x: 'xxx',
      y: {
        a: 'aaa',
        b: 'bbb',
      },
    };
    expect(obj).toHaveProperty('x');
    expect(obj).toHaveProperty('y');
    expect(obj).not.toHaveProperty('z');
    expect(obj).toHaveProperty('y.a');
    expect(obj).toHaveProperty('y.b');
    expect(obj).toHaveProperty('y.a', 'aaa');
    expect(obj).toHaveProperty('y.b', 'bbb');
    expect(obj).not.toHaveProperty('y.b', 'bbbb');
  });
});
