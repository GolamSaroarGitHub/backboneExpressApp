define(["backbone", 
"jquery","text!templates/book.html","models/book","events"
], function(Backbone,$, BookTemplate, Book, Events) {
    var AddBookView = Backbone.View.extend({
      initialize: function(){
        console.log('add new book view initialized');
      },
      events:{
        "click #saveBook":"saveNewBook"
      },
      template:_.template($(BookTemplate).find('#addBookTemplate').html()),
      render: function() {
        this.$el.html(this.template());
        return this;
      },
      saveNewBook:function(e){
        var me = this;
        e.preventDefault();
        var bookName = $('#book_name').val();
        var authonName = $('#author_name').val();
        var locationName = $('#location_name').val();
        var book = new Book();
        console.log(book)
        if(bookName===''||authonName===''||locationName===''){
          alert('please enter all the values');
        } else{
          var modelData = {};
          modelData.name=bookName;
          modelData.author= authonName;
          modelData.location = locationName;
          book.save(modelData, {
            success: function (d) {
              me.resetFields();
            },
            error: function (model, response) {
              alert('error saving data');
            }
          });

        }
      },
      resetFields: function(){
        $('#book_name').val('');
        $('#author_name').val('');
        $('#location_name').val('');
        var url = "/";
        Events.trigger("router:navigate", url);

      }
    });
  
    return AddBookView;
  });