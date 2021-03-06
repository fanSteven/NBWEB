﻿$(function () {
    $("#btn_register").bind("click",function(){
		var name=$("#user_name").val();
		var email=$("#user_email").val();
		var password=$("#Pasword").val();
		
		if(email.trim()==""||password.trim()==""){
			alert("填写必要信息");
			return;
		}
        var dataSource = new kendo.data.DataSource({
            transport:{
                create:{
                    url : "http://localhost:8080/NBServer/service/users",
                    type : "POST",
                    contentType : "application/json; charset=UTF-8",
                    dataType : "json",
                    data : {
						"name":name,
                        "email":email,
                        "password":password
                    },
                    success:function(result){
                        if(result.id == "1"){
                            alert("请到注册邮箱中激活");
                            to_activity();
                        }
                        else{
                            alert(result.log);
                        }
                    }
                },
                parameterMap : function(options, operation) {
                    if (operation != "read") {
                        return JSON.stringify(options);
                    }
                    return options;
                }
            }
        });
        dataSource.transport.create();
    })

})

function to_activity(){
    window.location.href="to_activity";
}

function to_login() {
    window.location.href = "login.html";
}