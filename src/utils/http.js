'use strict'

// 需要改动的地方：
// 1.引进样式组件toast来使用,提示那里的alert改成相应的样式空间名字
// 2.res.data.msg的字段名称得改成后台定义的错误信息字段
// 3.请求的baseURL

import axios from 'axios'
import qs from 'qs'
import {Toast,Loading} from 'vue-ydui/dist/lib.rem/dialog' //1.这里引入ydui的toast组件，引入才能在这里用


axios.defaults.baseURL = process.env.BASE_API; //3.设置默认
axios.defaults.timeout = 5000;
axios.interceptors.request.use(config => {
  // loading
  Loading.open('数据处理中');
  //设置定时器关闭loading动画
  setTimeout(() => {
                    Loading.close();
                }, 1000);
  // 判断是否有tokenId，有的话封装到请求头部
  if (localStorage.tokenId) {
      config.headers.Authorization = localStorage.tokenId;
    }

  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  // Loading.close() //关闭加载动画
  return response
}, error => {
  // Loading.close() //关闭加载动画
  return Promise.resolve(error.response)
})

function checkStatus (response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户

  // 由于打包后请求不到本地json数据，不想使用demo时一直提示网络异常，所以先注释
  // if (res.status === -404) {
  //   // alert(res.msg)
  //   Toast({
  //     mes: res.msg,
  //     timeout: 1500})
  //
  //
  // }

// 下面这个判断要根据数据格式有没有res.data.success(可以输出到控制台查看)，没有的话!res.data.success被判断为真
//因为现在使用的接口就没有这个，所以暂时注释掉。根据具体情况使用即可
  // if (res.data && !res.data.success) {
  //   console.log("测试，为何会进入这个方法");
  //   // alert(res.data.error_msg)
  //   //这里要看后端返回的字段是什么，比如时代+的是msg,所以改成了msg
  //   Toast({//用ydui的toast组件
  //     mes: res.data.msg,//2.这里要根据后台返回的信息字段名称是什么来写，时代+是msg所以这里写msg
  //     timeout: 1500})
  // }



  return res
}



export default {
  post (url, data) {
    return axios({
      method: 'post',
      // baseURL: 'https://www.sojson.com',//3.请求的baseURL
      url,
      data: qs.stringify(data),
      // timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  get (url, params) {
    return axios({
      method: 'get',
      // baseURL: 'https://www.sojson.com',
      url,
      params, // get 请求时带的参数
      // timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  }
}
