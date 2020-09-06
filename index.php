<?php
    $data = file_get_contents("data/data.json");

    echo $data;

    // $file = fopen("scores.txt","w");
    // $updates = rand(50,100).";".rand(100,200).";".rand(120,20);
    // fwrite($file,$updates);
    // $file = fopen("scores.txt","r");
    // echo fread($file,filesize("scores.txt"));
?>