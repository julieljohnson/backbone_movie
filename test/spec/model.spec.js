describe("Movie Model", function (){
  beforeEach(function (){
    this.movieModel = new MovieModel();
});
  it("should be an instance of Movie Model Class", function(){
    expect(this.movieModel).is.instanceof(MovieModel);
  });
  it("should have correct url root", function(){
    expect(this.movieModel.urlRoot).to.be.ok;
    expect(this.movieModel.urlRoot).to.be.equal("http://tiy-fee-rest.herokuapp.com/collections/backbonemoviejj");
  });
  it("should be able to add property to model", function(){
    expect(this.movieModel.attributes.title).to.not.be.ok;
    this.movieModel.set({title: "Jurassic Park"});
    expect(this.movieModel.attributes.title).to.equal("Jurassic Park");
  });
  it('should have a default photo', function(){
    expect(this.movieModel.attributes.photo).to.equal('http://fillmurray.com/200/200');
  });
});
