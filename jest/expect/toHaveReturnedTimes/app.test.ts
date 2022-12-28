describe('expect().toHaveReturnedTimes', () => {
  test('it expected to have returned x times', async () => {
    const mock1 = jest.fn(() => undefined);
    const mock2 = jest.fn(() => null);
    const mock3 = jest.fn(() => false);
    const mock4 = jest.fn(() => true);
    const mock5 = jest.fn(() => {});
    const mock6 = jest.fn(() => {
      throw new Error('something was wrong');
    });
    const mock7 = jest.fn(() => {}); // 'not called'

    mock1();
    mock2();
    mock3();
    mock4();
    mock5();
    mock5(); // twice
    try {
      mock6();
    } catch (error) {}

    expect(mock1).toHaveReturnedTimes(1);
    expect(mock2).toHaveReturnedTimes(1);
    expect(mock3).toHaveReturnedTimes(1);
    expect(mock4).toHaveReturnedTimes(1);
    expect(mock5).toHaveReturnedTimes(2);
    expect(mock6).toHaveReturnedTimes(0);
    expect(mock7).toHaveReturnedTimes(0);
  });
});
