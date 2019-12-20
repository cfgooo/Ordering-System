var time = null;
var nexImg = 0;
var imgLength = $("#res1 .box .leftside ul li").length;
$(document).ready(function(){
	time = setInterval(intervalImg,3000);
	$(".flip1").click(function(){
	    $(".panel1").slideToggle("slow");
	  });
	$(".flip2").click(function(){
	    $(".panel2").slideToggle("slow");
	  });
	$(".flip3").click(function(){
	    $(".panel3").slideToggle("slow");
	  });
	$(".flip4").click(function(){
	    $(".panel4").slideToggle("slow");
	  });
	$(".flip5").click(function(){
	    $(".panel5").slideToggle("slow");
	  });
	$(".flip6").click(function(){
	    $(".panel6").slideToggle("slow");
	  });
	$(".flip7").click(function(){
	    $(".panel7").slideToggle("slow");
	  });
	$(".flip8").click(function(){
	    $(".panel8").slideToggle("slow");
	  });
});
function intervalImg(){
	if (nexImg<imgLength-1) {
		nexImg++;
	}else{
		nexImg=0;
	}
	$("#res1 .box .leftside ul img").eq(nexImg-1).css("position","absolute");
	$("#res1 .box .leftside ul img").eq(nexImg).css("position","relative");

	$("#res1 .box .leftside ul li").eq(nexImg).css("display","block");
	$("#res1 .box .leftside ul li").eq(nexImg).stop().animate({"opacity":1},1000);
	$("#res1 .box .leftside ul li").eq(nexImg-1).stop().animate({"opacity":0},1000,function(){
		$(".box .leftsdie ul li").eq(nexImg-1).css("display","none");
	});

	$("#res1 .box .rightside ul img").eq(nexImg-1).css("position","absolute");
	$("#res1 .box .rightside ul img").eq(nexImg).css("position","relative");

	$("#res1 .box .rightside ul li").eq(nexImg).css("display","block");
	$("#res1 .box .rightside ul li").eq(nexImg).stop().animate({"opacity":1},1000);
	$("#res1 .box .rightside ul li").eq(nexImg-1).stop().animate({"opacity":0},1000,function(){
		$(".box .rightside ul li").eq(nexImg-1).css("display","none");
	});


	$("#res2 .box .leftside ul img").eq(nexImg-1).css("position","absolute");
	$("#res2 .box .leftside ul img").eq(nexImg).css("position","relative");

	$("#res2 .box .leftside ul li").eq(nexImg).css("display","block");
	$("#res2 .box .leftside ul li").eq(nexImg).stop().animate({"opacity":1},1000);
	$("#res2 .box .leftside ul li").eq(nexImg-1).stop().animate({"opacity":0},1000,function(){
		$(".box .leftsdie ul li").eq(nexImg-1).css("display","none");
	});

	$("#res2 .box .rightside ul img").eq(nexImg-1).css("position","absolute");
	$("#res2 .box .rightside ul img").eq(nexImg).css("position","relative");

	$("#res2 .box .rightside ul li").eq(nexImg).css("display","block");
	$("#res2 .box .rightside ul li").eq(nexImg).stop().animate({"opacity":1},1000);
	$("#res2 .box .rightside ul li").eq(nexImg-1).stop().animate({"opacity":0},1000,function(){
		$(".box .rightside ul li").eq(nexImg-1).css("display","none");
	});


	$("#res3 .box .leftside ul img").eq(nexImg-1).css("position","absolute");
	$("#res3 .box .leftside ul img").eq(nexImg).css("position","relative");

	$("#res3 .box .leftside ul li").eq(nexImg).css("display","block");
	$("#res3 .box .leftside ul li").eq(nexImg).stop().animate({"opacity":1},1000);
	$("#res3 .box .leftside ul li").eq(nexImg-1).stop().animate({"opacity":0},1000,function(){
		$(".box .leftsdie ul li").eq(nexImg-1).css("display","none");
	});

	$("#res3 .box .rightside ul img").eq(nexImg-1).css("position","absolute");
	$("#res3 .box .rightside ul img").eq(nexImg).css("position","relative");

	$("#res3 .box .rightside ul li").eq(nexImg).css("display","block");
	$("#res3 .box .rightside ul li").eq(nexImg).stop().animate({"opacity":1},1000);
	$("#res3 .box .rightside ul li").eq(nexImg-1).stop().animate({"opacity":0},1000,function(){
		$(".box .rightside ul li").eq(nexImg-1).css("display","none");
	});




	$("#res4 .box .leftside ul img").eq(nexImg-1).css("position","absolute");
	$("#res4 .box .leftside ul img").eq(nexImg).css("position","relative");

	$("#res4 .box .leftside ul li").eq(nexImg).css("display","block");
	$("#res4 .box .leftside ul li").eq(nexImg).stop().animate({"opacity":1},1000);
	$("#res4 .box .leftside ul li").eq(nexImg-1).stop().animate({"opacity":0},1000,function(){
		$(".box .leftsdie ul li").eq(nexImg-1).css("display","none");
	});

	$("#res4 .box .rightside ul img").eq(nexImg-1).css("position","absolute");
	$("#res4 .box .rightside ul img").eq(nexImg).css("position","relative");

	$("#res4 .box .rightside ul li").eq(nexImg).css("display","block");
	$("#res4 .box .rightside ul li").eq(nexImg).stop().animate({"opacity":1},1000);
	$("#res4 .box .rightside ul li").eq(nexImg-1).stop().animate({"opacity":0},1000,function(){
		$(".box .rightside ul li").eq(nexImg-1).css("display","none");
	});
}
 $("#nav2 a").click(function(e){
    e.preventDefault();
    $("#nav2 .active").removeClass("active");
    $(this).addClass("active");

    $(".expanded").toggleClass("expanded collapse");//状态转换
    var id = $(this).attr("href");
    $(`#${id}`).toggleClass("expanded collapse");
 });
 