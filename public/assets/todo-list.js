$(document).ready(function(){
  
  $('form').on('submit', function(){

      var item = $('form input');
      var todo = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('ul.list-of-todos li').on('click', function(){
      var item = $(this).text().replace(/\s+/g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload(); 
        }
      });
  });
  
  //navigation active link
  var bodyClass = $("body").attr("class");
  $(".navigation ul li a").each(function(){
	  if($(this).attr("data-page") == bodyClass){
		  $(this).addClass("active");
	  }
  });

});
