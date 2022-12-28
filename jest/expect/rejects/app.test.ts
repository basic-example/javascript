describe('expect().rejects', () => {
  test('it expected Promise.rejects value', async () => {
    expect(Promise.reject(new Error('error_message'))).rejects.toThrow('error_message');
  });
});
