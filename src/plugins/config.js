// 测试域名
const testDomin = 'http://192.168.100.6:8080'
// 正式域名
const formalDomain = 'http://192.168.100.6:8080'
// 环境变量
const env = process.env.NODE_ENV
const origin = env === 'development' ? testDomin : formalDomain
 
// config
const config = {
  // 版本号
  version: '0.1.1',
  // 域名
  domain: origin,
 
}

 
export {
  config
}