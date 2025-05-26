<?php


// http://localhost/9jamart/backend/api/user/create.php  #POST

if ($_SERVER["REQUEST_METHOD"] == "POST") {

 $json = file_get_contents("php://input");
 $data = json_decode($json, true);

 $db = mysqli_connect("localhost", "root", "", "9jamart");

 $name = $data["name"];
 $email = $data["email"];
 $countryCode = $data["countryCode"];
 $phoneNumber = $data["phoneNumber"];
 $password = $data["password"];
 $houseNo = isset($data["houseNumber"]) ? $data["houseNumber"] : null;
 $street = isset($data["street"]) ? $data["street"] : null;
 $stateOfResidence = $data["stateOfResidence"];
 $countryOfResidence = $data["countryOfResidence"];

 $id = "u_id" . uniqid(uniqid(uniqid(), true), true);
 $hash = password_hash($password, PASSWORD_BCRYPT);

 $sql = "INSERT INTO users VALUES('$id', '$email', '$countryCode', '$phoneNumber', '$hash', '$houseNo', '$street', '$stateOfResidence', '$countryOfResidence', NOW(), NOW())";

 $insertUser = mysqli_query($db, $sql);

 if ($insertUser == false) {
  echo json_encode([
   "status" => "not_ok",
   "error" => "Something went wrong",
   "data" => null
  ]);

  exit;
 }

 echo json_encode([
   "status" => "ok",
   "error" => "Something went wrong",
   "data" => null
  ]);
}