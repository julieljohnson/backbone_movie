
var MovieList = Backbone.View.extend({
    el: '.section',
    render: function (){
        var that = this;
        var movies = new Movies ();
        movies.fetch ({
            success: function (movies) {
                var template = _.template($(moviePost).html(), {movies: movies.models});
                that.$el.html(template);
            }
        })
    },


    events: {
    "click .showCreate": "showCreate",
    "submit #createMovie": "createMovie"
    },
    createPost: function (e) {
    e.preventDefault();
    var newMovie = {
      image: $('createMovie').find('input[name="newImage"]').val(),
      title: $('#createMovie').find('input[name="newTitle"]').val(),
      content: $('#createMovie').find('textarea[name="newContent"]').val(),

  }
    //
    // var newModelMovie = new ModelMovie(newMovie);
    // newModelMovie.save();
    // console.log(this.collection.length);
    // this.collection.add(newModelMovie);
    // console.log(this.collection.length);

}

});


var Router = Backbone.Router.extend({
    routes: {
        "": "home"
    }
});
var movieList = new MovieList();

var router= new Router();
router.on('route:home', function () {
    movieList.render();

});

Backbone.history.start();
