Zoidberg.Collections.Entries = Backbone.Collection.extend({
	model: Zoidberg.Models.Entry,
	url: '/api/sentances'
	
	//getOrFetch?
})



Zoidberg.Collections.entries = new Zoidberg.Collections.Entries();