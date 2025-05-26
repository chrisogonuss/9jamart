<?php
if(isset($_COOKIE["user"])){
  header("Location: ./index.html");
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST["email"];
  $password = $_POST["password"];

  $db = mysqli_connect("localhost", "root", "", "9jamart");

  $sql = "SELECT * FROM users where email = '$email'";

  $findUser = mysqli_query($db, $sql);

  if($findUser !== false) {
    // print_r($findUser);

    if(mysqli_num_rows($findUser) > 0) {
      $user = mysqli_fetch_assoc($findUser);

      $verify_password = password_verify($password, $user["password"]);

      if($verify_password) {
        setcookie("user", $user["id"], time() + (30 * 24 * 3600), "/");

        header("Location: ./index.html");
      }
    }
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Log in</title>
  <!-- style css -->
  <link rel="stylesheet" href="./css/login.css/login.css">
</head>

<body>
  <div class="form-flex">
    <div>
      <h1>Log In</h1>
      <p><small>Need an account? <a href="signup.html">Signup</a></small></p>
    </div>
    <div>
      <form method="post">
        <div class="form-input">
          <input type="email" name="email" required placeholder="Email or Username">
          <p><small class="error"></small></p>
        </div>

        <div class="form-input password-block">
          <input type="password" name="password" class="password" required placeholder="**********">
          <button type="button" onclick="togglePassword()">Show</button>
          <p><small class="error"></small></p>
        </div>

        <div class="form-input">
          <span name="terms-and-conditions">By clicking Sign in, you agree to our <a href="">User
              Agreement</a></span>
        </div>

        <div class="form-input">
          <a href="lostpassword.html">Lost Password?</a>
        </div>

        <div class="form-input">
          <input type="submit" value="Log in">
        </div>
      </form>
    </div>
  </div>
  
  <script src="./js/login.js"></script>

</body>

</html>