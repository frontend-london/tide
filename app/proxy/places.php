<?php

	header('Content-Type: application/json');

	$ch = curl_init("https://maps.googleapis.com/maps/api/place/nearbysearch/json?" . $_SERVER['QUERY_STRING']);

	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

	$output = curl_exec($ch); 

	curl_close($ch);
	
	json_encode($output);
?>