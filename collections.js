
// Post Collection
var MovieCollection = Backbone.Collection.extend({
  url: 'http://tiy-fee-rest.herokuapp.com/collections/backbonemoviejj',
  model: MovieModel
});
