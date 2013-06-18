<?php
	include ('db_connect.php');
	
	$link=db_connect();
	$sql = "SELECT node.title, 
	               field_data_field_media_type.field_media_type_value,
				   field_data_field_year.field_year_value,
				   field_data_field_language.field_language_value,
				   field_data_field_available.field_available_value".
	
	        " FROM ".
	       " node, 
		     field_data_field_media_type,
			 field_data_field_year,
			 field_data_field_language,
			 field_data_field_available
			 
			  WHERE
		          node.nid = field_data_field_media_type.entity_id 
			  AND node.nid = field_data_field_year.entity_id 
			  AND node.nid = field_data_field_language.entity_id 
		  	  AND node.nid = field_data_field_available.entity_id "
			;
	
	// WHERE node.title LIKE 'Men%'  ".
	$result = db_query($sql,$link);

	//---Create JSON encoded Array
	$myArray = array();
	while ($row=mysql_fetch_array($result,MYSQL_ASSOC))
	{ //Create a name/value array for each field
		$d = array('title' => $row['title'] ,
				   'mediaType' => $row['field_media_type_value'] ,
				   'year' => $row['field_year_value'] ,
				   'language' => $row['field_language_value'] ,
				   'available' => $row['field_available_value'] 
		           );
		array_push($myArray,$d);				
	}
	$newArray = array('media' =>$myArray);
	$output= json_encode($newArray);
	echo $output;
	mysql_close($link);
?>