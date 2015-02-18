var PostMovie = Backbone.Model.extend({
  url: 'http://tiy-fee-rest.herokuapp.com/collections/backbonemoviejj',
  idAttribute: '_id',
  defaults: {
        "image": "http://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Jurassic_Park_poster.jpg/220px-Jurassic_Park_poster.jpg",
        "title": "jurrasic Park",
        "content": "Movie about cloned dinosaurs"

    },

  initialize: function () {
    console.log("model was created");
  }
});
