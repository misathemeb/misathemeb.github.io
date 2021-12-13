/* flipcard function */
const cards = document.querySelectorAll(".grid-item").forEach(item => {

    item.addEventListener("click", event => {
        document.querySelectorAll(".grid-item").forEach(elem => {
            elem.classList.remove('flipCard');
          });
        item.classList.toggle("flipCard");
        
    })
});


