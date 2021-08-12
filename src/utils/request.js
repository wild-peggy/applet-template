// 业务api前缀
const BASE_API_URL = process.env.VUE_APP_BASE_API;

// 对可能会调用外部api进行处理
const getUrl = url => {
  let newUrl = url;
  if (newUrl.indexOf('://') === -1) {
    newUrl = BASE_API_URL + newUrl;
  }
  return newUrl;
};

// 可能需要加入token至请求头中
const getHeader = () => {
  try {
    const header = {};
    const token = uni.getStorageSync('token');
    if (token) header['lyzhtoken'] = token;
    return header;
  } catch {
    return {};
  }
};

/**
 * 业务请求
 * @param url: 请求地址
 * @param params: 业务请求的参数
 * @param options: 配置项
 * @param method: 请求方式
 */
const request = ({ url, params = {}, method, options = {} }) => {
  if (options.showLoading) {
    uni.showLoading({
      title: '加载中'
    });
  }
  return new Promise((resolve, reject) => {
    uni.request({
      url: getUrl(url),
      data: params,
      method,
      header: getHeader(),
      success: res => {
        if (options.showLoading) uni.hideLoading();
        if (res.data.code == '000000') {
          resolve(res.data);
        } else if (res.data.code == '200') {
          resolve(res.data);
        } else if (res.data.code == '250') {
          resolve(res.data);
        } else {
          uni.showToast({
            title: `操作失败-${res.data.message}`,
            icon: 'none'
          });
          resolve(false);
        }
      },
      fail: () => {
        if (options.showLoading) uni.hideLoading();
        uni.showToast({
          title: '服务器连接异常，请稍后再试',
          icon: 'none'
        });
        return;
      }
    });
  });
};

export default request;
