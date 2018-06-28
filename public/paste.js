


function upload(){

	console.log('in upload')

	var content = $("#content").val();

	console.log(content)


	var jqxhr = $.post('pasterest/api/paste', {
    	content: content,
    	addSchoolInfo:"true"
	}).done(function (data) {
    	// data已经被解析为JSON对象了
    	console.log(data)
	}).fail(function (xhr, status) {
    ajaxLog('失败: ' + xhr.status + ', 原因: ' + status);
	}).always(function () {
    ajaxLog('请求完成: 无论成功或失败都会调用');
	});

}


function ajaxLog(s) {
    console.log(s)
}
