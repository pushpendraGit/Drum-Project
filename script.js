var a = document.querySelectorAll(".drum");


function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

var music1 = new sound('dum.mp3');

var music2 = new sound('sa.mp3');

var music3 = new sound('tum.mp3');
var music4 = new sound('plate.mp3');
var music5 = new sound('sp.mp3');
var music6 = new sound('y.wav');
var music8 = new sound('a.wav');

var music7 = new sound('z.wav');

 
for(var i=0;i<a.length;i++)
{

    a[i].addEventListener('click',function(){


        var targetSectionId = this.id;

     

   

        if(targetSectionId == 'fi')
        {
          
          music1.play();
        
        }
        else if(targetSectionId == 's')
        {
            music2.play();
        }
        else if (targetSectionId == 't') {
            music3.play();
        }
        else if (targetSectionId == 'fo') {
            music4.play();
        }

        else if (targetSectionId == 'fv') {
            music5.play();
        }

        else if (targetSectionId == 'sx') {
            music6.play();
        }

        else if (targetSectionId == 'se') {
            music7.play();
        }
        else if (targetSectionId == 'e') {
            music8.play();
        }











    });

}