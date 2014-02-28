/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-02-25 11:07:16
 * @version $Id$
 */

define(function(require,exports,module){
	var common=require('/seajs/m5/common.js');
	var getStyle=common.getStyle;

	exports.move=function(obj,json,options){
		var options=options || {};
		options.time=options.time || 700;
		options.type=options.type || 'buffer';

		var count=Math.round(options.time/30);
		var dis={};
		var start={};

		for(var i in json){
			if(i=='opacity'){
				start[i]=Math.round(parseFloat(getStyle(obj,i)*100));
			}else{
				start[i]=parseInt(getStyle(obj,i));
			}

			if(isNaN(start[i])){
				switch(i){
					case 'left':
						start[i]=obj.offsetLeft;
						break;
					case 'top':
						start[i]=obj.offsetTop;
						break;
					case 'width':
						start[i]=obj.offsetWidth;
						break;
					case 'height':
						start[i]=obj.offsetHeight;
						break;
					case 'marginLeft':
						start[i]=0;
						break;
					case 'paddingLeft':
						start[i]=0;
						break;
					case 'marginTop':
						start[i]=0;
						break;
					case 'paddingTop':
						start[i]=0;
						break;
				}

			}
			dis[i]=json[i]-start[i];
		}

		var n=0;
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			n++;
			for(var i in json){
				switch(options.type)
				{
					case 'linear':
						var cur = start[i]+dis[i]*n/coutn;
						break;
					case 'buffer':
						var a=1-n/count;
						var cur =start[i]+dis[i]*(1-a*a*a);
						break;
				}
				if(i=='opacity'){
					obj.style.opacity=cur/100;
					obj.style.filger='alpha(opacity:'+cur+')';
				}
				else{
					obj.style[i]=parseInt(cur)+'px';
				}
			}

			if(n==count){
				clearInterval(obj.timer);
				options.end && options.end();
			}
		},30);
	};
});