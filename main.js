var SpeechRecognition = window.webkitSpeechRecognition;
// the above code is speech API that we are using 

var recognition=new SpeechRecognition();
// the above code shows an instance of the API
function start_app()
{
   document.getElementById("textbox").innerHTML="";
   recognition.start();
//    start is predefined function of API
}


recognition.onresult=function(event) {
// onresult is also a predefined function
console.log(event);   


var Content = event.results[0][0].transcript;

document.getElementById("textbox").innerHTML= Content
console.log(Content)
if(Content=="take my selfie"){
    speak()

}

}

function speak(){
var synth= window.speechSynthesis;
// The above code is the second speech API that we would be using to convert the text to speech.
// speak_data= document.getElementById("textbox").value;
// The above code will pick up the text from the text box, and store it in a variable.
speak_data="taking your selfie in 5 seconds"
var utterThis =new SpeechSynthesisUtterance(speak_data);
// The above code will only help us convert the text into speech.
synth.speak(utterThis);
// The above code is the speech API converting the text.
Webcam.attach(camera);

setTimeout(function(){
 take_snapshot(); 
save();
},5000)
}


function take_snapshot(){
Webcam.snap(function(data_uri){   
document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'">'   
})
}

Webcam.set({
height:300,
width:350,
image_format:"png",
png_quality:90,
crop_width:300,
crop_height:250
});

camera=document.getElementById("camera");

function save()
{
link = document.getElementById("link");
image_src = document.getElementById("captured_image").src;
link.href = image_src
link.click();

}








