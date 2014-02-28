$.fn.extend({
  slider : function(){
  	var aBtns=this.find('ol li');
	var oUl=this.find('ul');

	var currentImg=0;
	aBtns.mouseover(function(){
	  currentImg=$(this).index();
	  tab();
	});

	function tab(){
	  aBtns.removeClass('active');
	  aBtns.eq(currentImg).addClass('active');
	  oUl.stop().animate({top:-oUl.children().first().height()*currentImg+'px'});
	}


	function next(){
	  currentImg++;
	  if(currentImg==aBtn.length){
  	    currentImg=0;
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