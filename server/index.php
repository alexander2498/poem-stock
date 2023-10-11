<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *"); 
$data = file_get_contents('./some_text.txt');
echo $data;