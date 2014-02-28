$.fn.extend({
	slider : function(){
		var aBtn=this.find('ol li');
	  var oUl=this.find('ul');
	  var aCon=this.find('ul li');
	  var now=0;
	  aBtn.mouseover(function(){
	    now=$(this).index();
	    tab();
	  });

	  function tab(){
	    aBtn.removeClass('active');
	    aBtn.eq(now).addClass('active');
	    oUl.stop().animate({top:-oUl.children().eq(0).height()*now+'px'});
	  }

	  
	  function next(){
	    now++;
	    if(now==aBtn.length){
	      now=0;
	    }
	    tab();

	  }

	  var timer;
	  timer=setInterval(next,1500);
			
	  this.hover(function(){
	    clearInterval(timer);
	  },function(){
	    timer=setInterval(next,1500)
	  });
	}
});