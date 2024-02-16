function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/IFY6Kyfdh/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
    console.log("Model Ready");
}

    
dog = 0;
cat = 0;
cow = 0;
lion = 0;

function gotResults(error, results){

    if(error){
        console.error(error);
    }else{
        console.log(results);
        r = Math.floor(Math.random()*255) + 1;
        g = Math.floor(Math.random()*255) + 1;
        b = Math.floor(Math.random()*255) + 1;
        document.getElementById("audio").innerHTML = "Detected Voice Is Of - " + results[0].label;
        document.getElementById("number").innerHTML = "Detected dog - " + dog + ", Detected cat - " + cat + ", Detected cow - " + cow + ", Detected lion - " + lion;
        document.getElementById("number").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("audio").style.color = "rgb(" + r + "," + g + "," + b + ")";
        img = document.getElementById("image");
        if(results[0].label == "Meowing"){
            cat = cat + 1;
            img.src = "cat.webp";
            document.getElementById("number").innerHTML = "Detected dog - " + dog + ", Detected cat - " + cat + ", Detected cow - " + cow + ", Detected lion - " + lion;
        }else if(results[0].label == "Barking"){
            dog = dog + 1;
            img.src = "dog.webp";
            document.getElementById("number").innerHTML = "Detected dog - " + dog + ", Detected cat - " + cat + ", Detected cow - " + cow + ", Detected lion - " + lion;
        }else if(results[0].label == "Roar"){
            lion = lion + 1;
            img.src = "lion.webp";
            document.getElementById("number").innerHTML = "Detected dog - " + dog + ", Detected cat - " + cat + ", Detected cow - " + cow + ", Detected lion - " + lion;
        }else if(results[0].label == "Mooing"){
            cow = cow + 1;
            img.src = "cow.webp";
            document.getElementById("number").innerHTML = "Detected dog - " + dog + ", Detected cat - " + cat + ", Detected cow - " + cow + ", Detected lion - " + lion;
        }else{
            img.src = "default.jpg";
        }
    }
}