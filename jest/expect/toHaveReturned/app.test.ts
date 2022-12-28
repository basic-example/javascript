describe('expect().toHaveReturned', () => {
  test('it expected to have returned', async () => {
    const mock1 = jest.fn(() => undefined)
    const mock2 = jest.fn(() => null)
    const mock3 = jest.fn(() => false)
    const mock4 = jest.fn(() => true)
    const mock5 = jest.fn(() => {})
    const mock6 = jest.fn(() => {
      throw new Error("something was wrong");
    })
    const mock7 = jest.fn(() => {}) // 'not called'

    mock1()
    mock2()
    mock3()
    mock4()
    mock5()
    mock5() // twice
    try { mock6() } catch (error) {}

    expect(mock1).toHaveReturned();
    expect(mock2).toHaveReturned();
    expect(mock3).toHaveReturned();
    expect(mock4).toHaveReturned();
    expect(mock5).toHaveReturned();
    expect(mock6).not.toHaveReturned();
    expect(mock7).not.toHaveReturned();
  });
});
