function remove_field_border(id){
  $("#"+id).css('border', 'none');
}

$(document).ready(function(){

  var site_url = "http://127.0.0.1:8000";//full site domain url


  $("#recover-link").on('click', function(){
    $("#model-request-form").hide().animate({'right': '200px'}, 1000, 'linear');
    $("#mem_signup").hide().animate({'right': '200px'}, 1000, 'linear');
    $("#recover-form").show().animate({'left': '200px'}, 1000, 'linear');

  });


    var Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 6000
    });



    $("#admin-login-form").on("submit", function(e){
        e.preventDefault();
  
        var action = $(this).attr("action");
        var loginId = $("#login-email").val();
        var pass = $("#login-pass").val();
        
        var urlPath = $("#login-url-path").val();

        var btn = $("#login-btn");
        
        if($.trim($("#login-email").val()) == "" || $.trim($("#login-pass").val()) == ""){
            //jQuery("#login-alert").css('display', 'block');
            //jQuery("#login-alert").html(" Enter your login details");

            Toast.fire({
              icon: 'error',
              title: 'Enter your email and password!'
            });
            //window.alert('Fields empty!');

        }else{
        
            $.ajax({
            headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
             },
            type: "POST",
            dataType: "json",
            url: action,
            data: {"email": loginId, "password": pass},
            beforeSend:function(){
                
                //$('.login-status').html(" Attempting to login");
                Toast.fire({
                  icon: 'info',
                  title: 'Attempting to login'
                });
            },
            complete:function(){
                
            },

            success:function(data){
              if(data.status == true){
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'Logged in successfully.'
                  })
              window.location = site_url+'/admin';
              }else if(data.status == false){

                Toast.fire({
                  icon: 'error',
                  title: data.message
                });

                      }else{
                        Toast.fire({
                          icon: 'error',
                          title: data
                        });
                  
                                }
          },

            error:function(jqXHR, exception){

              if(jqXHR.status === 0){
                Toast.fire({
                  icon: 'warning',
                  title: 'Please check your internet connection'
                });
              }else if(jqXHR.status == 404){
                Toast.fire({
                  icon: 'warning',
                  title: 'Request route not found.'
                });
              }else if(jqXHR.status == 500){
                Toast.fire({
                  icon: 'warning',
                  title: 'Internal Server Error [500]'
                });
              }else if(jqXHR.status == 422){
                var errors = jqXHR.responseJSON;
          // $.each(json.responseJSON, function (key, value) {
          //     $('.'+key+'-error').html(value);
          // });
          Toast.fire({
            icon: 'error',
            title: errors.message
          });
              }else if(exception === 'parsererror'){
                Toast.fire({
                  icon: 'warning',
                  title: 'Requested JSON parse failed'
                });
              }else if(exception === 'timeout'){
                Toast.fire({
                  icon: 'warning',
                  title: 'Time out error'
                });
              }else if(exception === 'abort'){
                Toast.fire({
                  icon: 'warning',
                  title: 'Ajax request aborted'
                });
              }
                
            },
            
          });

        }

});


$("#candidate-login-form").on("submit", function(e){
  e.preventDefault();

  var action = $(this).attr("action");
  var loginId = $("#login-email").val();
  var pass = $("#login-pass").val();
  
  var urlPath = $("#login-url-path").val();

  var btn = $("#login-btn");
  
  if($.trim($("#login-email").val()) == "" || $.trim($("#login-pass").val()) == ""){
      //jQuery("#login-alert").css('display', 'block');
      //jQuery("#login-alert").html(" Enter your login details");

      Toast.fire({
        icon: 'error',
        title: 'Enter your email and password!'
      });
      //window.alert('Fields empty!');

  }else{
  
      $.ajax({
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
       },
      type: "POST",
      dataType: "json",
      url: action,
      data: {"email": loginId, "password": pass},
      beforeSend:function(){
          
          //$('.login-status').html(" Attempting to login");
          Toast.fire({
            icon: 'info',
            title: 'Attempting to login'
          });
      },
      complete:function(){
          
      },

      success:function(data){
        if(data.status == true){
            
            Toast.fire({
              icon: 'success',
              title: 'Logged in successfully.'
            })
            window.location = site_url+'/candidate';
        }else if(data.status == false){

          Toast.fire({
            icon: 'error',
            title: data.message
          });

                }else{
                  Toast.fire({
                    icon: 'error',
                    title: data
                  });
            
                          }
    },

      error:function(jqXHR, exception){

        if(jqXHR.status === 0){
          Toast.fire({
            icon: 'warning',
            title: 'Please check your internet connection'
          });
        }else if(jqXHR.status == 404){
          Toast.fire({
            icon: 'warning',
            title: 'Request route not found.'
          });
        }else if(jqXHR.status == 500){
          Toast.fire({
            icon: 'warning',
            title: 'Internal Server Error [500]'
          });
        }else if(jqXHR.status == 422){
          var errors = jqXHR.responseJSON;
    // $.each(json.responseJSON, function (key, value) {
    //     $('.'+key+'-error').html(value);
    // });
    Toast.fire({
      icon: 'error',
      title: errors.message
    });
        }else if(exception === 'parsererror'){
          Toast.fire({
            icon: 'warning',
            title: 'Requested JSON parse failed'
          });
        }else if(exception === 'timeout'){
          Toast.fire({
            icon: 'warning',
            title: 'Time out error'
          });
        }else if(exception === 'abort'){
          Toast.fire({
            icon: 'warning',
            title: 'Ajax request aborted'
          });
        }
          
      },
      
    });

  }

});


