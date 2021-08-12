import request from '../utils/request';

const VUE_APP_THIRD_API = process.env.VUE_APP_THIRD_API;

// 通过uni.login的code 获取sessionkey及openId
export const getSessionKey = params =>
  request({
    url: `${VUE_APP_THIRD_API}/api-third/app/free-secret-auth/getwxopenid`,
    params,
    method: 'POST',
    options: {
      showLoading: true
    }
  });

// 通过sessionKey&&iv&&encryptedData获取手机号
export const wxPhone = params =>
  request({
    url: `${VUE_APP_THIRD_API}/api-third/app/free-secret-auth/getwxphone`,
    params,
    method: 'POST',
    options: {
      showLoading: true
    }
  });

// 获取验证码
export const getVerificationCode = params =>
  request({
    url: '/api-portal/app/sendmsg/yzm',
    params,
    method: 'POST',
    options: {
      showLoading: true
    }
  });

// 登录
export const loginIn = params =>
  request({
    url: '/api-ca/app/consumer/login',
    params,
    method: 'POST',
    options: {
      showLoading: true
    }
  });
