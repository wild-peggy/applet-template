import request from '../utils/request';

// 获取用户信息
export const getUserInfo = () =>
  request({
    url: '/api-portal/managemineinfo/account/r',
    method: 'POST',
    options: {
      showLoading: true
    }
  });

// 获取用户地址
export const getUserAddress = (params) =>
  request({
    url: '/api-portal/homepage/r/yhdz',
    params,
    method: 'POST',
    options: {
      showLoading: true
    }
  });