$("#recruiter-login-form").on("submit", function(e){
  e.preventDefault();

  var action = $(this).attr("action");
  var loginId = $("#login-email").val();
  var pass = $("#login-pass").val();
  
  var urlPath = $("#login-url-path").val();

  var btn = $("#login-btn");
  
  if($.trim($("#login-email").val()) == "" || $.trim($("#login-pass").val()) == ""){
      //jQuery("#login-alert").css('display', 'block');
      //jQuery("#login-alert").html(" Enter your login details");

      Toast.fire({
        icon: 'error',
        title: 'Enter your email and password!'
      });
      //window.alert('Fields empty!');

  }else{
  
      $.ajax({
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
       },
      type: "POST",
      dataType: "json",
      url: action,
      data: {"email": loginId, "password": pass},
      beforeSend:function(){
          
          //$('.login-status').html(" Attempting to login");
          Toast.fire({
            icon: 'info',
            title: 'Attempting to login'
          });
      },
      complete:function(){
          
      },

      success:function(data){
        if(data.status == true){
            
            Toast.fire({
              icon: 'success',
              title: 'Logged in successfully.'
            })
            window.location = site_url+'/recruiter';
        }else if(data.status == false){

          Toast.fire({
            icon: 'error',
            title: data.message
          });

                }else{
                  Toast.fire({
                    icon: 'error',
                    title: data
                  });
            
                          }
    },

      error:function(jqXHR, exception){

        if(jqXHR.status === 0){
          Toast.fire({
            icon: 'warning',
            title: 'Please check your internet connection'
          });
        }else if(jqXHR.status == 404){
          Toast.fire({
            icon: 'warning',
            title: 'Request route not found.'
          });
        }else if(jqXHR.status == 500){
          Toast.fire({
            icon: 'warning',
            title: 'Internal Server Error [500]'
          });
        }else if(jqXHR.status == 422){
          var errors = jqXHR.responseJSON;
    // $.each(json.responseJSON, function (key, value) {
    //     $('.'+key+'-error').html(value);
    // });
    Toast.fire({
      icon: 'error',
      title: errors.message
    });
        }else if(exception === 'parsererror'){
          Toast.fire({
            icon: 'warning',
            title: 'Requested JSON parse failed'
          });
        }else if(exception === 'timeout'){
          Toast.fire({
            icon: 'warning',
            title: 'Time out error'
          });
        }else if(exception === 'abort'){
          Toast.fire({
            icon: 'warning',
            title: 'Ajax request aborted'
          });
        }
          
      },
      
    });

  }

});



$("#name").on('focus', function(e){
  $(this).css('border', 'solid 0px');
});

$("#phone").on('focus', function(e){
  $(this).css('border', 'solid 0px');
});

$("#email").on('focus', function(e){
  $(this).css('border', 'solid 0px');
});



$("#pass").on('focus', function(e){
  $(this).css('border', 'solid 0px');
});
$("#cpass").on('focus', function(e){
  $(this).css('border', 'solid 0px');
});

