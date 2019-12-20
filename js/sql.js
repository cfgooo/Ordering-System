 function initDatabase() {//初始化数据库
    var db = getCurrentDb();
    db.transaction(function (trans) {
        trans.executeSql("create table if not exists MyDemo(Name text null,Amount text null,Words text null)", [], function (trans, result) { 
        });
    });
}
$(function () {
    initDatabase();
    $("#btnSave").click(function () {
        var txtName = $("#txtName").val();
        var txtAmount = $("#txtAmount").val();
        var txtWords = $("#txtWords").val();
        var db = getCurrentDb();
        //插入数据
        db.transaction(function (trans) {
                trans.executeSql("insert into MyDemo(Name,Amount,Words) values(?,?,?) ", [txtName, txtAmount, txtWords], function (ts, data) {
                });
        });
    });
    showAllTheData();
});
function testdeleteData() {
    var db = getCurrentDb();
    db.transaction(function (trans){
        // for(var i = 0; i < 10; i++){
            trans.executeSql("Delete from  MyDemo where Name != 1");
            window.location.reload();
            
        // }
    });
    
}

function addData(obj){
    var a = 0;
    var tmp = obj;
    var db = getCurrentDb();
    db.transaction(function (trans){
        if(($(tmp).attr("id"))=='蒸包'){
            trans.executeSql("select * from MyDemo", [], function(trans, data){
                if(data.rows.length==0){
                    trans.executeSql("insert into MyDemo(Name,Amount,Words) values('蒸包',1,5)");
                }
                else{
                    for(var i = 0; i < data.rows.length; i++){
                        if(data.rows.item(i).Name == "蒸包"){
                            trans.executeSql('UPDATE MyDemo SET Amount=Amount+1 WHERE Name="蒸包"');
                            trans.executeSql('UPDATE MyDemo SET Words=Words+5 WHERE Name="蒸包"');
                            a = 1;
                            break;
                        }
                    }
                    if(a == 0){
                        trans.executeSql("insert into MyDemo(Name,Amount,Words) values('蒸包',1,5)");
                    }
                }
            })
        }
        else if(($(tmp).attr("id"))=='煎饼果子'){
            trans.executeSql("select * from MyDemo", [], function(trans, data){
                if(data.rows.length==0){
                    trans.executeSql("insert into MyDemo(Name,Amount,Words) values('煎饼果子',1,7)");
                }
                else{
                    for(var i = 0; i < data.rows.length; i++){
                        if(data.rows.item(i).Name == "煎饼果子"){
                            trans.executeSql('UPDATE MyDemo SET Amount=Amount+1 WHERE Name="煎饼果子"');
                            trans.executeSql('UPDATE MyDemo SET Words=Words+7 WHERE Name="煎饼果子"');
                            a = 1;
                            break;
                        }
                    }
                    if(a == 0){
                        trans.executeSql("insert into MyDemo(Name,Amount,Words) values('煎饼果子',1,7)");
                    }
                }
                
            })
        }
        else if(($(tmp).attr("id"))=='烧鸭面'){
            trans.executeSql("select * from MyDemo", [], function(trans, data){
                if(data.rows.length==0){
                    trans.executeSql("insert into MyDemo(Name,Amount,Words) values('烧鸭面',1,10)");
                }
                else{
                    for(var i = 0; i < data.rows.length; i++){
                        if(data.rows.item(i).Name == "烧鸭面"){
                            trans.executeSql('UPDATE MyDemo SET Amount=Amount+1 WHERE Name="烧鸭面"');
                            trans.executeSql('UPDATE MyDemo SET Words=Words+10 WHERE Name="烧鸭面"');
                            a = 1;
                            break;
                        }
                    }
                    if(a == 0){
                        trans.executeSql("insert into MyDemo(Name,Amount,Words) values('烧鸭面',1,10)");
                    }
                }
                
            })
        }
        else if(($(tmp).attr("id"))=='泡椒牛蛙'){
            trans.executeSql("select * from MyDemo", [], function(trans, data){
                if(data.rows.length==0){
                    trans.executeSql("insert into MyDemo(Name,Amount,Words) values('泡椒牛蛙',1,5.5)");
                }
                else{
                    for(var i = 0; i < data.rows.length; i++){
                        if(data.rows.item(i).Name == "泡椒牛蛙"){
                            trans.executeSql('UPDATE MyDemo SET Amount=Amount+1 WHERE Name="泡椒牛蛙"');
                            trans.executeSql('UPDATE MyDemo SET Words=Words+5.5 WHERE Name="泡椒牛蛙"');
                            a = 1;
                            break;
                        }
                    }
                    if(a == 0){
                        trans.executeSql("insert into MyDemo(Name,Amount,Words) values('泡椒牛蛙',1,5.5)");
                    }
                }
            })
        }
        else if(($(tmp).attr("id"))=='红烧猪蹄'){
            trans.executeSql("select * from MyDemo", [], function(trans, data){
                if(data.rows.length==0){
                    trans.executeSql("insert into MyDemo(Name,Amount,Words) values('红烧猪蹄',1,4.5)");
                }
                else{
                    for(var i = 0; i < data.rows.length; i++){
                        if(data.rows.item(i).Name == "红烧猪蹄"){
                            trans.executeSql('UPDATE MyDemo SET Amount=Amount+1 WHERE Name="红烧猪蹄"');
                            trans.executeSql('UPDATE MyDemo SET Words=Words+4.5 WHERE Name="红烧猪蹄"');
                            a = 1;
                            break;
                        }
                    }
                    if(a == 0){
                        trans.executeSql("insert into MyDemo(Name,Amount,Words) values('红烧猪蹄',1,4.5)");
                    }
                }
                
            })
        }
        else if(($(tmp).attr("id"))=='炸春卷'){
            trans.executeSql("select * from MyDemo", [], function(trans, data){
                if(data.rows.length==0){
                    trans.executeSql("insert into MyDemo(Name,Amount,Words) values('炸春卷',1,1)");
                }
                else{
                    for(var i = 0; i < data.rows.length; i++){
                        if(data.rows.item(i).Name == "炸春卷"){
                            trans.executeSql('UPDATE MyDemo SET Amount=Amount+1 WHERE Name="炸春卷"');
                            trans.executeSql('UPDATE MyDemo SET Words=Words+1 WHERE Name="炸春卷"');
                            a = 1;
                            break;
                        }
                    }
                    if(a == 0){
                        trans.executeSql("insert into MyDemo(Name,Amount,Words) values('炸春卷',1,1)");
                    }
                }
                
            })
        }
        else if(($(tmp).attr("id"))=='滋补乌鸡汤'){
            trans.executeSql("select * from MyDemo", [], function(trans, data){
                if(data.rows.length==0){
                    trans.executeSql("insert into MyDemo(Name,Amount,Words) values('滋补乌鸡汤',1,5)");
                }
                else{
                    for(var i = 0; i < data.rows.length; i++){
                        if(data.rows.item(i).Name == "滋补乌鸡汤"){
                            trans.executeSql('UPDATE MyDemo SET Amount=Amount+1 WHERE Name="滋补乌鸡汤"');
                            trans.executeSql('UPDATE MyDemo SET Words=Words+5 WHERE Name="滋补乌鸡汤"');
                            a = 1;
                            break;
                        }
                    }
                    if(a == 0){
                        trans.executeSql("insert into MyDemo(Name,Amount,Words) values('滋补乌鸡汤',1,5)");
                    }
                }
                
            })
        }
        else if(($(tmp).attr("id"))=='韭菜水饺'){
            trans.executeSql("select * from MyDemo", [], function(trans, data){
                if(data.rows.length==0){
                    trans.executeSql("insert into MyDemo(Name,Amount,Words) values('韭菜水饺',1,6)");
                }
                else{
                    for(var i = 0; i < data.rows.length; i++){
                        if(data.rows.item(i).Name == "韭菜水饺"){
                            trans.executeSql('UPDATE MyDemo SET Amount=Amount+1 WHERE Name="韭菜水饺"');
                            trans.executeSql('UPDATE MyDemo SET Words=Words+6 WHERE Name="韭菜水饺"');
                            a = 1;
                            break;
                        }
                    }
                    if(a == 0){
                        trans.executeSql("insert into MyDemo(Name,Amount,Words) values('韭菜水饺',1,6)");
                    }
                }
                
            })
        }
    });
}
function getCurrentDb() {
    //打开数据库，或者直接连接数据库参数：数据库名称，版本，概述，大小
    var db = openDatabase("myDb", "1.0", "it's to save mydemo data!", 1024 * 1024);
    return db;        
}
function showAllTheData() {
    $("#tblData").empty();
    var db = getCurrentDb();
    db.transaction(function (trans) {
        trans.executeSql("select * from MyDemo ", [], function (trans, data) {
            if (data) {
                for (var i = 0; i < data.rows.length; i++) {
                    appendDataToTable(data.rows.item(i));//获取某行数据的json对象
                }
            }
        });
    });
}
function appendDataToTable(data) {//将数据展示到表格里面
    //uName,title,words
    var txtName = data.Name;
    var txtAmount = data.Amount;
    var txtWords = data.Words;
    var strHtml = "";
    var a = 1;
    strHtml += "<tr>";
    strHtml += "<td>" + txtName + "</td>";
    strHtml += "<td>" + txtAmount + "</td>";
    strHtml += "<td>" + txtWords + "</td>";
    strHtml += "<td class='hello'><input type='button' value='' onclick='deleteData(this)' class='delete'/></td>"; 
    strHtml += "</tr>";
    $("#tblData").append(strHtml);
}
function deleteData(obj){
    var tmp = obj;
    var row = 0; 
    var row2 = 0;
    var db = getCurrentDb();
    db.transaction(function (trans){
        row = $(tmp).parent().parent().find("td");
        row2 = $(row).html();
        
        if(row2 == '蒸包'){
            trans.executeSql("Delete from  MyDemo where Name == '蒸包'");
            window.location.reload();
            console.log(row2);
        }
        else if(row2 == '煎饼果子'){
            trans.executeSql("Delete from  MyDemo where Name == '煎饼果子'");
            window.location.reload();
            console.log(row2);
        }
        else if(row2 == '烧鸭面'){
            trans.executeSql("Delete from  MyDemo where Name == '烧鸭面'");
            window.location.reload();
            console.log(row2);
        }
        else if(row2 == '红烧猪蹄'){
            trans.executeSql("Delete from  MyDemo where Name == '红烧猪蹄'");
            window.location.reload();
            console.log(row2);
        }
        else if(row2 == '炸春卷'){
            trans.executeSql("Delete from  MyDemo where Name == '炸春卷'");
            window.location.reload();
            console.log(row2);
        }
        else if(row2 == '泡椒牛蛙'){
            trans.executeSql("Delete from  MyDemo where Name == '泡椒牛蛙'");
            window.location.reload();
            console.log(row2);
        }
        else if(row2 == '滋补乌鸡汤'){
            trans.executeSql("Delete from  MyDemo where Name == '滋补乌鸡汤'");
            window.location.reload();
            console.log(row2);
        }
        else if(row2 == '韭菜水饺'){
            trans.executeSql("Delete from  MyDemo where Name == '韭菜水饺'");
            window.location.reload();
            console.log(row2);
        }
        
    });
}
var db = getCurrentDb();
var num=0;
db.transaction(function (trans) {
    trans.executeSql("select * from MyDemo ", [], function (trans, data) {
        if (data) {
            for (i = 0; i < data.rows.length; i++){
              msg = parseInt(data.rows.item(i).Words);
              num += msg;
              document.getElementById('Amount').innerText =  num;
           }
        }
    });
});