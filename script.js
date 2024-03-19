var btn= document.getElementById("btn");
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const speechGrammarList =  window.webkitSpeechGrammarList || window.mozSpeechGrammarList || window.msSpeechGrammarList || window.oSpeechGrammarList || window.SpeechGrammarList;





var recognition=new SpeechRecognition();


var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral'];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
var speechRecognitionList = new speechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
//recognition.interimResults = false;
recognition.maxAlternatives = 1;



recognition.onstart=function()
{
   console.log("Recognition is started!");
};

var noteContent="";
recognition.continuous=true;
var current;
var transcript;
var previous_transcript="";
var temp_note_content="";




recognition.onresult=function(event)
{
    let cur = event.resultIndex;
    current=cur;
    var trans = event.results[cur][0].transcript;
    transcript=trans;
	
	
	
	
	/*   
	  
	
	*/

 /*
    if(transcript.includes("open H1 tag"))
    {
        transcript=`<h1>`;
    }
    else if(transcript.includes("close H1 tag"))
    {
        transcript=`</h1>`;
    }
    else if(transcript.includes(` Open style tag`))
    {
        transcript=`<style>`;
    }
    else if(transcript.includes(`close style tag`))
    {
        transcript=`</style>`;
    }
    else if(transcript.includes(`open curly brace`))
    {
        transcript=`{`;
    }
    else if(transcript.includes(`close curly brace`)) 
    {
        transcript=`}`;
    }
	else if(transcript.includes(`Poland`))
	{
		transcript=`:`;
	}
    else if(transcript.includes(`semi colon`)) 
    {
        transcript=`;`;
    }
    else if(transcript.includes(`colon`)) 
    {
        transcript=`:`;
    }
    else if(transcript.includes(`new line`)) 
    {
        transcript=`<br/>`;
    }
    else if(transcript.includes(`background colour`)) 
    {
        transcript=`background-color`;
    }

*/

//open code if
   if(  transcript.includes("hello")||transcript.includes("Hello") )  //jab tak write over na aye
   {
	   
	if(transcript.includes("clear all"))
	{
	   var check=confirm("Whole content will be removed!");
	   if(check==true)
	   {
	     noteContent="cleared";
	   }	 
	   transcript="";
	}		
	   
	   
	if(transcript.includes("reverse action"))
	{
		//transcript me previous transcript ki last occurence find kro
		
		alert("This action will be reversed!");
		var temp_string=$("#txt_area").val();
		var index=temp_string.lastIndexOf(previous_transcript);
		noteContent=temp_string.slice(0,index);
		
		transcript="";
	
	}
	   
	//---------   
	   
   else if(transcript.includes("heading"))
   {
	    if(transcript.includes("H1") || transcript.includes("h1"))
		  {
            if(transcript.includes("open") || transcript.includes("Open"))
                transcript=`<h1>\n`;	
			else if(transcript.includes("close")||transcript.includes("Close"))	
			    transcript=`\n</h1>\n`;
			else
		     {
			transcript="";
			alert("Didn't recognise the command!");
		     }	
		  }
		  
		  else if(transcript.includes("H2") || transcript.includes("h2"))
		  {
            if(transcript.includes("open")||transcript.includes("Open"))
                transcript=`<h2>\n`;	
			else if(transcript.includes("close")||transcript.includes("Close"))	
			    transcript=`\n</h2>\n`;
			else
		     {
			transcript="";
			alert("Didn't recognise the command!");
		     }	
		  }
		  
		  else if(transcript.includes("H3") || transcript.includes("h3"))
		  {
            if(transcript.includes("open")||transcript.includes("Open"))
                transcript=`<h3>\n`;	
			else if(transcript.includes("close")||transcript.includes("Close"))	
			    transcript=`\n</h3>\n`;
			else
		     {
			transcript="";
			alert("Didn't recognise the command!");
		     }	
		  }
		  
		  else if(transcript.includes("H4") || transcript.includes("h4"))
		  {
            if(transcript.includes("open")||transcript.includes("Open"))
                transcript=`<h4>\n`;	
			else if(transcript.includes("close")||transcript.includes("Close"))	
			    transcript=`\n</h4>\n`;
			else
		     {
			transcript="";
			alert("Didn't recognise the command!");
		     }	
		  }
		  
		  else if(transcript.includes("H5") || transcript.includes("h5"))
		  {
            if(transcript.includes("open")||transcript.includes("Open"))
                transcript=`<h5>\n`;	
			else if(transcript.includes("close")||transcript.includes("Close"))	
			    transcript=`\n</h5>\n`;
			else
		     {
			transcript="";
			alert("Didn't recognise the command!");
		     }	
		  }
		  
		  else if(transcript.includes("H6") || transcript.includes("h6"))
		  {
            if(transcript.includes("open")||transcript.includes("Open"))
                transcript=`<h6>\n`;	
			else if(transcript.includes("close")||transcript.includes("Close"))	
			    transcript=`\n</h6>\n`;
			else
		     {
			transcript="";
			alert("Didn't recognise the command!");
		     }	
		  }
		else
		{
			transcript="";
			alert("Didn't recognise the command!");
		}
   }
   
   
   
   else if(transcript.includes("list")||transcript.includes("List"))
   {
	  if(transcript.includes("ordered")||transcript.includes("Ordered"))
	  {
		if(transcript.includes("Open")||transcript.includes("open"))
		{
			transcript="\n<ol>\n";
	    }
		else if(transcript.includes("close")||transcript.includes("Close"))
		{
			transcript="\n</ol>\n";
	    }
		else
		{
			transcript="";
			alert("Didn't recognise the command!");
		}
	  }
	  else if(transcript.includes("Unordered")||transcript.includes("unordered"))
	  {
		if(transcript.includes("Open")||transcript.includes("open"))
		{
			transcript="\n<ul>\n";
	    }
		else if(transcript.includes("close")||transcript.includes("Close"))
		{
			transcript="\n</ul>\n";
	    }
		else
		{
			transcript="";
			alert("Didn't recognise the command!");
		}  
	  }
	  else
	  {
		if(transcript.includes("open list")||transcript.includes("Open list"))  
		{
			transcript="\n<li>\n";
		}
		else if(transcript.includes("close list")||transcript.includes("Close list"))  
		{
			transcript="\n</li>\n";
		}
		else
		{
			transcript="";
			alert("Didn't recognise the command!");
		}
	  }
   }
   
   
   
   //-----
   
   
   else if(transcript.includes("table"))
  {
	if(transcript.includes("open"))
	{
		if(transcript.includes("header"))
	     transcript="\n<th>\n";
		else if(transcript.includes("row"))
         transcript="\n<tr>";		
		else if(transcript.includes("data"))
         transcript="\n<td>\n";
        else
		 transcript="\n<table>\n";			
	}
	else if(transcript.includes("close"))
	{
		if(transcript.includes("header"))
	     transcript="\n</th>\n";
		else if(transcript.includes("row"))
         transcript="\n</tr>";		
		else if(transcript.includes("data"))
         transcript="\n</td>\n";
        else
		 transcript="\n</table>\n";	
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}
	
  }
    
   
   
   //--------
   
  else if(transcript.includes("anchor"))
  {
	if(transcript.includes("open"))
	var anchor_src=prompt("Paste any webpage URL");
	if(anchor_src!=null)
	{
	  transcript=`\n<a href="${anchor_src}"  target="_blank">\n`;
	}
	else if(transcript.includes("close"))
	{
		transcript=`\n</a>\n`;
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}
	
  }
   
   
   
   //----
   
   
  else if(transcript.includes("abbreviation"))
  {  
	
	if(transcript.includes("open"))
	{
		var full_form=prompt("Kindly, paste the full form you want to show!");
		if(full_form!=null)
		{
		  transcript=`\n<abbr title="${full_form}">`;
		}  
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</abbr>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   //-----
   
  else if(transcript.includes("address"))
  {
	if(transcript.includes("open"))
	{
		transcript="<address>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</address>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   //-----
   
   
  else if(transcript.includes("area"))
  {
	if(transcript.includes("open"))
	{
		transcript="<area>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</area>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   //-----
   
   
  else if(transcript.includes("article"))
  {
	if(transcript.includes("open"))
	{
		transcript="<article>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</aticle>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   //-----
   
   
  else if(transcript.includes("anchor"))
  {
	if(transcript.includes("open"))
	{
		transcript="<a>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</a>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
   //-----
  
  else if(transcript.includes("aside"))
  {
	if(transcript.includes("open"))
	{
		transcript="<aside>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</aside>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
   //-----
   
  else if(transcript.includes("audio"))
  {
    var audio_src=prompt("Paste the URL for audio!");
	if(audio_src!=null)
	{
		transcript=`<audio controls>
		              <source src=${audio_src} type="audio/mp3">
	                </audio>`;
	}
  }
   
   //-----
   
  else if(transcript.includes("anchor"))
  {
	if(transcript.includes("open"))
	{
		transcript="<a>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</a>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   //-----
   
    
 else if(transcript.includes("B"))
  {
	if(transcript.includes("open"))
	{
		transcript="<b>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</b>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
	

   //-----	
   
   
  else if(transcript.includes("base"))
  {
	if(transcript.includes("open"))
	{
		transcript="<base>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</base>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
   //-----
   
  else if(transcript.includes("BDI"))
  {
	if(transcript.includes("open"))
	{
		transcript="<bdi>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</bdi>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
   //------


  else if(transcript.includes("BDO"))
  {
	if(transcript.includes("open"))
	{
		transcript="<bdo>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</bdo>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
  
  //-------
  
  
    else if(transcript.includes("block quote")|| transcript.includes("Block quote")|| transcript.includes("block coat")|| transcript.includes("black coat")|| transcript.includes("blockquote"))
  {
	if(transcript.includes("open"))
	{
		transcript="<blockquote>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</blockquote>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   //-------
   
   
   
  else if(transcript.includes("body"))
  {
	if(transcript.includes("open"))
	{
		transcript="<body>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</body>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
  //-----
  
  
  else if(transcript.includes("break"))
  {
		transcript="<br/>";
		
  }
  
   //-----
   
   
  else if(transcript.includes("button"))
  {
	if(transcript.includes("open"))
	{
		transcript="<button>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</button>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
  //------
  
  
  
  
  else if(transcript.includes("canvas"))
  {
	if(transcript.includes("open"))
	{
		transcript="<canvas>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</canvas>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   //-------
   
   
   
   
     else if(transcript.includes("caption"))
  {
	if(transcript.includes("open"))
	{
		transcript="<caption>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</caption>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   //-----
   
   else if(transcript.includes("cite"))
  {
	if(transcript.includes("open"))
	{
		transcript="<cite>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</cite>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   //-----
   
   
   // Special Case
   
     else if(transcript.includes("code"))
  {
	if(transcript.includes("open"))
	{
		transcript="<button>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</button>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   //--------
   
  else if(transcript.includes("column"))
  {
	if(transcript.includes("open"))
	{
		transcript="<column>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</column>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   //--------
   
   
  else if(transcript.includes("column group"))
  {
	if(transcript.includes("open"))
	{
		transcript="<colgroup>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</colgroup>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   //-------
   
  else if(transcript.includes("data"))
  {
	if(transcript.includes("open"))
	{
		transcript="<data>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</data>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   //-------
   
   
  else if(transcript.includes("data list"))
  {
	if(transcript.includes("open"))
	{
		transcript="<datalist>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</datalist>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   //------
   
   else if(transcript.includes("DD"))
  {
	if(transcript.includes("open"))
	{
		transcript="<DD>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</DD>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   //-------
   
   else if(transcript.includes("deleted"))
  {
	if(transcript.includes("open"))
	{
		transcript="<del>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</del>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   //------
   
  else if(transcript.includes("details"))
  {
	if(transcript.includes("open"))
	{
		transcript="<details>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</details>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   //-------
   
      
 else if(transcript.includes("definition"))
  {
	if(transcript.includes("open"))
	{
		transcript="<dfn>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</dfn>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   //--------
   
   
 else if(transcript.includes("dialog"))
  {
	if(transcript.includes("open"))
	{
		transcript="<dialog open>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</dialog>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   
   
   //--------
   
   
   
  else if(transcript.includes("division"))
  {
	if(transcript.includes("open"))
	{
		transcript="<div>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</div>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   //-------
   
   
   else if(transcript.includes("description list"))
  {
	if(transcript.includes("open"))
	{
		transcript="<dl>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</dl>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   //-------
   
   
  else if(transcript.includes("description term"))
  {
	if(transcript.includes("open"))
	{
		transcript="<dt>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</dt>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   //--------
   
   
  else if(transcript.includes("emphasized"))
  {
	if(transcript.includes("open"))
	{
		transcript="<em>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</em>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   //--------
   
   
  else if(transcript.includes("embed"))
  {
	if(transcript.includes("open"))
	{
		transcript="<embed>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</embed>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   //--------
   
   
  else if(transcript.includes("field set"))
  {
	if(transcript.includes("open"))
	{
		transcript="<fieldset>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</fieldset>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   //--------
   
   
  else if(transcript.includes("figure caption"))
  {
	if(transcript.includes("open"))
	{
		transcript="<figcaption>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</figcaption>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   //-------
   
   
  else if(transcript.includes("figure"))
  {
	if(transcript.includes("open"))
	{
		transcript="<figure>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</figure>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   //--------
   
   
  else if(transcript.includes("footer"))
  {
	if(transcript.includes("open"))
	{
		transcript="<footer>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</footer>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   //---------
   
   
  else if(transcript.includes("form"))
  {
	if(transcript.includes("open"))
	{
		transcript="<form>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</form>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   //------------
   
  else if(transcript.includes("head"))
  {
	if(transcript.includes("open"))
	{
		transcript="<head>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</head>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   //-----------
   
   
  else if(transcript.includes("header"))
  {
	if(transcript.includes("open"))
	{
		transcript="<header>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</header>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   
   //----------
   
   
  else if(transcript.includes("HR")||transcript.includes(" HR"))
  {
		transcript="<hr/>";	
  }
   
   
   //----------
   
   
  else if(transcript.includes("HTML"))
  {
	if(transcript.includes("open"))
	{
		transcript="<html>";
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</html>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   //----------
   
   
  else if(transcript.includes("italicize")||transcript.includes("Italicize"))
  {
	if(transcript.includes("open"))
	{
		transcript="<i>\n"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</i>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   //--------
   
  else if(transcript.includes("iframe")||transcript.includes("I frame"))
  {
	if(transcript.includes("open"))
	{
		transcript="<iframe>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</iframe>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   //----------
   
  else if(transcript.includes("image"))
  {
	  
	//transcript="\n<img src='data:image/jpeg;base64,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'>\n";
    var img_src=prompt("Paste image URL");
      
	  if(img_src!=null)
      transcript=`<img src=${img_src} />`;	
  }
   
   //----------
   
   

   //------------
   
  else if(transcript.includes("input"))
  {
    var input_type=prompt("Give the type of input box you want to create!!");	
	if(input_type!=null)
	{
	  transcript=`<input type="${input_type}"/>`;;
	} 
  }
   
   
   //---------
   
   
  else if(transcript.includes("keyboard"))
  {
	if(transcript.includes("open"))
	{
		transcript="<kbd>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</kbd>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   //---------
   
   
  else if(transcript.includes("label"))
  {
	if(transcript.includes("open"))
	{
		transcript="<label>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</label>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
  
   //---------
   
   
  else if(transcript.includes("legend"))
  {
	if(transcript.includes("open"))
	{
		transcript="<legend>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</legend>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   //----------
   
   
   else if(transcript.includes("link"))
  {
	if(transcript.includes("open"))
	{
		transcript="<link>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</link>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   //----------
   
   
   else if(transcript.includes("main"))
  {
	if(transcript.includes("open"))
	{
		transcript="<main>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</main>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   //----------
   
   
   else if(transcript.includes("map"))
  {
	if(transcript.includes("open"))
	{
		transcript="<map>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</map>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   //----------
   
    else if(transcript.includes("mark"))
  {
	if(transcript.includes("open"))
	{
		transcript="<mark>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</mark>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   //----------
   
   
   else if(transcript.includes("meta"))
  {
	if(transcript.includes("open"))
	{
		transcript="<meta>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</meta>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   
   //--------------
   
   
   
   else if(transcript.includes("meter")||transcript.includes("metre"))
  {
	if(transcript.includes("open"))
	{
		transcript="<meter>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</meter>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   //--------------
   
   
     else if(transcript.includes("navigation"))
  {
	if(transcript.includes("open"))
	{
		transcript="<nav>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</nav>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   //--------------
   
  else if(transcript.includes("no script"))
  {
	if(transcript.includes("open"))
	{
		transcript="<noscript>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</noscript>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   //---------------
   
   
     else if(transcript.includes("object"))
  {
	if(transcript.includes("open"))
	{
		transcript="<object>";
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</object>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   //-------------
   
   
     else if(transcript.includes("opt group"))
  {
	if(transcript.includes("open"))
	{
		transcript="<optgroup>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</optgroup>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   //--------------
   
   
     else if(transcript.includes("output"))
  {
	if(transcript.includes("open"))
	{
		transcript="<output>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</output>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
  
  
  //----------
  
  
  
     
     else if(transcript.includes("option"))
  {
	if(transcript.includes("open"))
	{
		transcript="<option>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</option>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   //--------------
   
   
 else if(transcript.includes("paragraph"))
  {
	if(transcript.includes("open"))
	{
		transcript="<p>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</p>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   
   
   
   //--------------
   
   
   
   
   
   
   else if(transcript.includes("parameter"))
  {
	if(transcript.includes("open"))
	{
		transcript="<param>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</param>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
   
   
   
   
   //--------------
   
   
   
   else if(transcript.includes("picture"))
  {
	if(transcript.includes("open"))
	{
		transcript="<picture>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</picture>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command! ");
	}	
  }
   
   
   
   //-------------
   
     

     else if(transcript.includes("pre"))
  {
	if(transcript.includes("open"))
	{
		transcript="<pre>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</pre>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
	 
   
  //-------------   
  
  
  
     else if(transcript.includes("progress"))
  {
	if(transcript.includes("open"))
	{
		transcript="<progress>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</progress>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
	
  
  
  //----------
  
  
  else if(transcript.includes("Q"))
  {
	if(transcript.includes("open"))
	{
		transcript="<q>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</q>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
  
  //---------------
  
  
  else if(transcript.includes("RP"))
  {
	if(transcript.includes("open"))
	{
		transcript="<rp>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</rp>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
  
  //---------------
  
  
  else if(transcript.includes("RT"))
  {
	if(transcript.includes("open"))
	{
		transcript="<rt>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</rt>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
  
  
  //---------------
  
  
  else if(transcript.includes("ruby"))
  {
	if(transcript.includes("open"))
	{
		transcript="<ruby>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</ruby>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
  
  //--------------
  
  
  
  else if(transcript.includes("S"))
  {
	if(transcript.includes("open"))
	{
		transcript="<s>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</s>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
  
  //--------------
  
  
 
  
  
  
  
  //---------------
  
  
  
  else if(transcript.includes("script"))
  {
	if(transcript.includes("open"))
	{
		transcript="<script>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</script>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
  //------------
  
  
  
  else if(transcript.includes("section"))
  {
	if(transcript.includes("open"))
	{
		transcript="<section>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</section>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
 
  //--------------
  
  
  else if(transcript.includes("sample"))
  {
	if(transcript.includes("open"))
	{
		transcript="<samp>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</samp>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
  
  //---------------
  
  
  else if(transcript.includes("select"))
  {
	if(transcript.includes("open"))
	{
		transcript="<select>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</select>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
  //---------------
   
   
   
   else if(transcript.includes("small"))
  {
	if(transcript.includes("open"))
	{
		transcript="<small>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</small>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
   
  //-------------- 
  
  
  else if(transcript.includes("source"))
  {
	if(transcript.includes("open"))
	{
		transcript="<source>";
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</source>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
  //------------
  
  
  else if(transcript.includes("span"))
  {
	if(transcript.includes("open"))
	{
		transcript="<span>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</span>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
  
  
  //------------
  
  else if(transcript.includes("strong"))
  {
	if(transcript.includes("open"))
	{
		transcript="<strong>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</strong>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
  
  //----------
  
  
  else if(transcript.includes("style"))
  {
	if(transcript.includes("open"))
	{
		transcript="<style>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</style>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
  
  //-----------
  
  
  
  else if(transcript.includes("sub scripted"))
  {
	if(transcript.includes("open"))
	{
		transcript="<sub>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</sub>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
  
  //----------
  
  
  else if(transcript.includes("summary"))
  {
	if(transcript.includes("open"))
	{
		transcript="<summary>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</summary>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
  
  //------------
  
  
  
  
  else if(transcript.includes("super scripted"))
  {
	if(transcript.includes("open"))
	{
		transcript="<sup>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</sup>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
  //-----------
  
  
  else if(transcript.includes("SVG"))
  {
	if(transcript.includes("open"))
	{
		transcript="<svg>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</svg>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
  //-----------
  
  
  
  
  
  else if(transcript.includes("variable"))
  {
	if(transcript.includes("open"))
	{
		transcript="<var>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</var>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }
  
  //-----------
  
  
  
  
  else if(transcript.includes("video"))
  {
	var vid_src=prompt("Paste video url");
	
	if(vid_src!=null)
	{
	transcript=`\n<video width="320" height="240" controls>
  <source src=${vid_src} type="video/mp4">
  <source src=${vid_src} type="video/ogg">
Your browser does not support the video tag.
</video>\n`;
	}

  }
  
  
  
  //-----------
  


   
  else if(transcript.includes("word break"))
  {
	if(transcript.includes("open"))
	{
		transcript="<wbr>"
	}
	else if(transcript.includes("close"))
	{
		transcript="\n</wbr>\n"
	}
	else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}	
  }

   //------------
   
   
   //table tag handle kro yha pr

  
  //-----------
  
  
   else
	{
		transcript="";
		alert("Didn't recognise the command!");
	}

   }//code wala if khatam hua
   


  


/*
     
	   //O
	   
	   case "open object tag":           transcript=`<object>`; break;
	   case "close object tag":          transcript=`</object`; break;
	   case "open ordered list tag":           transcript=`<ol>`; break;
	   case "close ordered list tag":          transcript=`</ol>`; break;
	   case "open opt group tag":           transcript=`<optgroup>`; break;
	   case "close opt group tag":          transcript=`</optgroup>`; break;
	   case "open option tag":           transcript=`<option>`; break;
	   case "close option tag":          transcript=`</option>`; break;
	   case "open output tag":           transcript=`<output>`; break;
	   case "close output tag":          transcript=`</output>`; break;
	   
	   //P

       case "open paragraph tag":           transcript=`<p>`; break;
	   case "close paragraph tag":          transcript=`</p>`; break;	   
	   
  
 */
   


    mobileBug=( current==1 && transcript==event.results[0][0].transcript);
    
    
    if(!mobileBug)
    {
     noteContent+=transcript;
     $("#txt_area").val(noteContent);
    } 

    
   run();	
   previous_transcript=transcript;
    console.log(noteContent);
	

}









/*var mobileRepeating=( current==1 && transcript==event.results[0][0].transcript);

if(!mobileRepeating)
{
    noteContent+=transcript;
    $("#txt_area").val(noteContent);
}
*/


function run()
{
    let code=document.querySelector("#txt_area").value;
    let output = document.querySelector("#frame");
    output.contentDocument.body.innerHTML=code;
}


function fun()
{
	noteContent=$("#txt_area").val();
}