$("#candidate-register-form").on("submit", function(e){//create a submit event for the user registration modal sub login form
  e.preventDefault();

  //create jquery form local variables for escort signup form fields
  var action = $(this).attr("action");
  var name = $("#name").val();
  var phone = $("#phone").val();
  var email =  $("#email").val();
  var pass = $("#pass").val();
  var cpass = $("#cpass").val();
  
  

  
  if($.trim($("#name").val()) == ""){//check if name field is empty
      $("#name").css('border', 'solid 1px #c03826');
      Toast.fire({
        icon: 'error',
        title: 'Enter your first name!'
      });
      
  
  }else if($.trim($("#email").val()) == ""){//check if email field is empty
    $("#email").css('border', 'solid 1px #c03826');
    
      Toast.fire({
        icon: 'error',
        title: 'Enter your email address!'
      });
    
  }else if($.trim($("#phone").val()) == ""){//check if phone field is empty
    $("#phone").css('border', 'solid 1px #c03826');
    Toast.fire({
      icon: 'error',
      title: 'Enter your phone number!'
    });
    
  }else if(!Number($("#phone").val())){//check if phone field entry is not numeric
    $("#phone").css('border', 'solid 1px #c03826');
    Toast.fire({
      icon: 'error',
      title: 'Phone number must be numeric!'
    });
    
  
  }else if($.trim($("#pass").val()) == "" ){//check if password field is empty or data length is less than six(6)
    $("#pass").css('border', 'solid 1px #c03826');
    Toast.fire({
      icon: 'error',
      title: 'Enter your password!'
    });
    
  }else if($.trim($("#cpass").val()) == ""){//check if confirm password field is empty
    $("#cpass").css('border', 'solid 1px #c03826');
    Toast.fire({
      icon: 'error',
      title: 'Confirm your password!'
    });
    
  }else if($.trim($("#cpass").val()) != $("#pass").val()){//check if confirm password entry matches with password
    $("#cpass").css('border', 'solid 1px #c03826');
    Toast.fire({
      icon: 'error',
      title: 'Confirmed password does not match with password!'
    });
    
  }else{
      //else call the ajax function
      $.ajax({
      headers: {
      'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
       },
      type: "POST",
      dataType: "json",
      url: action,
      data: {"name": name, "phone": phone, "email": email, "password": pass, "password_confirmation": cpass},
      beforeSend:function(){

        Toast.fire({
          icon: 'info',
          title: 'Attempting to login'
        });
          
      },
      complete:function(){
          
      },
      
      success:function(data){
          if(data.status == true){

            Toast.fire({
              icon: 'success',
              title: data.message
            })
            window.location = site_url+'/candidate_login';
            
              
          }else if(data.status == false){
            Toast.fire({
              icon: 'error',
              title: data.message
            });
  
                  }else{
                    Toast.fire({
                      icon: 'error',
                      title: data
                    });
              
                            }
      },


      error:function(jqXHR, exception){

        if(jqXHR.status === 0){
          Toast.fire({
            icon: 'warning',
            title: 'Please check your internet connection'
          });
        }else if(jqXHR.status == 404){
          Toast.fire({
            icon: 'warning',
            title: 'Request route not found.'
          });
        }else if(jqXHR.status == 500){
          Toast.fire({
            icon: 'warning',
            title: 'Internal Server Error [500]'
          });
        }else if(jqXHR.status == 422){
          var errors = jqXHR.responseJSON;
    // $.each(json.responseJSON, function (key, value) {
    //     $('.'+key+'-error').html(value);
    // });
    Toast.fire({
      icon: 'error',
      title: errors.message
    });
        }else if(exception === 'parsererror'){
          Toast.fire({
            icon: 'warning',
            title: 'Requested JSON parse failed'
          });
        }else if(exception === 'timeout'){
          Toast.fire({
            icon: 'warning',
            title: 'Time out error'
          });
        }else if(exception === 'abort'){
          Toast.fire({
            icon: 'warning',
            title: 'Ajax request aborted'
          });
        }
          
      },
         

    });

  }

});


