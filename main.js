prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';  
    }
    );
}
console.log("ml5 version: " ,ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gasz4A74I/model.json', modelLoaded);
function modelLoaded()
{
    console.log('Model is Loaded');
}
function speak()
{
    var synth = window.speechSynthesis;
    var speak_data_1 = "The First Prediction is "+prediction_1;
    var speak_data_2 = "and the second prediction is "+prediction_2;
    var utterThis  = new SpeechSynthesisUtterance(speak_data_1+speak_data_2); 
    synth.speak(utterThis);
}
function check()
{
    img = document.getElementById('captured_image');
    
}
function getResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "happy")
        {
            document.getElementById("update_emoji").innerHTML = "&#128522;";
        }
        if(results[0].label == "sad")
        {
            document.getElementById("update_emoji").innerHTML = "&#128532;";
        }
        if(resutlts[0].label == "angry")
        {
            document.getElementById("update_emoji").innerHTML = "&#128548;";
        }
        if(results[1].label == "happy")
        {
        }
        if(results[1].label == "sad")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128532;";
        }
        if(resutlts[1].label == "angry")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128548;";
        }
    }
}