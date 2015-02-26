// Post Model

var MovieModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/backbonemoviejj',
  idAttribute: '_id',
  defaults: function() {
   return {
     photo: 'http://fillmurray.com/200/200'
   };
 },

  initialize: function () {
    console.log("model was created");
  }
});


// Post Collection
var MovieCollection = Backbone.Collection.extend({
  url: 'http://tiy-fee-rest.herokuapp.com/collections/backbonemoviejj',
  model: MovieModel
});
