/*購物車區特效*/
/*購物車*/
// $(document).ready(function() {
//  $("#cart").click(function(){
//     $("#buylist").animate({
//       right: '0',
//     });
//     $("#buybg").show();
//   });
  
//   $("#close_bt").click(function(){
//     alert("我有觸發click事件");
//     if ($(window).width() < 768) {
//       $("#buylist").animate({
//        right: '-100%',
//      });
//     }else{
//       $("#buylist").animate({
//         right: '-500',
//       });
//     }
//     $("#buybg").fadeToggle(500);
//   });

//   $(window).resize(function(){
//     //alert("我有觸發resize事件");
//     if ($(window).width() < 768) {
//       $("#buylist").animate({
//        right: '-100%',
//      });
//     }else{
//       $("#buylist").animate({
//         right: '-500',
//       });
//     }
//   });
// });
$(document).ready(function() {
 $("#cart").click(function(){
    $("#buylist").animate({
      right: '0',
    });
  });
  
  $("#close_bt").click(function(){
    //alert("我有觸發click事件");
    $("#buylist").animate({
       right: '-100%',
    });
  });

});



/*輸入數量按鈕*/
$(document).ready(function() {
 	$(".minus_bt").click(function(){
 		var thisid = $(this).prop('id');
 		var thisid_aaray = thisid.split("_");
		var objid = thisid_aaray[1];
		var numberValue = $('#numberinput_'+ objid).val();
		var numberInput = $('#numberinput_'+ objid);
	    //var numberValue = document.querySelector('.numberinput_class').value;/*把獲取到的值丟進去變數裡 寫在function外面只能運行一次*/
	    //var numberInput = document.querySelector('.numberinput_class');/*使用變數存取值的話 每次都要重覆抓取 除非不要要變數存取 直接寫*/
	    if (numberValue > 1){	    	
	    	numberInput.val(parseInt(numberValue) - 1);
	    	//alert(parseInt(numberValue) - 1);
	    };
	});
	$(".plus_bt").click(function(){
		var thisid = $(this).prop('id');
 		var thisid_aaray = thisid.split("_");
		var objid = thisid_aaray[1];
		var numberValue = $('#numberinput_'+ objid).val();
		var numberInput = $('#numberinput_'+ objid);
	    //var numberValue = document.querySelector('.numberinput_class').value;/*把獲取到的值丟進去變數裡 寫在function外面只能運行一次*/
	    //var numberInput = document.querySelector('.numberinput_class');/*使用變數存取值的話 每次都要重覆抓取 除非不要要變數存取 直接寫*/
	    numberInput.val(parseInt(numberValue) + 1);
	    //alert(parseInt(numberValue) + 1);
	});
});



/*結帳流程--購物車資訊開合區*/
$(document).ready(function() {
  $(".cartinfo_bt").click(function(){
     $(".cartinfo_bt > .arrow_icon ").animate({
       transform: 'rotate(180deg)',
     });
    if($("#open_cart_info").css("display") == "none"){
      $("#open_cart_info").slideDown(500);
      $(".cartinfo_bt > .arrow_icon ").addClass("arrow_open");
      $(".cartinfo_bt > .arrow_icon ").removeClass("arrow_close");
    }else if ($("#open_cart_info").css("display") == "block"){
      $("#open_cart_info").slideUp(500);
      $(".cartinfo_bt > .arrow_icon").removeClass("arrow_open");
      $(".cartinfo_bt > .arrow_icon ").addClass("arrow_close");
    };
  });
});

