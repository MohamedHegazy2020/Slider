// get slider items||Array from

let sliderImges = Array.from(
  document.querySelectorAll(".slider-container img")
);

// get number of slides

let slidesCount = sliderImges.length;
// set current slide
let currentSlide = 8;

// Slide Number Element

let slideNumberElement = document.getElementById("slide-number");

// Previous and Next Buttons
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

// handle click on previous and next buttons

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// create the main UL element
let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");

// creat list items Based on Slide Count
for (let i = 1; i <= slidesCount; i++) {
  // create the li
  let paginationitem = document.createElement("li");
  paginationitem.setAttribute("data-index", i);
  // set item content

  paginationitem.appendChild(document.createTextNode(i));

  // append items to the main UL list
  paginationElement.appendChild(paginationitem);
}
// add the craeted element to the page
document.getElementById("indicators").appendChild(paginationElement);

// get the new Created Ul
let pagniationCreatedUl = document.getElementById("pagination-ul");


let paginationBullets = Array.from(  document.querySelectorAll('#pagination-ul li'))
// loop throw Bullets

for (let i = 0; i < paginationBullets.length; i++) {
paginationBullets[i].onclick = function(){
    currentSlide = parseInt(this.getAttribute('data-index'))
    theChecker()
}    
}

// trigger theCheck function

function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

function prevSlide() {
    if (prevButton.classList.contains("disabled")) {
        return false;
      } else {
        currentSlide--;
        theChecker();
      }
}

theChecker();
function theChecker() {
  slideNumberElement.textContent =
    "Slide #" + currentSlide + " of " + slidesCount;

  removeAllActive()

  // set active class on current Slide
  sliderImges[currentSlide - 1].classList.add("active");

  // set active class on current pagination item
  pagniationCreatedUl.children[currentSlide - 1].classList.add("active");
  // check if the current slide is the first
  if (currentSlide == 1) {
    // add disabled class on previous
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  // check if the current slide is the last
  if (currentSlide == slidesCount) {
    // add disabled class on previous
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

// remove all active classes from images and pagination

function removeAllActive() {
  sliderImges.forEach((img) => {
    img.classList.remove("active");
  });
  paginationBullets.forEach((li) => {
    li.classList.remove("active");
  });
}
