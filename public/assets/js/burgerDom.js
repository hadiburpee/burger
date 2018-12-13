$(function() {
    $("#burgerButton").on("click", function(event) {
        
        // event.preventDefault();
        var newBurger = {
            burger: $("#orderForm").val().trim()
        };
        console.log("New burger: " + newBurger)
      // Send the Post request.
      
      $.ajax("/api/addBurger", {
        type: "POST",
        data: newBurger
      }).then(function() {
          console.log("Test ajax post");
        //   // Reload the page to get the updated list
        //   console.log("Data log:" + data)
          

        }
        
      );
      location.reload();
    });

    $(".devour").on("click", function(event){
        // event.preventDefault();
        
        $(this).data("dvrd", 1);
        var devoured = $(this).data("dvrd");
        var burgerId = $(this).attr("brgrid");
        console.log("burgerId: " + burgerId);
        console.log("devoured: " + devoured);

        $.ajax("/api/devourBurger/" + burgerId, {
          type: "PUT",
          data: devoured
        }).then(function(){
          
        });

        location.reload();
    });

    var eatorNot = $(".devour").data("dvrd")
    if(eatorNot == 1){
      $(".devoured").append($())

    }

});

