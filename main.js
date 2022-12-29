Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("camera");

function takesnapshot(){
Webcam.snap(function(data_uri)
{
    document.getElementById("result").innerHTML = '<img id= "captured_img"  src= "'+data_uri+'"/> '
      });
}

console.log("ml5version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/sSoQpd_04/model.json", model_loaded);

function model_loaded(){
    console.log("model is loaded");
}

function check(){

    image= document.getElementById("captured_img");
    classifier.classify(image,gotresult);
    
}

function gotresult(error,results){

    if(error){
    console.error("error");}

    else{
    console.log(results);
    document.getElementById("result_gesture_name").innerHTML = results[0].label;
    prediction1 = results[0].label;

    if(results[0].label == "Best"){
        document.getElementById("update_emoji").innerHTML= "<span>&#128077</span>";
    }

    if(results[0].label == "Amazing"){
        document.getElementById("update_emoji").innerHTML= "<span>&#128076</span>";
    }

    if(results[0].label == "Victory"){
        document.getElementById("update_emoji").innerHTML= "<span>&#9996</span>";
    }

    if(results[0].label == "Dislike"){
        document.getElementById("update_emoji").innerHTML= "<span>&#128078</span>";
    }

    speak();

}}

function speak(){

    if(results[0].label == "Victory"){
    new SpeechSynthesisUtterance("that was a marvelous victory")}

        else if(results[0].label == "Amazing"){
            new SpeechSynthesisUtterance("This is amazing")}

        else if(results[0].label == "Dislike"){
           new SpeechSynthesisUtterance(" I don't like this")}

        else(results[0].label == "Best");{
        new SpeechSynthesisUtterance("all the best")};
 
synth = window.speechSynthesis;
 

}

