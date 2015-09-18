// JavaScript Document
$(function(){
	function bannerLoop(obj_name,delayTime,interTime){
		_this = $(obj_name);
		if(interTime==null){
			interTime=3000;
			}
		if(delayTime==null){
			delayTime=500;
			}	
		var dang = 0;
		var bdang =0;
		var timer = null;
		var li_width = _this.find(".bd ul li").css("width");
		li_width = parseInt(li_width);
		var ul_number = _this.find(".bd ul li").length;
		var ul_width = li_width * ul_number ;
		var hd_li="<li>●</li>";
		for(var i = 0;i<ul_number;i++){
			_this.find(".hd ul").append(hd_li);
			}
		_this.find(".hd ul li").eq(0).addClass("onb");	
		var li_clone = _this.find(".bd ul li").clone();
		_this.find(".bd ul").append(li_clone);
		_this.find(".bd ul").css("width",ul_width*2);
		_this.find(".next").click(function(){
			if(!_this.find(".bd ul").is(":animated")){
				dang++;
				if(dang>=(ul_number*2)){
					dang=ul_number;
					_this.find(".bd ul").css("left",-(ul_number-1)*li_width+"px");
					}	
				bdang = dang;
				if(bdang>=ul_number){
					bdang = bdang-ul_number;
					}	
				_this.find(".bd ul").animate({"left":-li_width*dang},delayTime);
				_this.find(".hd ul li").removeClass("onb");
				_this.find(".hd ul li").eq(bdang).addClass("onb");
				}
			})
		_this.find(".prev").click(function(){
			if(!_this.find(".bd ul").is(":animated")){
				dang--;
				if(dang<0){
					dang=ul_number-1;
					_this.find(".bd ul").css("left",-(ul_number)*li_width+"px");
					}
				bdang = dang;
				if(bdang>=ul_number){
					bdang = bdang-ul_number;
					}
				_this.find(".bd ul").animate({"left":-li_width*dang},delayTime);
				_this.find(".hd ul li").removeClass("onb");
				_this.find(".hd ul li").eq(bdang).addClass("onb");
				}
			})	
		timer = window.setInterval(function(){
			_this.find(".next").click();
			},interTime)	
		_this.hover(function(){
				window.clearInterval(timer);
				},function(){
				timer = window.setInterval(function(){
					_this.find(".next").click();
					},interTime)	
			})	
		}
	
	function fadeBanner(obj,delayTime,interTime){
		if(delayTime==null){
			delayTime=700;
			}
		if(interTime==null){
			interTime=5000;
			}	
		var banner_num=0;
		var dang_num=0;
		var banner_time=null;
		var _this = $(obj);
		var index_li_num = _this.find(".bd ul li").length;
		for(var i = 0;i<index_li_num;i++){	
			_this.find(".hd ul").append("<li>●</li>");
			}
		_this.find(".hd ul li").click(function(){		
			if(!_this.find(".bd ul li").is(":animated")){
				banner_num=$(this).index();
				$(this).addClass("onfade");
				$(this).siblings("li").removeClass("onfade");
				_this.find(".bd ul li").removeClass("z8").fadeOut(delayTime);
				_this.find(".bd ul li").eq(banner_num).addClass("z8").fadeIn(delayTime);
				}
			})
		if(_this.find(".hd ul li").length>0){
			_this.find(".hd ul li").eq(0).click();
			}
		banner_time=window.setInterval(function(){
			banner_num++;
			if(banner_num>index_li_num){
				banner_num=0;
				}
			_this.find(".hd ul li").eq(banner_num).click();
			},interTime)
		_this.find(".bd ul li").hover(function(){
				window.clearInterval(banner_time);
				},function(){
				banner_time=window.setInterval(function(){
					banner_num++;
						if(banner_num>index_li_num){
						banner_num=0;
					}
					_this.find(".hd ul li").eq(banner_num).click();
				},interTime)
			})
		/*首页Banner*/
		}
	
	function alarmFun(a_obj,close_button,alarm_obj){
		var window_height = $(window).height();
		$(".black_blank").css("height",window_height);
		$(a_obj).click(function(){
			$(".black_blank").show();
			$(alarm_obj).show();
			})
		$(close_button).click(function(){
			$(".black_blank").hide();
			$(alarm_obj).hide();
			})		
		}
	
	function textScrollLoop(obj,delayTime,interTime){
		var _this = $(obj);
		var line_height = _this.find("ul li").height();
		var line_number = _this.find("ul li").length;
		var dang = 0;
		_this.find("ul").append(_this.find("ul li").clone());
		var timer = null;
		if(delayTime==null){
			delayTime=500;
			}
		if(interTime==null){
			interTime=3000;
			}
		timer = window.setInterval(function(){
			dang++;
			if(dang>(line_number*2)-1){
				dang=line_number;
				_this.find("ul").css("top",-line_height*(line_number-1));
				}
			_this.find("ul").animate({"top":-line_height*dang},delayTime)
			},interTime)
		_this.hover(function(){
				window.clearInterval(timer);
				},function(){
				timer = window.setInterval(function(){
					dang++;
					if(dang>(line_number*2)-1){
						dang=line_number;
						_this.find("ul").css("top",-line_height*(line_number-1));
						}
					_this.find("ul").animate({"top":-line_height*dang},delayTime)
					},interTime)
			})		
		}
	function slide_banner(obj,delayTime,tab_num,show_num,li_allwidth){
		var _this = $(obj);
		var this_src = null;
		var this_num = 0;
		if(delayTime==null){
			delayTime=500;
			}
		var this_have = _this.find(".ctrl_area ul li").length;
		_this.find(".ctrl_area ul li").click(function(){
			if(!$(".ctrl_area ul").is(":animated")){
				this_num = $(this).index();
				this_src = $(this).find("img").attr("src");
				$(".ctrl_area ul li").removeClass("on");
				$(this).addClass("on");
				_this.find(".img_area").find("img").attr("src",this_src);
				if(this_num>1 && this_num<this_have-tab_num){
					$(".ctrl_area ul").animate({left:-li_allwidth*(this_num-1)+"px"},delayTime);
					}
				if(this_num==1){
					$(".ctrl_area ul").animate({left:"0px"},delayTime);
					}
				if(this_num==this_have-tab_num){
					$(".ctrl_area ul").animate({left:-li_allwidth*(this_have-show_num)+"px"},delayTime);
					}
				if(this_num==this_have-2){
					$(".ctrl_area ul").animate({left:-li_allwidth*(this_have-show_num)+"px"},delayTime);
					}		
				}		
			})
		_this.find(".btn_left").click(function(){
			if(!$(".ctrl_area ul").is(":animated")){
				this_num--;
				if(this_num<0){
					this_num=0;
					}
				_this.find(".ctrl_area ul li").eq(this_num).click();
				}
			})
		_this.find(".btn_right").click(function(){
			if(!$(".ctrl_area ul").is(":animated")){
				this_num++;
				if(this_num>this_have-1){
					this_num=this_have-1;
					}
				_this.find(".ctrl_area ul li").eq(this_num).click();
				}
			})		
		_this.find(".ctrl_area ul li").eq(0).click();	
		}	
		
	function easy_tab(obj){
		var oDiv = document.getElementById(obj);
		var oLi = oDiv.getElementsByTagName("div")[0].getElementsByTagName("li");
		var aCon = oDiv.getElementsByTagName("div")[1].getElementsByTagName("div");
		var timer = null;
		for (var i = 0; i < oLi.length; i++) {
			oLi[i].index = i;
			oLi[i].onclick = function() {
				show(this.index);
			}
		}
		function show(a) {
			index = a;
			var alpha = 0;
			for (var j = 0; j < oLi.length; j++) {
				oLi[j].className = "";
				aCon[j].className = "";
				aCon[j].style.opacity = 0;
				aCon[j].style.filter = "alpha(opacity=0)";
			}
			oLi[index].className = "cur";
			clearInterval(timer);
			timer = setInterval(function() {
				alpha += 2;
				alpha > 100 && (alpha = 100);
				aCon[index].style.opacity = alpha / 100;
				aCon[index].style.filter = "alpha(opacity=" + alpha + ")";
				alpha == 100 && clearInterval(timer);
			},
				5)
			}
		}
	function back_top(obj){
		$(window).scroll(function () { /*屏幕上下滚动返回头部*/
			if($(window).scrollTop()>1000) { 
				$(obj).fadeIn();
					} else { 
					$(obj).fadeOut();
						} 
				}); 
		$(obj).click(function () { 
			$('html,body').animate({ 
				scrollTop :0 
						}, 200); 
				})
		}
	function shop_fixed(obj,fixed_class){
		var num1=$(obj).offset().top;
		$(window).scroll(function(){	
		var num=$(obj).offset().top;
		var ttop=$(window).scrollTop();
		if(num<=ttop){
			$(obj).addClass(fixed_class);
			}
		if(ttop<num1){
				$(obj).removeClass(fixed_class);
				}
			})
		}		
	/*调用区域*/
	bannerLoop(".banner",800,5000);/*调用bannerLoop*/
	fadeBanner(".index_banner",700,3000);/*调用渐入Banner*/
	alarmFun(".alarm_button",".close_button",".alarm_window");	/*调用弹出框*/
	textScrollLoop(".text_scroll_loop",500,3000);/*调用文字纵向循环滚*/
	slide_banner(".photo_banner",500,3,5,105);/*调用幻灯片切换*/
	easy_tab("tab");/*调用简单TAB切换*/
	back_top(".back_top");/*调用回到顶部按钮*/
	shop_fixed(".box","gg");/*滚动固定*/
	/*调用区域结束*/	
	
})