$("#admin-register-form").on("submit", function(e){//create a submit event for the user registration modal sub login form
  e.preventDefault();

  //create jquery form local variables for escort signup form fields
  var action = $(this).attr("action");
  var name = $("#name").val();
  var phone = $("#phone").val();
  var email =  $("#email").val();
  var pass = $("#pass").val();
  var cpass = $("#cpass").val();
  
  

  
  if($.trim($("#name").val()) == ""){//check if name field is empty
      $("#name").css('border', 'solid 1px #c03826');
      Toast.fire({
        icon: 'error',
        title: 'Enter your first name!'
      });
      
  
  }else if($.trim($("#email").val()) == ""){//check if email field is empty
    $("#email").css('border', 'solid 1px #c03826');
    
      Toast.fire({
        icon: 'error',
        title: 'Enter your email address!'
      });
    
  }else if($.trim($("#phone").val()) == ""){//check if phone field is empty
    $("#phone").css('border', 'solid 1px #c03826');
    Toast.fire({
      icon: 'error',
      title: 'Enter your phone number!'
    });
    
  }else if(!Number($("#phone").val())){//check if phone field entry is not numeric
    $("#phone").css('border', 'solid 1px #c03826');
    Toast.fire({
      icon: 'error',
      title: 'Phone number must be numeric!'
    });
    
  
  }else if($.trim($("#pass").val()) == "" ){//check if password field is empty or data length is less than six(6)
    $("#pass").css('border', 'solid 1px #c03826');
    Toast.fire({
      icon: 'error',
      title: 'Enter your password!'
    });
    
  }else if($.trim($("#cpass").val()) == ""){//check if confirm password field is empty
    $("#cpass").css('border', 'solid 1px #c03826');
    Toast.fire({
      icon: 'error',
      title: 'Confirm your password!'
    });
    
  }else if($.trim($("#cpass").val()) != $("#pass").val()){//check if confirm password entry matches with password
    $("#cpass").css('border', 'solid 1px #c03826');
    Toast.fire({
      icon: 'error',
      title: 'Confirmed password does not match with password!'
    });
    
  }else{
      //else call the ajax function
      $.ajax({
      headers: {
      'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
       },
      type: "POST",
      dataType: "json",
      url: action,
      data: {"name": name, "phone": phone, "email": email, "password": pass, "password_confirmation": cpass},
      beforeSend:function(){

        Toast.fire({
          icon: 'info',
          title: 'Attempting to login'
        });
          
      },
      complete:function(){
          
      },
      
      success:function(data){
          if(data.status == true){

            Toast.fire({
              icon: 'success',
              title: data.message
            })
            window.location = site_url+'/admin_login';
            
              
          }else if(data.status == false){
            Toast.fire({
              icon: 'error',
              title: data.message
            });
  
                  }else{
                    Toast.fire({
                      icon: 'error',
                      title: data
                    });
              
                            }
      },


      error:function(jqXHR, exception){

        if(jqXHR.status === 0){
          Toast.fire({
            icon: 'warning',
            title: 'Please check your internet connection'
          });
        }else if(jqXHR.status == 404){
          Toast.fire({
            icon: 'warning',
            title: 'Request route not found.'
          });
        }else if(jqXHR.status == 500){
          Toast.fire({
            icon: 'warning',
            title: 'Internal Server Error [500]'
          });
        }else if(jqXHR.status == 422){
          var errors = jqXHR.responseJSON;
    // $.each(json.responseJSON, function (key, value) {
    //     $('.'+key+'-error').html(value);
    // });
    Toast.fire({
      icon: 'error',
      title: errors.message
    });
        }else if(exception === 'parsererror'){
          Toast.fire({
            icon: 'warning',
            title: 'Requested JSON parse failed'
          });
        }else if(exception === 'timeout'){
          Toast.fire({
            icon: 'warning',
            title: 'Time out error'
          });
        }else if(exception === 'abort'){
          Toast.fire({
            icon: 'warning',
            title: 'Ajax request aborted'
          });
        }
          
      },
         

    });

  }

});



