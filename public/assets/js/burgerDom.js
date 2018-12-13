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
          location.reload();

        }
      );
    });
});

