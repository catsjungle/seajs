/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-02-25 10:07:10
 * @version $Id$
 */
define(function(require,exports,module){

	module.exports={
	
		getByClass:function(obj,sClass){
			if(obj.getElementsByClassName){
				return obj.getElementsByClassName(sClass);
			}else{
				var arr=obj.getElementsByTagName('*');
				var re=new RegExp('\\b'+sClass+'\\b');

				var aEle=[];
				for(var i=0;i<arr.length;i++){
					if(re.test(arr[i].className)){
						aEle.push(arr[i]);
					}
				}
				return aEle;
			}
		},
		getStyle:function (obj,name){
			if(obj.currentStyle){
				return obj.currentStyle[name];
			}else{
				return getComputedStyle(obj,false)[name];
			}
		},
		addClass:function (obj,sClass){
			var re=new RegExp('\\b'+sClass+'\\b');
			if(!re.test(obj.className)){
				if(obj.className==''){
					obj.className=sClass;
				}else{
					obj.className+' '+sClass;
				}
			}
		},
		removeClass:function (obj,sClass){
			var re=new RegExp('\\b'+sClass+'\\b','g');
			if(re.test(obj.className)){
				obj.className=obj.className.replace(re,'').replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
			}
		}
	};
});


