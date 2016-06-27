var tplSearch = require('../templates/search.string');

var util = require('../utils/fn.js');

SPA.defineView('search',{
	html:tplSearch,
	
	plugins: ['delegated'],
	
	bindActions:{
		'switch.tabs':function(e,data){
			console.log("aaaa");
			util.setFocus(e.el);
			this.modules.content.launch(data.tag);
		}
		
		
	}
});