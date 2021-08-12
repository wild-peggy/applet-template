import request from '../utils/request';

// 分类查询
export const classifySearch = params =>
  request({
    url: 'http://yqhy.ly-yun.com:10133/txapi/lajifenlei/index',
    params,
    method: 'GET',
    options: {
      showLoading: true
    }
  });

// 获取付款码
export const getPayMoneyCode = params =>
  request({
    url: '/api-portal/scanpay/r',
    params,
    method: 'POST',
    options: {
      showLoading: true
    }
  });

// 获取投递码
export const getDeliveryCode = params =>
  request({
    url: '/api-portal/homepage/r/ewmjf',
    params,
    method: 'POST',
    options: {
      showLoading: true
    }
  });
