/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-02-25 11:04:53
 * @version $Id$
 */
define(function (require, exports, module){
 	var move = require('/seajs/m5/move.js').move;
 	var common = require('/seajs/m5/common.js'); 
 	
 	exports.createSlider = function (id){
 		var box = document.getElementById(id);

 		var aBtn = box.getElementsByTagName('ol')[0].children;
 		var oUl = box.getElementsByTagName('ul')[0];
 		var aLi = oUl.children;

 		for(var i=0; i < aBtn.length; i++)
 		{
 			(function (index){
 				aBtn[i].onclick=function (){
 					for(var j=0;j<aBtn.length;j++){
 						common.removeClass(aBtn[j],'active');
 					}
 					common.addClass(this,'active');
 					move(oUl,{top:-aLi[0].offsetHeight*index});
 				};
 			})(i);
 		}
 	};
});

