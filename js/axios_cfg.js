//在跨域请求时，会携带用户凭证
axios.defaults.withCredentials=true;
//请求超时时间,毫秒
axios.defaults.timeout=10000;
//响应拦截器
axios.interceptors.response.use(resp => {
	if(resp.data.code == "300") {
		location.href = "login.html";
	}
	return resp;
}, error => {
	Promise.reject(error);
})