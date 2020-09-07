<?php
    // $arr = json_decode(file_get_contents('data/data.json'), true);
    // $arr->cse=22;
    // // echo $arr['cse'];
    // $newJsonString = json_encode($arr);
    // file_put_contents('data/data.json', $newJsonString);
    // $arr = json_decode(file_get_contents('data/data.json'), true);
    // echo $arr['cse'];



    if(isset($_POST)){
    $post = $_POST['post'];
    $dept = $_POST['dept'];
    
    $json_object = file_get_contents('data/data.json');
    $data = json_decode($json_object, true);

    $data[$dept] = $data[$dept]-1;

    $json_object = json_encode($data);
    file_put_contents('data/data.json', $json_object);
    }

    $data = file_get_contents("data/data.json");
    echo $data;





    // echo $arr['cse'];

    // $post = $_POST['post'];
    // $dept = $_POST['dept'];
    // // if ($_POST['post']) {
    //     $x = file_get_contents("data/data.json");
    //     $jsonString = file_get_contents('data/data.json');
    //     $dataa = json_decode($jsonString, true);
    //     // echo $x;
    //     // echo $data[$dept];

    //     $data[dept] = data[dept]-1;

    //     $newJsonString = json_encode($data);
    //     file_put_contents('data/data.json', $newJsonString);
    // // }
    
    // $data = file_get_contents("data/data.json");
    // echo $data;

    // $file = fopen("scores.txt","w");
    // $updates = rand(50,100).";".rand(100,200).";".rand(120,20);
    // fwrite($file,$updates);
    // $file = fopen("scores.txt","r");
    // echo fread($file,filesize("scores.txt"));
?>