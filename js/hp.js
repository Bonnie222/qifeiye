/*打字机*/
$(function(){
    var $str = $("#con span"),  
       $show = $("#show"),  
        Innt = [],//预定义用存储的数组  
       Index = 0,//预定义用存储的数组的角标       
      Itimes = 0,//光标闪烁次数  
   FootIndex = 0,//输出时用的角标   
   InnerHTML = "",//当前页面已经输出的元素  
        Auto = null,//自动打印方法  
        temp = '',//保存标签的变量  
        flag = true,//标记标签已经开始  
     endFlag = false;//判断标签结束  
    for (var i = 0; i < $str.length; i++) {  
        for(var j = 0; j<$str.eq(i).html().length;j++){  
            if($str.eq(i).html()[j] == "<" ) {  
                flag = false;  
            }   
                endFlag = false;  
            if($str.eq(i).html()[j] == ">" ) { 
                endFlag = true;                 
            }             
            if (flag) {  
                Innt[Index++] = $str.eq(i).html()[j];  
                
            } else { 
                temp += $str.eq(i).html()[j];  
                if (endFlag) {  
                    Innt[Index++] = temp;                     
                    temp = '';  
                    flag = true;   
                }  
            } 
            
        }  
    }  
    FunOut = function(){  
        if (Itimes % 3 != 0) {  
            Itimes++;  
            $show.html(InnerHTML + "<b>|</b>");  
        }else{  
            if(FootIndex<Index){  
                InnerHTML +=Innt[FootIndex++];  
                $show.html(InnerHTML);  
            }else{  
				clearInterval(Auto);
            }  
        }  
        Itimes++;  
    };   
    Auto = setInterval(FunOut,300);   
})  



/*侧边栏二维码*/
$(function(){
		$('[data-toggle="tooltip"]').tooltip()
})


/*顶部导航滑过显示*/
$(function(){
	$(".wd1").hover(function(){
		$(".wd2").fadeIn();
		
	},function(){
		$(".wd2").hide();
	})
})
$(function(){
	$(".gy1").hover(function(){
		$(".gy2").fadeIn();
	},function(){
		$(".gy2").hide();
	})
})

/*1秒打开部分滑过显示*/
$(function(){
	$(".c6 a").hover(function(){
		$(this).find("img:first-child").fadeIn();
	},function(){
		$(this).find("img:first-child").fadeOut();
	})
})


$(function(){
	var isstop = 0;
	$(window).bind("scroll",function(){
 		var sTop = $(this).scrollTop(); 
         	if (sTop + 450 >= $(".c2").offset().top) { 
                if(isstop == 0){
                    isstop = 1;
              		$("#c2-1").addClass("dh1");
              		$("#c2-2").addClass("dh2");
              		isstop = 0;
                }else{
                    isstop = 0;
                }
            } 
            if (sTop + 450 >= $(".c3").offset().top) { 
                if(isstop == 0){
                    isstop = 1;
              		$("#c3-2").addClass("dh3");
              		$("#c3-1").addClass("dh2");
              		isstop = 0;
                }else{
                    isstop = 0;
                }
            } 
            if (sTop + 450 >= $(".c4").offset().top) { 
                if(isstop == 0){
                    isstop = 1;
              		$("#c4-1").addClass("dh1");
              		$("#c4-2").addClass("dh2");
              		isstop = 0;
                }else{
                    isstop = 0;
                }
            } 
            if (sTop + 450 >= $(".c5").offset().top) { 
                if(isstop == 0){
                    isstop = 1;
              		$("#c5-2").addClass("dh3");
              		$("#c5-1").addClass("dh2");
              		isstop = 0;
                }else{
                    isstop = 0;
                }
            } 
            if (sTop + 450 >= $(".c6").offset().top) { 
                if(isstop == 0){
                    isstop = 1;
              		$("#c6-1").addClass("dh4");
              		isstop = 0;
                }else{
                    isstop = 0;
                }
            } 
            if (sTop + 450 >= $(".c7").offset().top) { 
                if(isstop == 0){
                    isstop = 1;
              		$("#c7-1").addClass("dh4");
              		isstop = 0;
                }else{
                    isstop = 0;
                }
            } 
            if (sTop + 450 >= $(".c8").offset().top) { 
                if(isstop == 0){
                    isstop = 1;
              		$("#c8-1").addClass("dh4");
              		isstop = 0;
                }else{
                    isstop = 0;
                }
            }
            if (sTop + 450 >= $(".c8").offset().top) { 
                if(isstop == 0){
                    isstop = 1;
              		$("#c8-1").addClass("dh4");
              		isstop = 0;
                }else{
                    isstop = 0;
                }
            }
            if (sTop + 450 >= $(".c10").offset().top) { 
                if(isstop == 0){
                    isstop = 1;
              		$("#c10-1").addClass("dh4");
              		isstop = 0;
                }else{
                    isstop = 0;
                }
            }
            if (sTop + 450 >= $(".c11").offset().top) { 
                if(isstop == 0){
                    isstop = 1;
              		$("#c11-1").addClass("dh4");
              		isstop = 0;
                }else{
                    isstop = 0;
                }
            }
	})

})