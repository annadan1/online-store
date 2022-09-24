const baseUrl = 'https://632772379a053ff9aaa59e63.mockapi.io';

export default {
  getGoodsPath: (path) => [baseUrl, path].join('/'),
};