$("#recruiter-register-form").on("submit", function(e){//create a submit event for the user registration modal sub login form
  e.preventDefault();

  //create jquery form local variables for escort signup form fields
  var action = $(this).attr("action");
  var name = $("#name").val();
  var phone = $("#phone").val();
  var email =  $("#email").val();
  var pass = $("#pass").val();
  var cpass = $("#cpass").val();
  
  

  
  if($.trim($("#name").val()) == ""){//check if name field is empty
      $("#name").css('border', 'solid 1px #c03826');
      Toast.fire({
        icon: 'error',
        title: 'Enter your first name!'
      });
      
  
  }else if($.trim($("#email").val()) == ""){//check if email field is empty
    $("#email").css('border', 'solid 1px #c03826');
    
      Toast.fire({
        icon: 'error',
        title: 'Enter your email address!'
      });
    
  }else if($.trim($("#phone").val()) == ""){//check if phone field is empty
    $("#phone").css('border', 'solid 1px #c03826');
    Toast.fire({
      icon: 'error',
      title: 'Enter your phone number!'
    });
    
  }else if(!Number($("#phone").val())){//check if phone field entry is not numeric
    $("#phone").css('border', 'solid 1px #c03826');
    Toast.fire({
      icon: 'error',
      title: 'Phone number must be numeric!'
    });
    
  
  }else if($.trim($("#pass").val()) == "" ){//check if password field is empty or data length is less than six(6)
    $("#pass").css('border', 'solid 1px #c03826');
    Toast.fire({
      icon: 'error',
      title: 'Enter your password!'
    });
    
  }else if($.trim($("#cpass").val()) == ""){//check if confirm password field is empty
    $("#cpass").css('border', 'solid 1px #c03826');
    Toast.fire({
      icon: 'error',
      title: 'Confirm your password!'
    });
    
  }else if($.trim($("#cpass").val()) != $("#pass").val()){//check if confirm password entry matches with password
    $("#cpass").css('border', 'solid 1px #c03826');
    Toast.fire({
      icon: 'error',
      title: 'Confirmed password does not match with password!'
    });
    
  }else{
      //else call the ajax function
      $.ajax({
      headers: {
      'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
       },
      type: "POST",
      dataType: "json",
      url: action,
      data: {"name": name, "phone": phone, "email": email, "password": pass, "password_confirmation": cpass},
      beforeSend:function(){

        Toast.fire({
          icon: 'info',
          title: 'Attempting to login'
        });
          
      },
      complete:function(){
          
      },
      
      success:function(data){
          if(data.status == true){

            Toast.fire({
              icon: 'success',
              title: data.message
            })
            window.location = site_url+'/recruiter_login';
            
              
          }else if(data.status == false){
            Toast.fire({
              icon: 'error',
              title: data.message
            });
  
                  }else{
                    Toast.fire({
                      icon: 'error',
                      title: data
                    });
              
                            }
      },


      error:function(jqXHR, exception){

        if(jqXHR.status === 0){
          Toast.fire({
            icon: 'warning',
            title: 'Please check your internet connection'
          });
        }else if(jqXHR.status == 404){
          Toast.fire({
            icon: 'warning',
            title: 'Request route not found.'
          });
        }else if(jqXHR.status == 500){
          Toast.fire({
            icon: 'warning',
            title: 'Internal Server Error [500]'
          });
        }else if(jqXHR.status == 422){
          var errors = jqXHR.responseJSON;
    // $.each(json.responseJSON, function (key, value) {
    //     $('.'+key+'-error').html(value);
    // });
    Toast.fire({
      icon: 'error',
      title: errors.message
    });
        }else if(exception === 'parsererror'){
          Toast.fire({
            icon: 'warning',
            title: 'Requested JSON parse failed'
          });
        }else if(exception === 'timeout'){
          Toast.fire({
            icon: 'warning',
            title: 'Time out error'
          });
        }else if(exception === 'abort'){
          Toast.fire({
            icon: 'warning',
            title: 'Ajax request aborted'
          });
        }
          
      },
         

    });

  }

});


// $("#fpassword-email-form").on("submit", function(e){
//   e.preventDefault();

//   var action = $(this).attr("action");
//   var loginId = $("#email").val();
  
  
//   var urlPath = $("#url-path").val();

//   var btn = $("#login-btn");
  
//   if($.trim($("#email").val()) == "" ){
//       //jQuery("#login-alert").css('display', 'block');
//       //jQuery("#login-alert").html(" Enter your login details");

//       Toast.fire({
//         icon: 'error',
//         title: 'Enter your email address!'
//       });
//       //window.alert('Fields empty!');

//   }else{
  
//       $.ajax({
//       headers: {
//       'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//        },
//       type: "POST",
//       dataType: "json",
//       url: action,
//       data: {"email": loginId},
//       beforeSend:function(){
          
