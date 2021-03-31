function preload()
{


}

function setup()
{
    Canvas = createCanvas(400,400);
    Canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    Model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wgTi8Nmaf/model.json",ModelLoad);

}

function ModelLoad()
{
    console.log("Model Loaded");

}

function draw()
{
    image(video,0,0,400,400);
    Model.classify(video, Result);
}

function Result(e,r)
{
    if(e)
    {
        console.error(e);
    }
    else
    {
        console.log(r);
        document.getElementById("object").innerHTML = r[0].label;
        document.getElementById("accuracy").innerHTML = r[0].confidence.toFixed(3);
    }
}