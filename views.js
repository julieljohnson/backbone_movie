
// Model View
var MovieView = Backbone.View.extend({
    tagName: 'article',
    template: _.template($('#movieTmpl').text()),
    events: {
      "click #deletePost": "removeListing",
      "click #editPost": "showEdit",
      "submit #submitListing": "editListing"
    },
    initialize: function() {
      event.preventDefault();
      console.log('movie view is initialized');
    },
    showEdit: function(event) {
      event.preventDefault();
      this.$('#updatePost').toggleClass('show');
      this.$el.find('#editPost').hide();
      this.$el.find('#submitEdit').addClass('show');
      this.$el.find('.main').hide();
      console.log('edit button works');

    },

    render: function() {
      var markup = this.template(this.model.toJSON());
      this.$el.html(markup);

      return this;
    },

    removeListing: function() {
      this.model.destroy();
      this.$el.remove();

  },

  editListing: function(event) {
    console.log('submit edit');
    event.preventDefault();
    this.model.set({
      title: this.$('input[name="editTitle"]').val(),
      content: this.$('textarea[name="editContent"]').val(),
      director: this.$('input[name="editDirector"]').val()
    })

    this.model.save();


   $('.main').show();
   $('#editPost').show();
   $('#updatePost').removeClass('show');
   $('#submitEdit').removeClass('show');
   console.log('submit edit button clicked');

 }

});



//Collection View //////////////////////////////

var AppView = Backbone.View.extend({
  el: $('section'),
  initialize: function () {
    console.log('app view initialized!');
    this.addAllPosts();
  },
  events: {
    "click .showCreate": "showCreate",
    "submit #createPost": "createPost"
  },
  createPost: function (e) {
    e.preventDefault();
    var newPost = {
      photo: $('#createPost').find('input[name="newPhoto"]').val(),
      title: $('#createPost').find('input[name="newTitle"]').val(),
      content: $('#createPost').find('textarea[name="newContent"]').val(),
      director: $('#createPost').find('input[name="newDirector"]').val()
    };

    var newMovieModel = new MovieModel(newPost);
    newMovieModel.save();
    console.log(this.collection.length);
    this.collection.add(newMovieModel);
    console.log(this.collection.length);
    this.addOnePost(newMovieModel); // alternative method
    $('input').val('');
   $('textarea').val('');


  },

  editCollection: function () {
    // e.preventDefault();
    this.$el.find('article').remove();
  },
  addOnePost: function (post) {

    var movieView = new MovieView({model: post});
    this.$el.append(movieView.render().el);
  },
  addAllPosts: function () {
    _.each(this.collection.models, this.addOnePost, this)
  },

});
