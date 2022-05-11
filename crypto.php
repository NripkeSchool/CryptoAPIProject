<?php
    if (!isset($_POST["getData"]))
    {
        http_response_code(400);
        echo("Didn't set");
    }

    $ch = curl_init("https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/12/second/2021-07-22/2021-07-22?apiKey=NxKBLUenlfb_6QT0v_8VpBG4OrS6fANx");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    $data = curl_exec($ch);
    curl_close($ch);

    echo(json_decode($data));
?>