// 测试服
const devUrl = 'http://web.5ytech.com:9000'
// 正式服
const proUrl = 'https://szkjwl.com.cn'
// 环境变量
const isDev = process.env.NODE_ENV == 'development'
const baseUrl = isDev ? devUrl : proUrl
// const baseUrl = proUrl
// 测试
// const baseUrl = proUrl
export default {
  // 环境变量
  app_isDev: isDev,
  // 请求地址头
  app_baseUrl: baseUrl,
  // http请求错误提示信息
  app_msg: {
    401: {
      redirect: '/pages/login/login',
      msg: '权限不足，请重新登录'
    },
    500: {
      msg: '服务器异常，请稍后再试'
    },
    404: {
      msg: '请求异常，请稍后再试'
    }
  },
}