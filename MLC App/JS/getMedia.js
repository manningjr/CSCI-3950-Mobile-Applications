// JavaScript Document
// mediaDisplay.js

var requestObject = false;
requestObject = new XMLHttpRequest();
$(document).ready(function()
{
	alert("hello2");
});
function initializeData()
{
	alert("hello");
	requestObject.open("GET","php/getTitle.php",true);
	requestObject.onreadystatechange = showTitleContent;
	requestObject.send(null);
}

function showTitleContent()
{
	if (requestObject.readyState == 4) //Object request complete.
	{

		var text = requestObject.responseText;
		alert("hello");
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