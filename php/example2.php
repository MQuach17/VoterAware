<?php 
	require_once ("VoteSmart.php");
	// specifies that it is a json file
	header('Content-Type: application/json');

	$obj = new VoteSmart();

// bills in 2014
	// $obj->query("Votes.getCategories",Array(
	// 		'year'=>2014
	// 	));

// abortion catgory
	// $obj->query("Votes.getBillsByCategoryYearState",Array(
	// 		'categoryId' => 2,
	// 		'year'=>2014
	// 	));

//abortion bill
	// $obj->query("Votes.getBill",Array(
	// 		'billId' => 17451
	// ));	

// get votes on bill 50042
	// $obj->query("Votes.getBillActionVotes",Array(
	// 		'actionId' => 46995
	// ));	

// get bills voted on by candidate 441, Robert Aderholt, in 2014
	// $obj->query("Votes.getBillsByOfficialYearOffice",Array(
	// 		'candidateId' => 441,
	// 		'year' =>2014
	// ));	

// get candidates by zip
	$obj->query("Officials.getByZip",Array(
			'zip5' => 15213	
	));	

// // get addrss of candidates by id
// 	$obj->query("Address.getOffice",Array(
// 			'candidateId' => 441
// 	));	

// This method dumps all the bills an official has voted on based on the candidateId, officeId, categoryId, and year 
	// $obj->query("Votes.getByOfficial",Array(
	// 		'candidateId' => 441,
	// 		'year' =>2014
	// ));	


	// Get the SimpleXML object
	$x = $obj->getXmlObj();

	// uncomment below to display as a json object/////////
	// echo json_encode($x);
	//////////////////////////////////////////////////////
	

	$json = json_encode($x);
	$jObj= json_decode($json);

	// echo "<pre>";
	var_dump($jObj);


	// echo $jObj->{'billNumber'};
	// echo $jObj->;
	// echo $jObj->{'generalInfo'}->{'title'};
	// echo $json->generalInfo->title;


 ?>