Zoidberg.Collections.Sizes = Backbone.Collection.extend({
	model: Zoidberg.Models.Size,
	url: '/api/sentances'
})



Zoidberg.Collections.sizes = new Zoidberg.Collections.Sizes();