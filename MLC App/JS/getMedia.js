// JavaScript Document
// mediaDisplay.js

var requestObject = false;
requestObject = new XMLHttpRequest();

function initializeData()
{
	requestObject.open("GET","php/getTitle.php",true);
	requestObject.onreadystatechange = showTitleContent;
	requestObject.send(null);
}

function showTitleContent()
{
	if (requestObject.readyState == 4) //Object request complete.
	{

		var text = requestObject.responseText;
	    var myMedia = jQuery.parseJSON(text).media;
			
		$('#mediaUL').text('');
	
		for(var i=0; i< myMedia.length; i++)
		{
			var media = myMedia[i];
			var li =$('#mediaLI').clone();
			li.removeAttr('id');
			li.appendTo('#mediaUL');
			
			li.find('.mediaTitle').text(media['title']);
			li.find('.mediaType').text(media['mediaType']);
			li.find('.mediaYear').text(media['year']);
			li.find('.mediaLanguage').text(media['language']);
			li.find('.mediaAvaliable').text('Avaliable: ' + media['available']);
			li.find('.mediaImage').attr('src', "../sites/default/files/" + media['imageTitle']);
			li.data('mediaID','media'+i);
			
		}
	}		
}

//Function reads the form input and querys the database based on that.
function searchDB(){
	var title = $("#name-a").val();
	var type = $("#select-choice-1").val();
	var language = $("#select-choice-2").val();
	alert(title + " " + type + " " + language);
}