//           //$('.login-status').html(" Attempting to login");
//           Toast.fire({
//             icon: 'info',
//             title: 'Processing....'
//           });
//       },
//       complete:function(){
          
//       },

//       success:function(data){
//         if(data.status == true){
          
//             Toast.fire({
//               icon: 'success',
//               title: data.message
//             })
//             window.location = urlPath+'/'+data.data.user[0].id;
//         }else if(data.status == false){

//           Toast.fire({
//             icon: 'error',
//             title: data.message
//           });

//                 }else{
//                   Toast.fire({
//                     icon: 'error',
//                     title: data
//                   });
            
//                           }
//     },

//       error:function(jqXHR, exception){

//         if(jqXHR.status === 0){
//           Toast.fire({
//             icon: 'warning',
//             title: 'Please check your internet connection'
//           });
//         }else if(jqXHR.status == 404){
//           Toast.fire({
//             icon: 'warning',
//             title: 'Request route not found.'
//           });
//         }else if(jqXHR.status == 500){
//           Toast.fire({
//             icon: 'warning',
//             title: 'Internal Server Error [500]'
//           });
//         }else if(jqXHR.status == 422){
//           var errors = jqXHR.responseJSON;
//           // $.each(json.responseJSON, function (key, value) {
//           //     $('.'+key+'-error').html(value);
//           // });
//           Toast.fire({
//             icon: 'error',
//             title: errors.data.errors
//           });
//         }else if(exception === 'parsererror'){
//           Toast.fire({
//             icon: 'warning',
//             title: 'Requested JSON parse failed'
//           });
//         }else if(exception === 'timeout'){
//           Toast.fire({
//             icon: 'warning',
//             title: 'Time out error'
//           });
//         }else if(exception === 'abort'){
//           Toast.fire({
//             icon: 'warning',
//             title: 'Ajax request aborted'
//           });
//         }
          
//       },
      
//     });

//   }

// });


// $("#otp-verify-form").on("submit", function(e){
//   e.preventDefault();

//   var action = $(this).attr("action");
//   var code1 = $("#digit-1").val();
//   var code2 = $("#digit-2").val();
//   var code3 = $("#digit-3").val();
//   var code4 = $("#digit-4").val();
//   var code5 = $("#digit-5").val();
//   var code6 = $("#digit-6").val();
  
//   var general_code = code1+code2+code3+code4+code5+code6;
  
//   var urlPath = $("#url-path").val();
//   var user_id = $("#user_id").val();

//   var btn = $("#login-btn");
  
//   if($.trim($("#digit-1").val()) == "" ){
//       //jQuery("#login-alert").css('display', 'block');
//       //jQuery("#login-alert").html(" Enter your login details");
//       Toast.fire({
//         icon: 'error',
//         title: 'An empty code input field!'
//       });
//       //window.alert('Fields empty!');
//       $("#digit-1").css('border', 'solid 1px red');


//   }else if($.trim($("#digit-2").val()) == ""){

//     Toast.fire({
//       icon: 'error',
//       title: 'An empty code input field!'
//     });
//     //window.alert('Fields empty!');
//     $("#digit-2").css('border', 'solid 1px red');

//   }else if($.trim($("#digit-3").val()) == ""){

//     Toast.fire({
//       icon: 'error',
//       title: 'An empty code input field!'
//     });
//     //window.alert('Fields empty!');
//     $("#digit-3").css('border', 'solid 1px red');

//   }else if($.trim($("#digit-4").val()) == ""){

//     Toast.fire({
//       icon: 'error',
//       title: 'An empty code input field!'
//     });
//     //window.alert('Fields empty!');
//     $("#digit-4").css('border', 'solid 1px red');

//   }else if($.trim($("#digit-5").val()) == ""){

//     Toast.fire({
//       icon: 'error',
//       title: 'An empty code input field!'
//     });
//     //window.alert('Fields empty!');
//     $("#digit-5").css('border', 'solid 1px red');

//   }else if($.trim($("#digit-6").val()) == ""){

//     Toast.fire({
//       icon: 'error',
//       title: 'An empty code input field!'
//     });
//     //window.alert('Fields empty!');
//     $("#digit-6").css('border', 'solid 1px red');

//   }else{
  
//       $.ajax({
//       headers: {
//       'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//        },
//       type: "POST",
//       dataType: "json",
//       url: action,
//       data: {"user_id": user_id, "code": general_code},
//       beforeSend:function(){
          
