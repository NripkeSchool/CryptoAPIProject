<?php
    if (!isset($_REQUEST["getData"]))
    {
        http_response_code(400);
        echo("Didn't set");
    }

    $apiKey = "NxKBLUenlfb_6QT0v_8VpBG4OrS6fANx";
    $date = $_REQUEST["getData"];
    $ch = curl_init();
    $link = "https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/minute/".$date."/".$date."?adjusted=true&sort=asc&limit=1439&apiKey=".$apiKey; 
    curl_setopt($ch, CURLOPT_URL, $link);
    # echo($link);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_PROTOCOLS, CURLPROTO_HTTPS);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPGET, true);
    $data = curl_exec($ch);
    curl_close($ch);
    echo($data);
?>