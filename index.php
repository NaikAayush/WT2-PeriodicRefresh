<?php
    $post = $_POST['post'];
    if($post=="post"){
    
    $dept = $_POST['dept'];

    $json_object = file_get_contents('data/data.json');
    $data = json_decode($json_object, true);

    if($data[$dept]<=0){
        http_response_code(400);
        $msg = "No seat left in".$dept;
        // $data = file_get_contents("data/data.json");
        echo $msg;
        }
    
   
    else{
    $data[$dept] = $data[$dept]-1;
    $json_object = json_encode($data);
    file_put_contents('data/data.json', $json_object);
    } 
}

    $data = file_get_contents("data/data.json");
    echo $data;


?>