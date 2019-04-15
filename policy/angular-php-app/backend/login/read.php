<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

$users = [];
$sql = "SELECT id, email, password FROM users";

if($result = mysqli_query($login,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
      $users[$i]['id']= $row['id'];
      $users[$i]['email']= $row['email'];

      $users[$i]['password']= $row['password'];

    // $policies[$i]['id']    = $row['id'];
    // $policies[$i]['number'] = $row['number'];
    // $policies[$i]['amount'] = $row['amount'];
    // $policies[$i]['name'] = $row['name'];

// echo "".$policies[$i]['id'] ."".$policies[$i]['number']. "".$policies[$i]['amount'] ."".$policies[$i]['name'] ;
    $i++;
  }
// remove below code 
  echo json_encode($users);
}
else
{
  http_response_code(404);
}
?>