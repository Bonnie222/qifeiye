/*模板页面*/
/*图片数据*/
$(function(){
			$.getJSON("data/templet.json",function(data){
				var str="";
				$.each(data, function(infoIndex, Info) {
					str += '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12"><p>' + Info.ID 
					       +'</p><a><img class="img-responsive" src=" ' + Info.img + ' " /><i></i>'
					       +'<div class="view"><span>预览</span><span>选用</span></div></a></div>'											
				});				
				$(".b2-2-1").html(str);
			})
		})

/*鼠标滑过图片效果*/
$(function(){
	$(document).on("mouseover",".b2-2 a",function(){
		$(this).find(".view").show();
	})
	$(document).on("mouseout",".b2-2 a",function(){
		$(this).find(".view").hide();
	})
})


/*侧边栏菜单*/
$(function(){
	$(".b2 li").click(function(){
		$(".b2 li span").removeClass("active");
		$(".b2 li div").hide();
		$(this).find("span").addClass("active");
		$(this).find("div").show();
	})
	$(".bul2-a a").click(function(){
		/*$(".b2 li span")*/
		$(".bul2-a a").removeClass("active");
		$(this).addClass("active");
	})
})


/*案例页面*/
$(function(){
	$(".eul1 li").click(function(){
		$(".eul1 li span").removeClass("active");
		$(".eul2 li a").removeClass("active");
		$(".eul1 li > ul").hide();
		$(this).find("span").addClass("active");
		$(this).find("ul").show();
	})
	$(".eul2 li").click(function(){
		$(".eul1 li span,.eul2 li a").removeClass("active");
		$(this).find("a").addClass("active");
	})
	
})
$(function(){
			$.getJSON("data/exanple.json",function(data){
				var str="";
				$.each(data, function(infoIndex, Info) {
					str += '<div class="e2-2-2-anli col-lg-6 col-md-6 col-sm-6 col-xs-12"><div class="e2-2-2-img">' +
							'<a title="' + Info.title + '"><img class="img-responsive" src="' + Info.img + '"/></a></div>' +
							'<div class="e2-2-2-w"><span><a title="' + Info.title +'">' + Info.title +'</a></span>' +
							'<p>' + Info.p +'</p></div></div>'					    										
				});				
				$(".e2-2-2").html(str);
			})
	})


/*注册页面*/
/*文本框为空给出提示*/
$(function(){
	$(".c3 input").click(function(){
		$(this).blur(function(){
			if($(this).val()==''){
				$(this).next("span").removeClass("hide");	
			}
		})
		
	})
})
/*问题随机数0~10*/
$(function(){
	var a = Math.floor(Math.random()*10);
	var b = Math.floor(Math.random()*10);
	$("#answer").text(a+"+"+b);
})



/*侧边点击滑出*/
$(function(){		
	$("#zd").click(function(){
		$("#main").animate({left:'-500'},300);
		$("#box").animate({right:'-500'},300);
		/*$("#main").animate({width:'toggle'},300);
		$("#box").animate({right:'0'},300);*/
		/*height: 100%;*/
	/*overflow-x: hidden;*/
		$("body").css("height","100%");
		$("body").css("overflow","hidden");
	})
	$("#X").click(function(){
		$("#main").animate({left:'0'},300);
		$("#box").animate({right:'-2880'},300);
		$("body").css("overflow-y","visible");
	})
	$("#wd").click(function(){
		$("#ul1").animate({width:'toggle'},300);
		$("#wd1").animate({right:'0'},300);
	})		
	$("#fanhui1").click(function(){
		$("#wd1").animate({right:'-2880'},300);
		$("#ul1").animate({width:'toggle'},300);
	})		
	$("#gy").click(function(){
		$("#ul1").animate({width:'toggle'},300);
		$("#gy1").animate({right:'0'},300);		
	})		
	$("#fanhui2").click(function(){
		$("#gy1").animate({right:'-2880'},300);	
		$("#ul1").animate({width:'toggle'},300);		
	})
	$("#gcxx").click(function(){
		$("#ul2").animate({width:'toggle'},300);	
		$("#gc").animate({right:'0'},300);		
	})
	$("#fanhui3").click(function(){
		$("#ul2").animate({width:'toggle'},300);	
		$("#gc").animate({right:'-2880'},300);		
	})		
})	