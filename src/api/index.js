import request from '@/request/axios'
var ENV =process.env.NODE_ENV
var Tenv;
// ENV=='development'?Tenv='/api':Tenv='http://new.kuailcd.com',
ENV=='development'?Tenv='/api':Tenv='http://localhost:3008'
// 管理员登录
export const adminLogin = (account,password) => {
  return request({
    url: Tenv+'/data/adminLogin',
    method: 'post',
    data: {
    	account:account,
    	password:password,
    }
  })
}
// 获取价格配置
export const getCostSeting = (typeId) => {
  return request({
    url: Tenv+'/cost/getCostSeting',
    method: 'get',
    params: {
    	typeId:typeId,
    }
  })
}
// 重新设置价格
export const updateCostSeting = (data) => {
  return request({
    url: Tenv+'/cost/updateCostSeting',
    method: 'post',
    data: data
  })
}
// 广告列表获取
export const getAdlist = (Current,PageCount,condition,value) => {
  return request({
    url: Tenv+'/releAse/getAdlist',
    method: 'get',
    params: {
    	Current:Current,
    	PageCount:PageCount,
    	condition:condition,
    	value:value
    }
  })
}
// 删除广告
export const delAddata = (adid) => {
  return request({
    url: Tenv+'/releAse/delAd',
    method: 'post',
    data: {
			adid:adid
		}
  })
}
// 获取用户列表
export const getuserlist = (Current,PageCount,userid,phone,disable) => {
  return request({
    url: Tenv+'/data/getUserlist',
    method: 'get',
    params: {
    	Current:Current,
    	PageCount:PageCount,
			userid:userid,
			phone:phone,
			disable:disable
    }
  })
}
//启/禁用 用户账号
export const disabledUser = (userid,type) => {
  return request({
    url: Tenv+'/data/disabledUser',
    method: 'post',
    data: {
			userid:userid,
			type:type
		}
  })
}
//用户账号删除
export const deluserdata = (userid) => {
  return request({
    url: Tenv+'/data/deluser',
    method: 'post',
    data: {
			userid:userid
		}
  })
}
// 获取订单列表/详情
export const getOrderlist = (Current,PageCount,orderID,orderType,callType,userPhone,driverPhone,orderState) => {
  return request({
    url: Tenv+'/order/getOrderlist',
    method: 'get',
    params: {
    	Current:Current,
    	PageCount:PageCount,
			orderID:orderID,
			orderType:orderType,
			callType:callType,
			userPhone:userPhone,
			driverPhone:driverPhone,
			orderState:orderState
    }
  })
}
//订单删除
export const delorders = (orderID) => {
  return request({
    url: Tenv+'/order/delorders',
    method: 'post',
    data: {
			orderID:orderID
		}
  })
}
// 获取司机信息列表
export const getdirverlist = (Current,PageCount,driverId,dphone,disable,isauthentication) => {
  return request({
    url: Tenv+'/drivers/getDirverlist',
    method: 'get',
    params: {
    	Current:Current,
    	PageCount:PageCount,
			driverId:driverId,
			dphone:dphone,
			disable:disable,
			isauthentication:isauthentication
    }
  })
}
// 司机身份审核操作
export const examineDirver = (driverId,isauthentication,errorText) => {
  return request({
    url: Tenv+'/drivers/examineDirver',
    method: 'post',
    data: {
			driverId:driverId,
			isauthentication:isauthentication,
			errorText:errorText
		}
  })
}
//启/禁用 司机账号
export const disabledDirver = (driverId,type) => {
  return request({
    url: Tenv+'/drivers/disabledDirver',
    method: 'post',
    data: {
			driverId:driverId,
			type:type
		}
  })
}