// JavaScript Document
//table单击行变色
function SelectTR(tr){  
	var tds=tr.childNodes;  
	for(var j=0; j<tds.length;j++)  
	{  
		var inputs=tds[j].childNodes;  
		for (var i=0; i < inputs.length; i++) // 遍历页面上所有的 input  
		{  
			if (inputs[i].type == "checkbox")  
			{  
			   inputs[i].checked = !inputs[i].checked;  
			   tr.style.backgroundColor = inputs[i].checked ? "#ffff00" : "";  
			}  
		}  
	}  
} 
//复选框全选
function select1(){
	var sel = document.getElementsByName("sel")[0];
	var che = document.getElementsByName("check");
	if(sel.checked){
		for(var i = 0; i<che.length; i++){
			che[i].checked = true;
		}
	}
	else{
		for(var i = 0; i<che.length; i++){
			che[i].checked = false;
		}
	}
}
function select2(){
	var sel = document.getElementsByName("sel1")[0];
	var che = document.getElementsByName("check1");
	if(sel.checked){
		for(var i = 0; i<che.length; i++){
			che[i].checked = true;
		}
	}
	else{
		for(var i = 0; i<che.length; i++){
			che[i].checked = false;
		}
	}
}
/*当前日期*/
function today(){
	var today=new Date();
	var y=today.getFullYear();
	var m=today.getMonth()+1;
	var d=today.getDate();
	return y+'-'+m+'-'+d;
}
document.getElementById("J-xl").value=today();
document.getElementById("J-x2").value=today();
document.getElementById("J-x3").value=today();
document.getElementById("J-x4").value=today();
document.getElementById("J-x5").value=today();
document.getElementById("J-x6").value=today();
document.getElementById("J-x7").value=today();
document.getElementById("J-x8").value=today();
document.getElementById("J-x9").value=today();
document.getElementById("J-x10").value=today();
document.getElementById("J-x11").value=today();
document.getElementById("J-x12").value=today();
document.getElementById("J-x13").value=today();


	$(function(){ 
		/*新增行*/
		$("#newBtn").bind("click",function(){
			$("#myTable").append("<tr><td><input id=\"sd\" type=\"checkbox\" /></td><td><input type=\"text\" value='123'/></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td><td><input type=\"text\" /></td></tr>");
			/*点击变色*/
			$("#myTable tr").first().nextAll().click(function(){
				$(this).children().toggleClass("bgcolor");
				if($(this).children().css("background-color") != $(document.body).css("background-color")){
					$(this).children().first().children().prop("checked", true);
					event.stopPropagation();
				}else {
					$(this).children().first().children().prop("checked", false);
					event.stopPropagation();
				}
			});
		});
		/*删除行*/
		$("#delBtn").bind("click",function(){
			if($("#myTable tr:eq(0) input:checked").length>0){
				alert("不能删除表头");
			}else if($("#myTable input:checked").length>0){
				$("#myTable input:checked").parent().parent().remove();
			}else{
				alert("请选择需要删除的行");
			}
		});
	}); 




