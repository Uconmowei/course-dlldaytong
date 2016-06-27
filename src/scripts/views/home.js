var tplHome = require('../templates/home.string');

var util = require('../utils/fn.js');

SPA.defineView('home',{
	html:tplHome,
	
	plugins: ['delegated'],
	
	bindActions:{
		'switch.tabs':function(e,data){
			console.log("aaaa");
			util.setFocus(e.el);
			this.modules.content.launch(data.tag);
	},
	
	bindEvents:{
		show: function(){
			this.mySwiper = new Swiper('#swiper-bo',function(){
				loop:false;
				
			})
		}
	}
		
		
	}
});