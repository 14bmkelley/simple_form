$(document).ready(function() {
  
  // Submit a form
  $("button").click(function(click_event) {
    
    // Stop form from submitting however it wants to by default
    click_event.preventDefault();
    
    // Get ajax request params
    var params = {
      "phone": Number($("#phone").val()),
      "birth_date": $("#birthdate").val(),
      "school": $("#school").val(),
      "major": $("#major").val(),
      "graduation": $("#grad").val()
    };
    
    // Send request
    $.ajax({
      "url": "http://polyrents-dev.mkpkktgrns.us-west-2.elasticbeanstalk.com/api/tenant/basic/",
      "type": "POST",
      "contentType": "application/json",
      "headers": {
        "Authorization": "Token 6cc70702ab273994128ae99def22891743d5279d"
      },
      "data": JSON.stringify(params),
      "datatype": "json",
      "success": function(data, stats, jqxhr) {
        if (data.success) {
          alert("Success!");
        }
      },
      "error": function (err) {
        var error = JSON.parse(err.responseText);
        if (error.phone) {
          alert("Phone field: " + error.phone[0]);
        } else if (error.birth_date) {
          alert("Birth date field: " + error.birth_date[0]);
        } else if (error.school) {
          alert("School field: " + error.school[0]);
        } else if (error.major) {
          alert("Major field: " + error.major[0]);
        } else if (error.graduation) {
          alert("Graduation field: " + error.graduation[0]);
        }
      }
    });
      
  });
  
});
