/*wb*/
 $(".wb a").each(function(index){
		     $(this).hover(function(){
			       if(index==0){
				       $(this).css({"background":"#fff"});
				   }
				   else if(index==1){
				       $(this).css({"background":"#fff"});
				   }
				   $(this).css({"border-radius":"4"});
				   $(this).find("span").stop();
				   $(this).find("span").animate({'top':-29},"normal")
			 },function(){
			    var vs=$(this)
				$(this).find('span').animate({"top":0},"normal",function(){vs.css({"background":"none","border-radius":"4"});
				});
			 })
		 });

/*导航菜单*/
var _index=0;
$("#Nav .mainnav ul li").hover(function(){
	  _index=$(this).index();
      $(this).find(".maue").show();
},function(){
      $(this).find(".maue").hide();
})

/*banner轮播效果*/
var _index2=0;
var  autoTime=null;
$("ul.banner_list li").hover(function(){
	    clearInterval(autoTime);
         $(this).addClass("hover").siblings("li").removeClass("hover");
         _index2=$(this).index();
		 $(".f_pic li").eq(_index2).stop().fadeIn("slow").siblings("li").fadeOut();
},function(){
     autoPlayb();
})
// 下一张
		$(".next").click(function(){
			clearInterval(autoTime);
			_index2++;
			var len=$("ul.banner_list li").length;
			if(_index2 >= len){
				_index2 = 0;
			}
			// 联动小按钮
			banfn();
		});
			// 上一张
		$(".pre").click(function(){
			clearInterval(autoTime);
			_index2--;
			var len=$("ul.banner_list li").length;
			if(_index2 < 0){
				_index2 = len - 1;
			}
			// 联动小按钮
			banfn();
		});

//自动轮播
function autoPlayb(){
        autoTime=setInterval(function(){
		             _index2++;
					 var len=$("ul.banner_list li").length;
					     if(_index2>len){
						      _index2=0;
						 }
						 banfn();
				 },3000)
}
autoPlayb();
function banfn(){
          $("ul.banner_list li").eq(_index2).addClass("hover").siblings("li").removeClass("hover");
          $(".f_pic li").eq(_index2).stop().fadeIn("slow").siblings("li").fadeOut();
}
//产品展示开始
//封装
jQuery(".slideGroup .slideBox").slide({ mainCell:"ul",vis:4,prevCell:".pre1",nextCell:".next1",effect:"leftLoop",autoPlay:"ul"});
jQuery(".slideGroup .cus_Con").slide({ mainCell:"ul",vis:4,prevCell:".cus_pre",nextCell:".cus_next",effect:"leftLoop",autoPlay:"ul"});
/*var autoTime2=null;
$("#Product .Pro_con .pre1").click(function(){
	clearInterval(autoTime2);
     fn();
})
$("#Product .Pro_con .pre1").mouseout(function(){
        autoPlay2();
})
$("#Product .Pro_con .next1").click(function(){
	clearInterval(autoTime2);
        var sc = $(".scroll ");
		var offset = ($(".scroll ul li").width() * -1);
		var lastItem = $(".scroll ul li").last();
		sc.find("ul").prepend(lastItem);
		sc.css("left", offset);
		sc.animate({
			left: "0px"
		}, "slow")
})
$("#Product .Pro_con .next1").mouseout(function(){
        autoPlay2();
})

function autoPlay2(){
            autoTime2=setInterval(function(){
			          fn();
						},3000)
}
autoPlay2();
function fn(){
                       var  sc=$(".scroll");
					  var  offset=($(".scroll ul li").width())*-1;
					   sc.stop().animate({left:offset},"slow",function(){
						   var firstItem = $(".scroll ul li").first();
							sc.find("ul").append(firstItem);
							$(this).css("left", "0px");
					   })
}

*/
/*我们能提供什么效果开始*/
var _index4=0;
$("#service .ser_con .ser_list li").hover(function(){
	      _index4=$(this).index();
          $("#service .ser_con .ser_list li span").eq(_index4).hide();
		  $("#service .ser_con .ser_list li p").eq(_index4).hide();
		  $("#service .ser_con .ser_list li .ser_nav").eq(_index4).fadeIn();
},function(){
          $("#service .ser_con .ser_list li span").eq(_index4).show();
		  $("#service .ser_con .ser_list li p").eq(_index4).show();
		  $("#service .ser_con .ser_list li .ser_nav").eq(_index4).hide();
})
/*我们能提供什么效果结束*/


/*客服案例效果开始*/
var autoTime3=null;
$(".Pro_con a.cus_pre").click(function(){
	clearInterval(autoTime3);
     fn2();
})
$(".Pro_con a.cus_pre").mouseout(function(){
        autoPlay3();
})
$(".Pro_con a.cus_next").click(function(){
	clearInterval(autoTime3);
        var sc = $(".cus_scroll");
		var offset = ($("ul.cus_list li").width() * -1);
		var lastItem = $("ul.cus_list li").last();
		sc.find("ul").prepend(lastItem);
		sc.css("left", offset);
		sc.animate({
			left: "0px"
		}, "slow")
})
$(".Pro_con a.cus_next").mouseout(function(){
        autoPlay3();
})

function autoPlay3(){
            autoTime3=setInterval(function(){
			          fn2();
						},5000)
}
autoPlay3();
function fn2(){
                       var  sc=$(".cus_scroll");
					  var  offset=($("ul.cus_list li").width())*-1;
					   sc.stop().animate({left:offset},"slow",function(){
						   var firstItem = $("ul.cus_list li").first();
							sc.find("ul").append(firstItem);
							$(this).css("left", "0px");
					   })
}

/*客服案例效果结束*/


/*回到顶部开始*/
	// 滑动鼠标滚轮
	function Top(tbut){
			/*$(window).scroll(function(){
				// 判断隐藏显示
				if($(window).scrollTop() >= 1000){
					$("#top").fadeIn(300);
				} else {
					$("#top").stop(true,true).fadeOut("300");
				}
			});*/
			// 点击回到顶部时
			$(tbut).click(function(){
				$("html,body").animate({
					scrollTop:0
				},1000);
			});
	}
	Top("#Float .f_list li.Top")
/**回到顶部end*/


/*滚动条滚动
var index=0;
var h=$(window).height();
 var lastTime= new Date();//获取当前的时间

                      //alert(lastTime);
  //鼠标滚轮事件的执行
	//event 当前事件(滚轮事件)  delta 当值1时：向上滚动  -1时:向下滚动  deltaX, deltaY分别是滚轮滚动的坐标值
          $(document).mousewheel(function(event,delta,deltaX,deltaY){
               if(new Date()-lastTime>1000){
                       lastTime=new Date();
		      //向下滚
			  if(delta==-1){
				   index++;
			       //alert(index)
				   if(index<=len-1){
				       $("body,html").animate({"scrollTop":index*h},1000);
				   }else{index=-1}
			  }
			  //向上滚
              if(delta==1){
				       index--;
				 if(index>=0){
				       $("body,html").animate({"scrollTop":index*h},1000);
					   }else{index=0}
				   }    
			   }
		  });*/

/*float开始*/
$("#Float .f_list li.cal a").hover(function(){
       $(this).find(".ph").show();
},function(){
       $(this).find(".ph").hide();
})

$("#Float .f_list li.ew a").hover(function(){
       $(this).find(".er").show();
},function(){
       $(this).find(".er").hide();
})














