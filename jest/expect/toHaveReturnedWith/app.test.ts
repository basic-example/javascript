describe('expect().toHaveReturnedWith', () => {
  test('it expected to have returned with', async () => {
    const mock1 = jest.fn(() => '1');
    const mock2 = jest.fn(() => {
      throw new Error('something was wrong');
    });
    const mock3 = jest.fn(() => {}); // 'not called'

    mock1();
    try {
      mock2();
    } catch (error) {}

    expect(mock1).toHaveReturnedWith('1');
    expect(mock1).toHaveReturnedWith(expect.any(String));
    expect(mock1).not.toHaveReturnedWith(1);
    expect(mock1).not.toHaveReturnedWith(expect.any(Number));
    expect(mock2).not.toHaveReturnedWith(expect.anything());
    expect(mock3).not.toHaveReturnedWith(expect.anything());
  });
});
