
	$(function(){

		var l=$('.side .ul>li').length,
			l1=(l-4)*1,
		     w=$('.side .ul>li').outerWidth(true);
		     $('.side,.box').css('width',w*4+'px');
		     $('.side .ul').css('width',l*w+'px');

		var n=-1;
		var t1;		    
		
		clearInterval(t1);
		auto();
		showTime();
		
		$('.lt').click(function(){
			clearInterval(t1);
			n = n <= 0 ? l1 : --n;
			sw=(n*w);
			$('.box').stop().animate({"scrollLeft":sw},500);
			showTime();
		});
		$('.rt').click(function(){
			var n=1;
			clearInterval(t1);
			auto();
			showTime();
		});
		$('.footer .box').hover(function() {
			clearInterval(t1);
		}, function() {
			showTime();
		});

		function auto(){
		   n = n >= l1 ? 0 : ++n;
		   sw=(n*w);
		   $('.box').stop().animate({"scrollLeft":sw},500);
		}
		function showTime(){
			t1=setInterval(auto, 2000);
		};
		if ($(window).width()>=1100){
			var l1=(l-4)*1;
			$('.side,.box').css('width',w*4+'px');
			$('.footer .side .rt').css('right','20px');
		}
		if ($(window).width()>=769 && $(window).width()<1100) {
			var l1=(l-2)*1;
			$('.side,.box').css('width',w*3+'px');
			$('.footer .footer-top .side').css('width','100% !important');
			$('.footer .side .rt').css('right','0');
			$('.footer .side').css('display','block');
			$('.footer .carouseFooter').css('display','none');
		}
		if ($(window).width()<769) {
			$('.footer .side').css('display','none');
			$('.footer .carouseFooter').css('display','block');
		}


      // 以下是导航效果
      var one=$('.bottom-content').hasClass('bottom-content'),
      	  two=$('.companyCount').hasClass('companyCount'),
      	  three=$('.joinUs').hasClass('joinUs'),
      	  four=$('.work-grid').hasClass('work-grid'),
      	  five=$('.particulars1').hasClass('particulars1'),
      	  sixe=$('.grid-contact').hasClass('grid-contact'),
      	  n=$('.header .top-nav ul li'),
      	  n1;
      	  function fun(n,n1){
      	  	n.eq(n1).addClass('active').siblings().removeClass('active');
      	  }	
      	  if (one) {
      	    n1=0;
      	  	fun(n,n1);
      	  }	 
      	  if (two) {
      	    n1=1;
      	  	fun(n,n1);
      	  }
      	  if (three) {
      	    n1=2;
      	  	fun(n,n1);
      	  }
      	  if (four) {
      	    n1=3;
      	  	fun(n,n1);
      	  }
      	  if (five) {
      	    n1=3;
      	  	fun(n,n1);
      	  }
      	  if (sixe) {
      	    n1=4;
      	  	fun(n,n1);
      	  }

	});
