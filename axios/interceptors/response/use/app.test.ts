import axios from 'axios';

describe('axios', () => {
  test('axios.interceptors.request.use', async () => {
    const mockFn = jest.fn();
    axios.interceptors.response.use((res) => {
      mockFn();
      res.data = {
        a: 'aaa',
      };
      return res;
    });
    await axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => {
        mockFn();
        expect(res.data).toEqual({ a: 'aaa' });
      });
    expect(mockFn).toBeCalledTimes(2);
  });
});
