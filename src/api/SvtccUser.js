import requests from "@/utils/request";
import store from "@/store";

export const getUserInfo = (data) => {
    const requestData = {
        username: data.username,
        password: data.password
    };
    // 发送登录请求并返回 Promise 对象
    return requests.post('/login', requestData)
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
