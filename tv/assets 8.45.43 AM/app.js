
const nftArr = [
    "not f*cking today",
    "nice fluffy tail",
    "no fun town",
    "noodles for tony",
    "nebulous fact taboo",
    "nouveau fish taco",
    "ninja for tech",
    "nerd farm trilogy",
    "nagging fad trauma",
    "number for tabs",
    "north face tracksuit",
    "not fungi tv",
    "nightmare fuel tangible",
    "net fun team",
    "nope faux takes",
    "note fancy teletubbie",
    "number falliable telephone",
    "new fascination tailspin",
    "night fox troupe",
    "nerves fake tailored",
    "nutmeg field tabouli",
    "novel faking taskmaster",
    "nacho fancy telemarketer",
    "neurons faceoff takeover",
    "name fiction tantrum",
    "natural fig taste",
    "nobles fare trade",
    "necessary fate tamperproof",
    "noticable flavor tapestry",
    "nostradamus forsaw telemedicine",
    "night ferromagnetisim tactics",
]

let current = 0;

//get elem by adding event listener 'click'
//anon fx to random select string using length?  %

document.querySelectorAll('.glitch')[0].addEventListener('click', function () {
    this.innerHTML = nftArr[current % nftArr.length]; 
    current++;


});