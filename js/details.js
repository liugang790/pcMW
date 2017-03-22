$(".com .news_content dl").hover(function(){
            $(this).addClass("hover").siblings("dl").removeClass("hover");
})

/*工程案例中心页轮播*/
var  cindex=0;
var  cautoTime=null;
$(".case_lb ul.bt li").hover(function(){
	    clearInterval(cautoTime);
       $(this).addClass("hover").siblings("li").removeClass("hover");
	   cindex=$(this).index();
	   $(".case_lb ul.minbanner li").eq(cindex).show().siblings().hide();
},function(){
          cautoPlay();
})
var  clen=$(".case_lb ul.bt li").length;
function cautoPlay(){
		cautoTime=setInterval(function(){
				   cindex++;
				   if(cindex>clen){
						  cindex=0;
				   }
				   $(".case_lb ul.bt li").eq(cindex).addClass("hover").siblings("li").removeClass("hover");
				   $(".case_lb ul.minbanner li").eq(cindex).show().siblings().hide();
		},3000)

}
cautoPlay();


/*z最新产品中心轮播*/
var pindex=0;
$(".pro_xq .pro_l .l_bt li").hover(function(){
	       pindex=$(this).index();
           $(this).addClass("hover").siblings("li").removeClass("hover");
		   $(".pro_xq .pro_l .l_pic ul li").eq(pindex).show().siblings().hide();
})
/*最新产品选项卡*/
var _pindex2=0;
$(".pro_content .pro_td .nav li").click(function(){
           $(this).addClass("hover").siblings("li").removeClass("hover");
           _pindex2=$(this).index();
		   $(".pro_td .content ul li").eq(_pindex2).show().siblings().hide();
})



