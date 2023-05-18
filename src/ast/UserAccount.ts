// @ts-ignore
/* eslint-disable */
import request from '@/request';

/** 登录 - 帐密登录 POST /api/v1/user/account/login.json */
export async function accountLogin(body: API.AccountLoginReq, options?: { [key: string]: any }) {
  return request<API.ApiResTokenDTO>('/api/v1/user/account/login.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 登录 - 帐密登录是否需验证码验证 POST /api/v1/user/account/loginIsNeedCaptcha.json */
export async function loginIsNeedCaptcha(
  body: API.LoginIsNeedCaptchaReq,
  options?: { [key: string]: any },
) {
  return request<API.ApiResboolean>('/api/v1/user/account/loginIsNeedCaptcha.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注册 - 帐密方式 图片验证码验证方式二选一：ID + token || ID + 验证码 POST /api/v1/user/account/register.json */
export async function accountRegister(
  body: API.AccountRegisterReq,
  options?: { [key: string]: any },
) {
  return request<API.ApiResTokenDTO>('/api/v1/user/account/register.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改密码 - 原密码方式 POST /api/v1/user/edit/pwd.json */
export async function editPassword(body: API.EditPasswordReq, options?: { [key: string]: any }) {
  return request<API.ApiResTokenDTO>('/api/v1/user/edit/pwd.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 忘记密码 - 手机号方式 POST /api/v1/user/forgot/pwd/sms.json */
export async function forgotPassword(body: API.ApiReq, options?: { [key: string]: any }) {
  return request<API.ApiResTokenDTO>('/api/v1/user/forgot/pwd/sms.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
