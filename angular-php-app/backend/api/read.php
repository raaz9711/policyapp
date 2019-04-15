<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

$policies = [];
$sql = "SELECT id, number, amount, name FROM policies";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $policies[$i]['id']    = $row['id'];
    $policies[$i]['number'] = $row['number'];
    $policies[$i]['amount'] = $row['amount'];
    $policies[$i]['name'] = $row['name'];

// echo "".$policies[$i]['id'] ."".$policies[$i]['number']. "".$policies[$i]['amount'] ."".$policies[$i]['name'] ;
    $i++;
  }

  echo json_encode($policies);
}
else
{
  http_response_code(404);
}
?>