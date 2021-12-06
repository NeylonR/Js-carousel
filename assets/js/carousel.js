// récupération des éléments du DOM
const getCarousel = document.getElementById("carousel");
const getRightCarousel = document.getElementById("rightCarousel");
const getLeftCarousel = document.getElementById("leftCarousel");
const getId = document.getElementById("id");
const getTitle = document.getElementById("title");
const getDate = document.getElementById("date");
const getContentText = document.getElementById("contentText");
const getImg = document.getElementById("img");

const linearColor = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"; //css propriété pour assombrir la background image
let indexOfArray = 0; //utilisé pour l'incrementation de l'array

// création de ma classe BDD
class BDD {
    constructor(id, title, date, text, img) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.text = text;
        this.img = img;
    }
}

// creation des objets qui iront dans l'array
let firstTitle = new BDD(1, "Harder, Better, Faster, Stronger", "2007", "The vocals are best known for being sampled on Kanye West’s chart-topping 2007 single Stronger.", `${linearColor},url('assets/img/harderBetter.jpg')` );
let secondTitle = new BDD(2,"Da Funk", "1995", "Although Thomas Bangalter and Guy-Manuel de Homem-Christo had been friends and collaborators for eight years by the time they made 'Da Funk' it was their first commercially successful track.", `${linearColor},url('assets/img/daFunk.jpg')`);
let thirdTitle = new BDD(3, "Get Lucky", "2013", "The result was the summer jam of 2013 and the biggest song of Daft Punk’s career.", `${linearColor},url('assets/img/randomAccess.png')`);
let fourthTitle = new BDD(4,"One More Time", "2000", "Anthony Wayne Moore, better known as Romanthony, sang two standout tracks on Discovery. And one of them was the lead single One More Time.", `${linearColor},url('assets/img/1.png')`);
let fifthTitle = new BDD(5, "Digital Love", "2000", "The third single from Discovery epitomized Daft Punk’s knack for channeling the music of the past both with samples and with original instrumentation.", `${linearColor},url('assets/img/digitalLove.jpg')`);

// passage des objets dans l'array
const arrayBDD = [firstTitle, secondTitle, thirdTitle, fourthTitle, fifthTitle];

// modification du DOM avec ajout de titre/date/texte/background image
const carouselModifDom = function(i){
    getId.innerText = "ID: " + i.id;
    getTitle.innerText = i.title;
    getDate.innerText = i.date;
    getContentText.innerText = i.text; 
    getCarousel.style.backgroundImage = i.img
}

// boucle forEach qui va faire une boucle infini pour faire défilé les images automatiquement toute les 2secondes
const autoPlay = function () {
    arrayBDD.forEach((e,i) => {
    setTimeout(() => {
        if(i == arrayBDD.length -1){
            // je répète la boucle forEach, je la retarde pour qu'il ne skip pas la dernière image
            setTimeout(() => {
                autoPlay();
            }, 2000);
        }
        carouselModifDom(e);
        return indexOfArray+=1;
    },i * 2000);
    })
}

autoPlay();

// lors du clique sur le côté droit j'incrémente mon indexOfArray de 1 et je le passe en index à mon tableau arrayBDD pour passer à la classe suivante dans le tableau, puis j'appelle ma fonction de modification du DOM
getRightCarousel.addEventListener("click", function() {
    if( indexOfArray < 4 && indexOfArray >= 0) {
        indexOfArray += 1;
        carouselModifDom(arrayBDD[indexOfArray]);
    } else if ( indexOfArray >= 4){ // si je clique et que je suis à la fin du tableau, je retourne au début
        indexOfArray = 0;
        carouselModifDom(arrayBDD[indexOfArray]);
    }
})

// lors du clique sur le côté gauche je décrémente mon indexOfArray de 1 et je le passe en index à mon tableau arrayBDD pour aller à la classe précédente dans le tableau, puis j'appelle ma fonction de modification du DOM
getLeftCarousel.addEventListener("click", function() {
    if(indexOfArray <= 4 && indexOfArray > 0) {
        indexOfArray -= 1;
        carouselModifDom(arrayBDD[indexOfArray]);
    } else if ( indexOfArray <= 0){ //si je clique et que je suis sur la première image j'arrive à la dernière
        indexOfArray = 4;
        carouselModifDom(arrayBDD[indexOfArray]);
    }
})


