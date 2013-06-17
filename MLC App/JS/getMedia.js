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
		
	    var myTutors = jQuery.parseJSON(text).tutors;
			
		$('#tutorUL').text('');
	
		for(var i=0; i< myTutors.length; i++)
		{
			var tutor = myTutors[i];
			var li =$('#tutorLI').clone();
			li.removeAttr('id');
			li.appendTo('#tutorUL');
			
			li.find('.tutorName').text(tutor['fName']);
			li.find('.tutorEmail').text(tutor['email']);
			li.data('tutorID','tutor'+i);
			li.find('.tutorEmail').css('visibility','hidden');
			
			li.click( function()
			{
				var clickedTutor = $(this);
				
				var uniqueID = clickedTutor.data('tutorID');
				var email = clickedTutor.find('.tutorEmail').text();
				alert( uniqueID + '  ' +email);
				clickedTutor.removeClass('tutorName');
				clickedTutor.addClass('tutorEmailClicked');
			});
		}

	}
		
}