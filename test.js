require('./index.js').MongoDB;

/* 调用示例 */
async function test() {
	var body;
	body = $.ret.error(10000, '错误');
	console.log($.toJson(body));
	
	body = $.ret.body("这是一个结果");
	console.log($.toJson(body));
	
	body = $.ret.obj({ "name": "张三",  age: 18});
	console.log($.toJson(body));
	
	body = $.ret.list([{ "name": "张三",  age: 18}, { "name": "李四",  age: 24}]);
	console.log($.toJson(body));
	
	body = $.ret.bl(true, "修改成功");
	console.log($.toJson(body));
}

test();