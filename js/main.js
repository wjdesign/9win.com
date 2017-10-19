
$(function() {
			// catchTime
			setInterval("GetTime()", 1000);

        	// slider
        	$('#slide').slick({
        		infinite:true,
        		slideToShow:1,
        		slideToScroll:1,
        		autoplay:true,
        		autoplaySpeed:3000,
        		dots:true,
        		pauseOnHover:true
        	});

        	// header menu開關
			$('#menu ul li a').click(function() {
				if (! $(this).attr('target') ) {
				    alert('很抱歉，尚未開放此功能。');
				    }
			})

        	// hotGameOpen
        	$('.hotGameControll a').click(function() {
        		if (! $(this).attr('href') ) {
        			alert('很抱歉，尚未開放此遊戲。');
        		}
        	})

        	// liveGameButton
        	$(".gameRoom a").click(function() {
        		alert('您尚未登入，請先登入。');
        		$('#Account').focus();
        	})

			// 遊戲列表搜尋功能
       		$("#search-bar").keyup(function(){
             	 $(".gameList").hide().children('p').filter(":contains('"+( $(this).val() )+"')").parent('.gameList').show();
           	}).keyup();

           	$("#slot .gameCenter ul li").click(function() {
           		$(".gameList").show();
           	})
        });

function GetTime() {  
	        var mon, day, now, hour, min, ampm, time, str, tz, end, beg, sec;
	        mon = new Array("一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月",  
	                "九月", "十月", "十一月", "十二月");
	        day = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");  
	        now = new Date();  
	        hour = now.getHours();  
	        min = now.getMinutes();  
	        sec = now.getSeconds();  
	        if (hour < 10) {  
	            hour = "0" + hour;  
	        }  
	        if (min < 10) {  
	            min = "0" + min;  
	        }  
	        if (sec < 10) {  
	            sec = "0" + sec;  
	        }  
	        $("#timer .container").html(
	        	"<p>"+now.getFullYear()+"年"+" "+mon[now.getMonth()]+now.getDate()+"日"+" "+day[now.getDay()]+" "+hour+":"+min+":"+sec+"</p>");
	    }



