$$(function() {
    $("#burgerButton").on("click", function(event) {
        event.preventDefault();
        var newBurger = $("#orderForm").val().trim();

      
  
      // Send the PUT request.
      $.ajax("/api/addBurger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});