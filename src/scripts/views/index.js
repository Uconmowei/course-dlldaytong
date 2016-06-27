var tplIndex = require('../templates/index.string');
var util = require('../utils/fn.js');


SPA.defineView('index',{
	html:tplIndex,
	
	plugins: ['delegated'],
	
	modules:[{
		name: 'content', // 子视图的名字，用作后边引用的句柄
	    views: ['home', 'search', 'fujin','my'], // 定义子视图的列表数组
	    defaultTag: 'home', // 定义默认视图
	    container: '.scroll-container' // 子视图的容器
	}],
	
//	bindEvents:{
//		show:function(){
//			//var myScroll = new IScroll('#scroll-container');
//		}
//	}
	bindActions:{
		'switch.tabs':function(e,data){
			util.setFocus(e.el);
			this.modules.content.launch(data.tag);
		},
		'exit': function (e, data) {
      		util.setFocus(e.el);
	        // 关闭视图
	      this.hide();
		}
	}
});
