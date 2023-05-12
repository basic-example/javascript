import axios from 'axios';

describe('axios', () => {
  test('axios.interceptors.request.use', async () => {
    const mockFn = jest.fn();
    axios.interceptors.request.use((config) => {
      mockFn();
      config.method = 'get';
      return config;
    });
    await axios
      .post('https://jsonplaceholder.typicode.com/todos/1')
      .then((todo) => {
        mockFn();
        expect(todo).toBeTruthy();
      });
    expect(mockFn).toBeCalledTimes(2);
  });
});