//           //$('.login-status').html(" Attempting to login");
//           Toast.fire({
//             icon: 'info',
//             title: 'Processing....'
//           });
//       },
//       complete:function(){
          
//       },

//       success:function(data){
//         if(data.status == true){
          
//             Toast.fire({
//               icon: 'success',
//               title: data.message
//             })
//             window.location = urlPath+'/'+user_id;
//         }else if(data.status == false){

//           Toast.fire({
//             icon: 'error',
//             title: data.message
//           });

//                 }else{
//                   Toast.fire({
//                     icon: 'error',
//                     title: data
//                   });
            
//                           }
//     },

//       error:function(jqXHR, exception){

//         if(jqXHR.status === 0){
//           Toast.fire({
//             icon: 'warning',
//             title: 'Please check your internet connection'
//           });
//         }else if(jqXHR.status == 404){
//           Toast.fire({
//             icon: 'warning',
//             title: 'Request route not found.'
//           });
//         }else if(jqXHR.status == 500){
//           Toast.fire({
//             icon: 'warning',
//             title: 'Internal Server Error [500]'
//           });
//         }else if(jqXHR.status == 422){
//           var errors = jqXHR.responseJSON;
//           // $.each(json.responseJSON, function (key, value) {
//           //     $('.'+key+'-error').html(value);
//           // });
//           Toast.fire({
//             icon: 'error',
//             title: errors.message
//           });
//         }else if(exception === 'parsererror'){
//           Toast.fire({
//             icon: 'warning',
//             title: 'Requested JSON parse failed'
//           });
//         }else if(exception === 'timeout'){
//           Toast.fire({
//             icon: 'warning',
//             title: 'Time out error'
//           });
//         }else if(exception === 'abort'){
//           Toast.fire({
//             icon: 'warning',
//             title: 'Ajax request aborted'
//           });
//         }
          
//       },
      
//     });

//   }

// });



// $("#new-password-entry-form").on("submit", function(e){
//   e.preventDefault();

//   var action = $(this).attr("action");
//   var password = $("#password").val();
//   var cpassword = $("#c-password").val();
  
  
//   var urlPath = $("#url-path").val();
//   var user_id = $("#user_id").val();

//   var btn = $("#login-btn");
  
//   if($.trim($("#password").val()) == "" ){
//       //jQuery("#login-alert").css('display', 'block');
//       //jQuery("#login-alert").html(" Enter your login details");
//       Toast.fire({
//         icon: 'error',
//         title: 'Please enter your new password!'
//       });
//       //window.alert('Fields empty!');


//   }else if($.trim($("#c-password").val()) == ""){

//     Toast.fire({
//       icon: 'error',
//       title: 'Please confirm your new password!'
//     });
//     //window.alert('Fields empty!');

//   }else{
  
//       $.ajax({
//       headers: {
//       'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//        },
//       type: "POST",
//       dataType: "json",
//       url: action,
//       data: {"user_id": user_id, "password": password, "password_confirmation": cpassword},
//       beforeSend:function(){
          
//           //$('.login-status').html(" Attempting to login");
//           Toast.fire({
//             icon: 'info',
//             title: 'Processing....'
//           });
//       },
//       complete:function(){
          
//       },

//       success:function(data){
//         if(data.status == true){
          
//             Toast.fire({
//               icon: 'success',
//               title: data.message
//             })
//             window.location = urlPath;
//         }else if(data.status == false){

//           Toast.fire({
//             icon: 'error',
//             title: data.message
//           });

//                 }else{
//                   Toast.fire({
//                     icon: 'error',
//                     title: data
//                   });
            
//                           }
//     },

//       error:function(jqXHR, exception){

//         if(jqXHR.status === 0){
//           Toast.fire({
//             icon: 'warning',
//             title: 'Please check your internet connection'
//           });
//         }else if(jqXHR.status == 404){
//           Toast.fire({
//             icon: 'warning',
//             title: 'Request route not found.'
//           });
//         }else if(jqXHR.status == 500){
//           Toast.fire({
//             icon: 'warning',
//             title: 'Internal Server Error [500]'
//           });
//         }else if(jqXHR.status == 422){
//           var errors = jqXHR.responseJSON;
//           // $.each(json.responseJSON, function (key, value) {
//           //     $('.'+key+'-error').html(value);
//           // });
//           Toast.fire({
//             icon: 'error',
//             title: errors.data.errors
//           });
//         }else if(exception === 'parsererror'){
//           Toast.fire({
//             icon: 'warning',
//             title: 'Requested JSON parse failed'
//           });
//         }else if(exception === 'timeout'){
//           Toast.fire({
//             icon: 'warning',
//             title: 'Time out error'
//           });
//         }else if(exception === 'abort'){
//           Toast.fire({
//             icon: 'warning',
//             title: 'Ajax request aborted'
//           });
//         }
          
