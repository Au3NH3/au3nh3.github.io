
var content=document.getElementById("content");
var home="<p>欢迎访问！</p>";
var log=
	'<form>\
		<div class="form">\
			<span>用户名:</span><input type="text" name="uname" value=""><br><br>\
			<span>密	 码:</span> <input type="password" name="pwd" value=""><br><br>'+
	//<input type="submit" value="提交" onclick="change2(content,fail+siteInfo)">&nbsp;&nbsp;
		'<a href="javascript:void(0);" onclick="change2(content,fail+siteInfo)">提交</a>&nbsp;&nbsp;&nbsp;&nbsp;\
		<input type="reset" value="重置">&nbsp;&nbsp;&nbsp;&nbsp;\
		</div>\
	</form>';
var perState="<p>教育经历</p>\
				<li>2013.9——2017.6 中国科学技术大学 物理学院</li>\
				<li>2017.9——2020.6 中国科学技术大学 科学岛分院 (中国科学院等离子体物理研究所)</li>\
			<p>兴趣爱好</p>\
				<li>熟悉HTML+CSS+JavaScript, Python, C等编程语言，熟悉Linu操作系统</li>";
// var siteInfo=
	// '<p>此网站为中国科学技术大学提供的个人主页功能，毕业半年后自动取消。</p>\
	// <p>出于安全考虑，个人主页不支持PHP/JSP/ASP等服务器端程序。</p>\
	// <p>欢迎访问<a href="http://au3nh3.github.io/" target="_blank"> github主页 </a>\
	// 或 <a href="http://dwz.win/jmp" target="_blank">http://dwz.win/jmp</a></p>';
var siteInfo='<p>......</p><p>waiting for revision</p>\
			<p>欢迎访问<a href="//home.ustc.edu.cn/~axn">home.ustc.edu.cn/~axn</a></p>\
			或 <a href="http://dwz.win/jmp" target="_blank">http://dwz.win/jmp</a></p>';
		
var link='<p style="min-width=640px">\
			<span><a href="//www.baidu.com" target="_blank">百度</a></span>\
			<span><a href="//www.ustc.edu.cn" target="_blank">中国科大</a></span>\
			<span><a href="//mail.cstnet.cn" target="_blank">中科院邮箱</a></span>\
			<span><a href="//www.hfcas.ac.cn" target="_blank">合肥研究院</a></span>\
			</p>';
			//<span><a href="//www.hfcas.ac.cn" target="_blank">等离子所</a></span>\
		
var fail="<p>提交失败,暂不支持^_^</p>";
// var fail="<p>提交失败</p>";
function change2(id,str){
	id.innerHTML=str;
}


// function asd(){

	// var xmlhttp;
	// if (window.XMLHttpRequest)
	// {
		 // // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		// xmlhttp=new XMLHttpRequest();
		// // alert("sadf");
	// }
	// else
	// {
		// alert("error02");
		// // // IE6, IE5 浏览器执行代码
		// // xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	// }


	// xmlhttp.onreadystatechange=function()
	// {
		// if (xmlhttp.readyState==4 && xmlhttp.status==200)
		// {
			// document.getElementById("content").innerHTML=xmlhttp.responseText;
			
		// }
	// }
	// // xmlhttp.open("GET","/cgi-bin/b.py",true);
	// xmlhttp.open("GET","/tes.txt",true);
	// xmlhttp.send();
// }



function setDate(){
	var d=new Date();
	var y=d.getFullYear();
	var m=d.getMonth()+1;
	var date=d.getDate();
	document.getElementById("time").innerHTML =y+"年"+m+"月"+date+"日";
}	


function test(){
	// console.log(typeof navigator);

	var w=window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	var h=window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	var str=
		"<p>platform: "+navigator.platform+"</p>" +
		"<p>userAgent: "+navigator.userAgent+"</p>" +
		"<p>屏幕分辨率: "+screen.width+" * "+screen.height+"</p>"+
		"<p>Screen.available: "+screen.availWidth+" * "+screen.availHeight+"</p>"+
		"<p>浏览器尺寸: "+w+" * "+h+"</p>"+
		"<p>Languages: "+navigator.languages+"</p>"+
		"<p>vendor: "+navigator.vendor+"</p>";

	// for(var pro in navigator){
	//	 str+="<p>"+pro+":"+navigator[pro]+"</p>";
	// }			
	change2(content,str);
}
