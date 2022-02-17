
let reviews = [];


// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info'); 

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set up starting item
let currentItem = 0;

const getData = () => {
    fetch('http://localhost:3000/reviews').then(response => {
        if (response.ok) {
          return response.json();
        }
        else {
            throw new Error('Request failed!');
        }
      }, networkError => {
        console.log(networkError.message)
      }).then(function (response) {
         reviews = response
          showPerson(currentItem)
      });
};

if( document.readyState !== 'loading' ) { 
    init();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        init();
    });
}

function init() {
    // showPerson(currentItem);
    getData();

}


// show person based on item
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    img.alt = item.alt;
    author.textContent = item.name;
    job.textContent = item.job; 
    info.textContent = item.info;
}

// show next review

nextBtn.addEventListener('click', function (){
    currentItem++;
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

// go back review
prevBtn.addEventListener('click', function (){
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

// surprise review genesis
randomBtn.addEventListener('click', function (){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);

 // let's get this party started function... sparkles will yield yellow stars, confetti for rainbow star and rounded square mix varying in range and density

    party.confetti(this, {
            emitter: {
            modules: [
                new party.ModuleBuilder()
                    .drive("size")
                    .by(new party.NumericSpline({ time: 0, value: 0 }, { time: 0.5, value: 1 }, { time: 1, value: 0 }))
                    .build(),
                new party.ModuleBuilder()
                    .drive("opacity")
                    .by((t) => t)
                    .through("size")
                    .build(),
            ],
        },
        shapes: ["star", "roundedSquare"],
        count: party.variation.range(20, 200),
        size: party.variation.range(0.25, 1.5),
    });
    
    
});

