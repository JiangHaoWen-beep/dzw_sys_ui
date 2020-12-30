//跨域设置
jQuery.ajaxSetup({
	cache: false,
	timeout: 6000,
	xhrFields: {
		withCredentials: true
	},
	crossDomain: true
});

//全局异常处理
jQuery(document).ajaxError(function(ex) {
	console.log(ex);
	alert("服务器正忙....");
});