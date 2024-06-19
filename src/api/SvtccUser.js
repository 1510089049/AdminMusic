import requests from "@/utils/request";
import store from "@/store";
import {admin} from "@/router/role";

export const getUserInfo = (data) => {
    const requestData = {
        username: data.username,
        password: data.password,
    };
    // 发送登录请求并返回 Promise 对象
    return requests.post('/login', requestData)
        .then(response => {
            console.log("登录响应数据:", response);
            store.commit('setUserInfo', response.data);
            console.log("将登录返回值保存如下"+store.state.userInfo)
            return response.data; // 返回响应数据
        })
        .catch(error => {
            console.error("登录请求出错:", error);
            throw error; // 抛出错误，交由上层处理
        });
};

export const register = (data) => {
    const requestData = {
        username: data.username,
        password: data.password,
        accountNonLocked: true,
        enabled: true,
        nickname: data.nickname,
        avatar: data.avatar
    };
    // 发送登录请求并返回 Promise 对象
    return requests.post('/admin/user', requestData)
        .then(response => {
            console.log("登录响应数据:", response.data);
            store.commit('setUserInfo', response.data);
            return response.data; // 返回响应数据
        })
        .catch(error => {
            console.error("登录请求出错:", error);
            throw error; // 抛出错误，交由上层处理
        });
};

export const uploadFile = (resourceType, file) => {
    const formData = new FormData();
    formData.append('file', file);

    return requests.post(`/resource/${resourceType}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(response => {
            console.log("上传响应数据:", response.data);
            return response.data; // 返回响应数据
        })
        .catch(error => {
            console.error("上传请求出错:", error);
            throw error; // 抛出错误，交由上层处理
        });
};

export const Ping = () => {
    // null,{
    //     Authorization: 'Bearer ' + store.state.userInfo.data
    // }
    console.log("PING 运行中:"+"Authorization: 'Bearer ' " + store.state.userStatus.data)
    // 发送登录请求并返回 Promise 对象
    return requests.get('/ping')
        .then(response => {
            store.commit('setUserStatus', response.data);
            console.log(store.state.userStatus);
            return response.data; // 返回响应数据
        })
        .catch(error => {
            console.error("登录请求出错:", error);
            throw error; // 抛出错误，交由上层处理
        });
};
