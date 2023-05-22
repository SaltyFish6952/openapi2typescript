declare namespace API {
  type AccountLoginReq = {
    /** 验证码 */
    captcha?: TokenDTO;
    /** 验证码ID */
    captchaId?: number;
    /** 验证令牌 */
    captchaToken?: CaptchaTokenVO;
    /** 密码(客户端使用 “墙]・▽・)ノ 嗨,美女+密码” 的MD5值提交，32位小写) */
    password: string;
    /** 用户名 */
    username: AccountRegisterReq;
  };

  type AccountRegisterReq = {
    /** 验证码 */
    captcha?: string;
    /** 验证码ID */
    captchaId: number;
    /** 验证令牌 */
    captchaToken?: string;
    /** 密码(输入的密码，需要检测密码是否合法) */
    password: string;
    /** 用户名 */
    username: string;
  };

  type ApiReq = true;

  type ApiResboolean = {
    /** 状态码；大于零为处理成功的不同状态，小于零的状态则视为失败的情况 */
    code: number;
    /** 相应数据 */
    data?: boolean;
    /** 提示消息 */
    msg: ApiReq;
    /** 消息提示方式 */
    showType:
      | 'DIALOG'
      | 'ERROR'
      | 'NOTIFICATION'
      | 'PAGE'
      | 'SLIENT'
      | 'SUCCESS'
      | 'UNUSED_6'
      | 'UNUSED_7'
      | 'UNUSED_8'
      | 'WARN';
  };

  type ApiResCaptchaTokenVO = {
    /** 状态码；大于零为处理成功的不同状态，小于零的状态则视为失败的情况 */
    code: number;
    /** 相应数据 */
    data?: CaptchaTokenVO;
    /** 提示消息 */
    msg: string;
    /** 消息提示方式 */
    showType:
      | 'DIALOG'
      | 'ERROR'
      | 'NOTIFICATION'
      | 'PAGE'
      | 'SLIENT'
      | 'SUCCESS'
      | 'UNUSED_6'
      | 'UNUSED_7'
      | 'UNUSED_8'
      | 'WARN';
  };

  type ApiResImgCaptchaDTO = {
    /** 状态码；大于零为处理成功的不同状态，小于零的状态则视为失败的情况 */
    code: number;
    /** 相应数据 */
    data?: ImgCaptchaDTO;
    /** 提示消息 */
    msg: CheckImgCaptchaReq;
    /** 消息提示方式 */
    showType:
      | 'DIALOG'
      | 'ERROR'
      | 'NOTIFICATION'
      | 'PAGE'
      | 'SLIENT'
      | 'SUCCESS'
      | 'UNUSED_6'
      | 'UNUSED_7'
      | 'UNUSED_8'
      | 'WARN';
  };

  type ApiResTokenDTO = {
    /** 状态码；大于零为处理成功的不同状态，小于零的状态则视为失败的情况 */
    code: number;
    /** 相应数据 */
    data?: TokenDTO;
    /** 提示消息 */
    msg: string;
    /** 消息提示方式 */
    showType:
      | 'DIALOG'
      | 'ERROR'
      | 'NOTIFICATION'
      | 'PAGE'
      | 'SLIENT'
      | 'SUCCESS'
      | 'UNUSED_6'
      | 'UNUSED_7'
      | 'UNUSED_8'
      | 'WARN';
  };

  type CaptchaTokenVO = {
    /** 验证令牌 */
    token: string;
  };

  type CheckImgCaptchaReq = {
    /** 验证码 */
    captcha: string;
    /** 验证码ID */
    id: number;
    /** 验证码类型，1->注册，2->登录，3->忘记密码，4->修改密码 */
    type: 'EDIT_PASSWORD' | 'FORGOT_PASSWORD' | 'LOGIN' | 'REGISTER';
  };

  type EditPasswordReq = {
    /** 新密码 */
    newPassword: string;
    /** 当前的密码 */
    password: string;
    /** 用户通行令牌 */
    token: string;
    /** 用户ID */
    uid: number;
  };

  type ImgCaptchaDTO = {
    /** 验证码ID */
    id: number;
    /** 图片验证码URL */
    url: string;
  };

  type ImgCaptchaReq = {
    /** 验证码类型 */
    type: 'EDIT_PASSWORD' | 'FORGOT_PASSWORD' | 'LOGIN' | 'REGISTER';
  };

  type LoginIsNeedCaptchaReq = {
    /** 用户名 */
    username: string;
  };

  type TokenDTO = {
    /** 通行令牌 */
    accessToken: string;
    /** 刷新令牌 */
    refreshToken: string;
    /** 用户ID */
    userId: number;
  };
}
