Zoidberg.Views.entriesIndex = Backbone.View.extend({
	template: JST["entries/index"],
	
	initialize: function(){
		this.listenTo(this.collection, "sync", this.render)
	},
	
	events: {
		"click #fewerS": "fewerSentances",
		"click #moreS": "moreSentances",
		"click #fewerP": "fewerParagraphs",
		"click #moreP": "moreParagraphs"
	},
	
	render: function(){
		var renderedContent = this.template({
			 collection: this.collection.sample(this.model.attributes.size),
			 model: this.model
		 });
		this.$el.html(renderedContent);
		return this;
	},
	
	fewerSentances: function(){
		var minusOne = parseInt(this.model.attributes.size, 10) - 1;
		if(this.model.attributes.paragraphs){
			var locat = "/" + minusOne + "/" + this.model.attributes.paragraphs;
		} else {
			var locat = "/" + minusOne + "/" + 1;
		}
		Backbone.history.navigate(locat, {trigger: true});
	},
	
	moreSentances: function(){
		var plusOne = parseInt(this.model.attributes.size, 10) + 1;
		var locat;
		if(this.model.attributes.paragraphs){
			locat = "/" + plusOne + "/" + this.model.attributes.paragraphs;
		} else {
			locat = "/" + plusOne + "/" + 1;
		}
		Backbone.history.navigate(locat, {trigger: true});
	},
	
	fewerParagraphs: function(){
		var currValue = parseInt(this.model.attributes.paragraphs, 10);
		if( currValue || currValue >= 1 ){
			var minusOne = currValue - 1;
		} else {
			var minusOne = 1;
		}
		var locat = "/" + this.model.attributes.size + "/" + minusOne;
		Backbone.history.navigate(locat, {trigger: true});
	},
	
	moreParagraphs: function(){
		var currValue = parseInt(this.model.attributes.paragraphs, 10);
		if( currValue || currValue >= 2 ){
			var plusOne = currValue + 1;
		} else {
			var plusOne = 1;
		}
		var locat = "/" + this.model.attributes.size + "/" + plusOne;
		Backbone.history.navigate(locat, {trigger: true});
	}
	
});