<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SignUp Form</title>
    <link rel="stylesheet" href="style.css" type="text/css">
    <link rel="stylesheet" href="login.css" type="text/css">
    <link rel="stylesheet" href="signup.css" type="text/css">

   
</head>
<body>

    <div class="topnav" id="myTopnav">
        <a href="#home" class="active">Home</a>
        <a href="#contact">Contact</>
        <a href="#about">About</a>
        <button  id="some" onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Sign Up</button>
        <button id="some" onclick="document.getElementById('id02').style.display='block'" style="width:auto;">Login</button>
		<button  id="some" onclick="document.getElementById('id03').style.display='block'" style="width:auto;">regitration block</button>

    </div>

    
    
    <!-- <button onclick="document.getElementById('id02').style.display='block'" style="width:auto;">Login</button>
    <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Sign Up</button> -->


     

    <div id="id02" class="modal">
        
        <form class="modal-content animate" action="/action_page.php" method="post">
          <div class="imgcontainer">
            <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
            <img src="img.png" alt="Avatar" class="avatar">
          </div>
      
          <div class="container2">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required>
      
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>
              
            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>
          </div>
      
          <div class="container2" style="background-color:#f1f1f1">
            <button type="button" onclick="document.getElementById('id02').style.display='none'" class="cancelbtn2">Cancel</button>
            <span class="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>
    </div>
    
    <!-- <h2>Modal Signup Form</h2> -->
    <div id="id03" class="modal">
      
      <form>
        <table>   
          <tr>
             <td>
               NAME  :
             </td>
             <td>
                  <input type="text" name ="">
             </td>
	      </tr>
          <tr>
             <td>
               GENDER  :
             <td>
             <td>
                <input type="radio" name="gender">MALE
	       	    <input type="radio" name="gender">FEMALE 
             </td>
          </tr>
          <tr>
             <td>
               Email :
             </td>
             <td>
                <input type="mail" placeholder="Email" name="">
             </td>
          <tr>
             <td>
                phone no :
             </td>
             <td>
                <select> 
                   <option>977</option>	
                   <option>978</option>	
                   <option>979</option>	
                   <option>976</option>	 
		        </select>
                <input type="phone" placeholder="98480*****" name="">
             </td>
          <tr>
          <tr>
	          <td>
		      <input type="submit" value="submit" name="">
		      </td>
          </tr>	
        </table>	   
      </form>  
	</div>

    <div id="id01" class="modal">
    <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
    <form class="modal-content" action="/action_page.php">
        <div class="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr>
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>

        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
        
        <label>
            <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
        </label>

        <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

        <div class="clearfix">
            <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
            <button type="submit" class="signupbtn">Sign Up</button>
        </div>
        </div>
    </form>
    </div>
	
	

    <script>
        // Get the modal
        var modal = document.getElementById('id01');
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }
         // Get the modal
        var modal = document.getElementById('id02');
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }
    </script>

    <script src="script.js"></script>
</body>
</html>