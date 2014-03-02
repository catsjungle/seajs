/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-03-02 18:04:38
 * @version $Id$
 */

$.fn.slider=function()
{
	return this.each(function(){
		var btns=$(this).find('ol li');
		var tabcons=$(this).find('ul li');
		var oUl=$(this).find('ul');
		var currentImg=0;
		
		btns.mouseover(function(){
			currentImg=$(this).index();
			tab();
		});	

		function tab(){
			btns.removeClass('active');
			btns.eq(currentImg).addClass('active');
			oUl.stop().animate({top:-tabcons.first().height()*currentImg});
		}

		function next(){
			currentImg++;
			if(currentImg==btns.length){
				currentImg=0;
			}
			tab();
		}

		var timer=null;
		timer=setInterval(next,3000);

		$(this).hover(function(){
			clearInterval(timer);			
		},function(){
			timer=setInterval(next,3000);
		});
	});
};