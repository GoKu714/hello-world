
// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("#sub")
      .addEventListener("click", function () {
      	var name = document.getElementById("name").value;
      	var message = document.getElementById("welcoming_guest").textContent;
      	message += "Hello "+name;
        var pass1 = document.getElementById("pass1").value;
        var pass2 =document.getElementById("pass2").value;
        if(pass1!=pass2)
        	document.querySelector("#informer").textContent = "Entered passwords do not match!!";
        else

      });
  }
);






