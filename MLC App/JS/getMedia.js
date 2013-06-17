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
	if (requestObject.readyState == 4)
	{

		var text = requestObject.responseText;
		alert(text);
	    var myMedia = jQuery.parseJSON(text).media;
			
		$('#mediaUL').text('');
	
		for(var i=0; i< myMedia.length; i++)
		{
			var media = myMedia[i];
			var li =$('#mediaLI').clone();
			li.removeAttr('id');
			li.appendTo('#mediaUL');
			
			li.find('.mediaTitle').text(tutor['title']);
			li.find('.mediaType').text(tutor['mediaType']);
			li.find('.mediaYear').text(tutor['year']);
			li.find('.mediaLanguage').text(tutor['language']);
			li.find('.mediaAvaliable').text(tutor['available']);
			li.data('mediaID','media'+i);
			
			/*
			li.click( function()
			{
				var clickedTutor = $(this);
				
				var uniqueID = clickedTutor.data('tutorID');
				var email = clickedTutor.find('.tutorEmail').text();
				alert( uniqueID + '  ' +email);
				clickedTutor.removeClass('tutorName');
				clickedTutor.addClass('tutorEmailClicked');
			});*/
		}

	}
		
}