
var elimg = document.querySelector(".box__image");

var elBox = document.querySelector(".box");
var elImgsecond = document.querySelector(".box__image-second");
var elImg3 = document.querySelector(".box__image-3");
var elImgApple = document.querySelector(".box__apple");
var elImgApple2 = document.querySelector(".box__apple-2");
var elImgPizza = document.querySelector(".box__pizza");
var elImgPizza2 = document.querySelector(".box__pizza2");
var elBoxGif = document.querySelector(".box__gif");





var elBtnRec = document.querySelector(".btn-rec");

var record = new webkitSpeechRecognition();

record.lang = "en-US"

record.onend = function(){
  console.log("===== Aloqa tugadi =====");
}


record.onerror = function(){
  console.log("===== Xatolik yuz berdi =====");
}

record.onresult = function(evt){
    var command = evt["results"][0][0]["transcript"];
    

         if (command == "go"){
          elBox.classList.add("d-block")
        }

        if (command == "table"){
          elImgsecond.classList.add("image")
        }

        
        if (command == "table"){
          elImg3.classList.add("table")
        }

        if (command == "start"){
          elImgApple.classList.add("apple")
        }

        if (command == "start"){
          elImgApple2.classList.add("apple-2")
        }

        if (command == "pizza"){
          elImgPizza.classList.add("pizza")
        }

        if (command == "pizza"){
          elImgPizza2.classList.add("pizza2")
        }

        if (command == "open"){
          elBoxGif.classList.add("open")
        }
  
     
     
   


  }





elBtnRec.addEventListener("click", function(){
  console.log("===== Aloqa boshlandi =====");
  record.start();
})