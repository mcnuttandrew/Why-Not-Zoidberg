window.Zoidberg = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Zoidberg.Routers.Router($("#main"));
		Backbone.history.start();
  }
};

$(document).ready(function(){
  Zoidberg.initialize();
});
