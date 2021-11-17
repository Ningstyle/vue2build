/**
 * http配置
 * axios参数说明
 */
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

axios.defaults.timeout = 10000;
//返回其他状态吗
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500; // 默认的
};
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;
NProgress.configure({
  showSpinner: false
});
//HTTPrequest拦截
axios.interceptors.request.use(config => {
  NProgress.start();
  const meta = (config.meta || {});
  const isToken = meta.isToken === false;
  //headers中配置serialize为true开启序列化
  return config
}, error => {
  return Promise.reject(error)
});
//HTTPresponse拦截
axios.interceptors.response.use(res => {
  NProgress.done();
  const status = res.data.code || 200;
  const message = res.data.msg || '未知错误';
  if (status !== 200) {
    return Promise.reject(new Error(message))
  }
  return res;
}, error => {
  NProgress.done();
  return Promise.reject(new Error(error));
});

export default axios;
