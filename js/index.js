$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});



var email = document.getElementById('emailId');
var emailo = document.getElementById('emailIdo');
var password = document.getElementById('password');
var passwordo = document.getElementById('passwordo');
var firstName=document.getElementById('fn');
var lastName=document.getElementById('ln');
var rn=document.getElementById("rn");
var fname;
var lawg=document.getElementById("loog");



function signup() {
    var users = localStorage.getItem('users');// return null or string
    var userExist = false;

    if (users == null) {
        users = [];
    }
    else {
        users = JSON.parse(users);
    }
    var user = {
        firstname:firstName.value,
        email: email.value,
        password: password.value
    }
    for (var i = 0; i < users.length; i++) {
        if (users[i].email == email.value  ) {
            userExist = true;
        }
    }
    if (userExist == true) {
        // authMessage.innerHTML = "user already exists!";
       alert("user already exists!");

    }
    else {
        users.push(user);
        users = JSON.stringify(users);
        localStorage.setItem('users', users);

        email.value = '';
        password.value = '';
          ln.value='';
            fn.value='';

        // authMessage.innerHTML = "Successfully signup!";
          alert("Successfully signup!");
          



    }
}















function login() {
	    var users = localStorage.getItem('users');
	    if (users == null) {
	        users = [];
	    }
	    else {
	        users = JSON.parse(users);
	    }
	    var authantication = false;
	
	    for (var i = 0; i < users.length; i++) {
	        if (users[i].email == emailo.value && users[i].password==passwordo.value ) {
	            authantication = true;

                //  fname=users[i].firstname;
                //  rn.textContent=fname;
        // var naamu = JSON.parse(localStorage.getItem('users'))[i].firstname// return null or string
    // var naamExist = false;
                //from here
    //                         kkk=users[i].firstname;
    //                 var ide = localStorage.getItem('ide');
    //                 if (ide == null) {
	//         ide = [];
	//     }
	//     else {
	//         ide = JSON.parse(ide);
	//     }

    //                         var idm = {
    //     firstnname:kkk   
    // }
    //     ide.push(idm);
    //     ide = JSON.stringify(ide);
    //     localStorage.setItem('ide', ide);
        //there
                    var numbe=i;
                    var ide = localStorage.getItem('ide');
                    if (ide == null) {
	        ide = [];
	    }
	    else {
	        ide = JSON.parse(ide);
        }
                            var idm = {
        firstnname:numbe  
    }
        ide.push(idm);
        ide = JSON.stringify(ide);
        localStorage.setItem('ide', ide);




    }



        }



	        
	    
	    if (authantication == false) {
            alert("Login Failed");
            emailo.onfocus;
            return false;
            
	    } else {

	       alert("login success");
	        email.value = '';
	        password.value = '';
          return true;

	    }
	
	
	}
	
	
