var nameop=document.querySelector("#sample3");
var comm=document.querySelector("#sample5");
var allPost=document.querySelector(".ap");
var rn=document.getElementById("rn");
var bod=document.querySelector(".frm");
var non=document.getElementById("non");
var k=0;

namee();
function nameOfPer(){

var htwo=document.querySelector("h2");
var hthree=document.querySelector("h3");


    var nop = localStorage.getItem('nop');// return null or string
    var nopExist = false;

    if (nop == null) {
        nop = [];
    }
    else {
        nop = JSON.parse(nop);
    }
    var nope = {
        nameop: nameop.value,
        comment:comm.value
       
    }
    if(nameop.value=="" || comm.value=="")
    {
            htwo.textContent="ERROR";
            hthree.textContent="Cannot submit empty fields.Kindly write something";
    }else{
    htwo.textContent="Thanks for posting";
hthree.textContent="Your DUA has posted.kindly cancel this popup if u want to post more or";
        nop.push(nope);
        nop = JSON.stringify(nop);
        localStorage.setItem('nop', nop);

        
     
    }
}

function allpost(){
k++;
    if(k==1){
	    var nop = localStorage.getItem('nop');
	    nop = JSON.parse(nop);
    if(nop.length==0)
    {
        return false;
    }else{
        bod.innerHTML="";
	    for (var i = 0; i < nop.length; i++) {

            //   $(".non").append("<li><span><i class='fa fa-trash'></i></span> " + value + "</li>");
              $("#non").append("<ul><li id='l'> " + nop[i].nameop + ":</li> <br></ul>");
            //   $("#non").append("<div id='come' > <span class='msg'>" + nop[i].comment + "</span> </div><br><br>");
              $("#non").append("<div id='come' > <p class='msg'>" + nop[i].comment + "</p> </div><br><br>");
              
  }
              $("#non").append("<button id='butt'class='btn btn-primary' onclick='buttfunc();' >BACK</button>")
  return true;
    }
	
	
}

}


function namee(){
var users = localStorage.getItem('users');
var ide = localStorage.getItem('ide');
ide=JSON.parse(ide);
users=JSON.parse(users);
	    // if (users == null) {
	    //     users = [];
	    // }
	    // else {
	    //     users = JSON.parse(users);
	    // }
	    // var authantication = false;
	
	    for (var i = 0; i < ide.length; i++) {
	        // if (users[i].email == emailo.value && users[i].password==passwordo.value ) {
	        //     authantication = true;
                var kil=ide[i].firstnname;
              var  fname=users[kil].firstname;
                // rn.textContent=fname;
                
                // var fname=users[i].firstname.toUpperCase();
                rn.innerHTML=fname + "<span class='caret'></span>";
                // break;
	        }
                
	        
	    }
    // }



// rn.innerHTML=fname + "<span class='caret'></span>";
function buttfunc(){
window.location.reload();
k=0;
}
