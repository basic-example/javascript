import axios from 'axios';

describe('axios', () => {
  test('axios.create', async () => {
    const mockFn = jest.fn();
    await axios
      .create()
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((todo) => {
        mockFn();
        expect(todo).toBeTruthy();
      });
    expect(mockFn).toBeCalledTimes(1);
  });
});
