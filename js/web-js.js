/*網站區js*/
$(document).ready(function() {


	/*小視口導覽列開合*/
	$("#nav-small-bt").click(function(){
		$("#nav-small-open").animate({
		  right: '0',
		});
		$("#open-bg").show();
		$("#nav-small-close-bt").show();
	});
	$("#nav-small-close-bt").click(function(){
		//alert("我有觸發click事件");
		$("#nav-small-open").animate({
			right: '-300',
		});
		$("#open-bg").fadeToggle(500);
		$("#nav-small-close-bt").hide();
	});
	$("#open-bg").click(function(){
		//alert("我有觸發click事件");
		$("#nav-small-open").animate({
			right: '-300',
		});
		$("#open-bg").fadeToggle(500);
		$("#nav-small-close-bt").hide();
	});

	
	/*小視口導覽列以及大視口導覽列第二層開合特效*/
	$(".first-level-area").stop(true).click(function(){
		if($(this).children(".second-level-area").css("display") == "none" ){
			$(".first-level-area > .second-level-area").slideUp(200);
            $(this).children(".second-level-area").slideDown(200);
		}else if($(this).children(".second-level-area").css("display") == "block"){
			$(this).children(".second-level-area").slideUp(200);
		};

	});


	/*左側欄位開合 content區放大特效*/	
	if($.cookie("the_cookie")==1)
	{
		$(".sidebar").animate({
	  		left: '-260',
		},300);
		$(".mainbody").addClass('mainbody-jq-100');
		$(".sidebar").addClass('open-sidebar');

	}else{
		$(".sidebar").animate({
	  		left: '0',
		},500);
		$(".mainbody").removeClass('mainbody-jq-100');
		$(".sidebar").removeClass('open-sidebar');

	}
	$(".sidebar-bt").stop(true).click(function(e){
		if($(".sidebar").hasClass("open-sidebar") == false ){
			$(".sidebar").animate({
		  		left: '-260',
			},500);
			$(".mainbody").addClass('mainbody-jq-100');
			$(".sidebar").addClass('open-sidebar');
			
			$.cookie("the_cookie", 1);

		}else if($(".sidebar").hasClass("open-sidebar") == true){
			$(".sidebar").animate({
		  		left: '0',
			},500);
			$(".mainbody").removeClass('mainbody-jq-100');
			$(".sidebar").removeClass('open-sidebar');

			$.cookie("the_cookie", 0);
		};
	});

	/*內頁大視口導覽列滾動後固定*/
	// $(window).on("mousewheel DOMMouseScroll", function(e){
	// 	var scrollNum = $(window).scrollTop();
 //        var delta = e.originalEvent.wheelDelta/150 || - e.originalEvent.detail/3;
 //        // console.log(delta);
 //        if(scrollNum < 400 ){
	// 		$(".nav-big-second").removeClass("nav-big-second-fixed");
	// 	}else if(scrollNum > 400 && delta==1){
 //        	console.log(delta);
	// 		$(".nav-big-second").addClass("nav-big-second-fixed");
	// 		$(".nav-big-second").removeClass("nav-big-second-static");
	// 	}else if(scrollNum > 400 && delta==-1){
	// 		console.log(delta);
	// 		$(".nav-big-second").removeClass("nav-big-second-fixed");
	// 		$(".nav-big-second").removeClass("nav-big-second-static");
	// 	}
 //    });

 	/*內頁大視口導覽列往上滾動後固定*/
 	var oriNum = 0;
	
    $(window).on("scroll", function(e){
   		var scrollNum = $(window).scrollTop();
        if(scrollNum < 300 ){
			$(".nav-big-second").removeClass("nav-big-second-fixed");
		}else if(scrollNum > 300 && scrollNum < oriNum){
			$(".nav-big-second").addClass("nav-big-second-fixed");
			$(".nav-big-second").removeClass("nav-big-second-static");
		}else if(scrollNum > 300 && scrollNum > oriNum){
			$(".nav-big-second").removeClass("nav-big-second-fixed");
			$(".nav-big-second").removeClass("nav-big-second-static");
		}
		oriNum = scrollNum;
    });

   
    /*內頁分類搜尋點擊後顯示列表 列表點擊後可跳至該定位錨點 */
    $("#sel_section_bt").on('click',function(){
		//alert("123");
		if($("#sel_open_list").css("display") == "none"){
			$("#sel_open_list").slideDown(500); 
  		}else{
  			$("#sel_open_list").slideUp(500); 
  		}
  	});	
  	$("#sel_open_list > a").on('click',function(){
		//alert("321");
		$("#sel_open_list").slideUp(500); 
  	});	

 	/*內頁分類點擊跳至錨點 減少滑動位置*/ 	
  	$(".links_area").on('click',function(){
  		var get_class = $(this).attr("id");
		var get_class_number = get_class.split("_");
		var class_number = get_class_number[2];
		//alert(class_number);
		var get_id = "#" +"links_area_"+ class_number;
		// var get_id_number = get_id.split("_");
		// var id_number = get_id_number[2];
		
		var x = $(get_id).offset();
		var move = x.top - 190;
		
		/*參考*/
		/*http://skaih.logdown.com/posts/683416-how-to-use-jquery-to-scroll-up-to-the-specified-block*/
		$("html,body").animate({scrollTop:move},1000);
		//alert($("html,body").scrollTop());
		// $("html,body").scrollTop(move);
  	});	

   
  	
});