//       },
      
//     });

//   }

// });



// jQuery("#register-form").on("submit", function(e){
//   e.preventDefault();
//   var action = jQuery(this).attr("action");
//   var name = jQuery("#name").val();
//   var phone = jQuery("#phone").val();
//   var email = jQuery("#email").val();
//   var age = jQuery("#age").val();
//   var pass = jQuery("#passwd").val();
//   var cpass = jQuery("#cpasswd").val();
  
//   var urlPath = jQuery("#register-url-path").val();
  
//   if(jQuery.trim(jQuery("#name").val()) == ""){
//       jQuery("#register-alert").css('display', 'block');
//       jQuery("#register-alert").html(" Name field is required!");
//   }else if(jQuery.trim(jQuery("#phone").val()) == ""){
//     jQuery("#register-alert").css('display', 'block');
//     jQuery("#register-alert").html(" Phone number is required!");
//   }else if(!Number(jQuery("#phone").val())){
//     jQuery("#register-alert").css('display', 'block');
//     jQuery("#register-alert").html(" phone field accepts numeric data only!");
//   }else if(jQuery.trim(jQuery("#email").val()) == ""){
//     jQuery("#register-alert").css('display', 'block');
//     jQuery("#register-alert").html(" Email field is required!");
//   }else if(jQuery.trim(jQuery("#age").val()) == ""){
//     jQuery("#register-alert").css('display', 'block');
//     jQuery("#register-alert").html(" Enter your age!");
//   }else if(jQuery.trim(jQuery("#passwd").val()) == ""){
//     jQuery("#register-alert").css('display', 'block');
//     jQuery("#register-alert").html(" Enter your password!");
//   }else if(jQuery.trim(jQuery("#cpasswd").val()) != jQuery.trim(jQuery("#passwd").val())){
//     jQuery("#register-alert").css('display', 'block');
//     jQuery("#register-alert").html(" Confirmed password does not match with password entry");
//   }else{
  
//       jQuery.ajax({
//       headers: {
//       'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//        },
//       type: "POST",
//       dataType: "json",
//       url: action,
//       data: {"loginId": loginId, "pass": pass},
//       beforeSend:function(){
//           jQuery('.register-status').html(" Processing data...");
//       },
//       complete:function(){
          
//       },
//       error:function(){
//           jQuery("#register-alert").css('display', 'block');
//           jQuery('#register-alert').html("Please check your internet connection");
          
//       },
//       success:function(data){
//           if(data.success == true){
//               jQuery('.register-status').css('color', 'green');
//               jQuery('.register-status').html(name+' registered successful.');
//           window.location = urlPath+"/profile/"+data.uid;
//           }else if(data.success == false){
//               jQuery("#register-alert").css('display', 'block');
//               jQuery('#register-alert').html(data.message);	
//                   }else{
//               jQuery("#register-alert").css('display', 'block');
//               jQuery('#register-alert').html(data);
//                             }
//       }
//     });

//   }

// });



// jQuery("#services").change(function(e){
//     var service = jQuery(this).val();
//     var path = "";
//     jQuery.ajax({
//           headers: {
//           'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
//            },
//           type: "POST",
//           dataType: "json",
//           url: path,
//           data: {"service": service},
//           beforeSend:function(){
//              jQuery('#request-status').html("Loading data...");
//           },
//           complete:function(){
              
//           },
//           error:function(){
//               jQuery('#request-status').html("Please check your internet connection");
              
//           },
//           success:function(data){
//               if(data.success == true){
//               jQuery('#sub-services').html(data.data);	
//               }else if(data.success == false){
//                   jQuery('#request-status').html(data.message);	
  
//               }else{
//                   jQuery('#request-status').html(data);
//                                 }	
//           }  
//        });
//   });





});


