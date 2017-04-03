/*global $, console, alert*/

/*
---------------------------------
DECLARING AND ASSIGNING VARIABLES
--------------------------------- 

Declare variables:
masthead (HTML container storing 
the current slide - slide-show part)

slides (array of elements storing 
all slides - slide-show part)

buttons (collected list of 
3 buttons in array - main content hide/reveal part)

contents (array of 3 elements - contents 
in main content hide/reveal part)

container (HTML element that will get a content
from array contents)

i (variable to be used as index-pointer 
inside loops for slide-show part)

k (variable to be used as index-pointer
inside loops for hide/reveal content part) */
var mastHead,
    slides,
    buttons,
    contents,
    container,
    i,
    k;

/* 
Assign 4 elements to array slides
(slide-show content) */

var slides = [
    "<figure><figcaption id=\"figcap1\">Step 1:</figcaption><figcaption id=\"figcap2\">Get a quote</figcaption><div id=\"figimg-contain\"><img src=\"img/quote.png\" alt=\"slide-one-description\"/></div></figure>",
    "<figure><figcaption id=\"figcap1\">Step 2:</figcaption><figcaption id=\"figcap2\">Sign up</figcaption><div id=\"figimg-contain\"><img src=\"img/signup.png\" alt=\"slide-one-description\"/></div></figure>",
    "<figure><figcaption id=\"figcap1\">Step 3:</figcaption><figcaption id=\"figcap2\">Start Saving</figcaption><div id=\"figimg-contain\"><img src=\"img/save.png\" alt=\"slide-one-description\"/></div></figure>",
    "<figure><figcaption id=\"figcap1\">Step 4:</figcaption><figcaption id=\"figcap2\">Feel Better</figcaption><div id=\"figimg-contain\"><img src=\"img/enjoy.png\" alt=\"slide-one-description\"/></div></figure>"
];

var mastHead = document.querySelector(".mh-image");


        
/* 
Define function fadeOut. This function will 
make currently displayed slide disappear. */
function fadeOut() {
      /* 
   Use style object with property opacity 
   on masthead and set it to 0. */
    "use strict";
    mastHead.style.opacity = "0";
}

/* 
Use i as index pointer for the array slides.
Assign i with initial value 0. */
var i = 0;

/* 
Define function runSlides. 
This function will loop through the array slides. */
function runSlides() {
    "use strict";
   /* 
   Set opacity of masthead to 1.
   Make sure masthead is visible 
   (use style object and opacity on masthead). */
    mastHead.style.opacity = "1";

   /* 
   Check the value of i.
   If the value of i is greater than 3 
   (3 is index of fourth slide),
   reset the value of i to 0 
   (slide-show starts over). */
    if (i > 3) {
        i = 0;
    }

   /* 
   Use i to pass the next in line slide 
   from array slides to masthead. */
    mastHead.innerHTML = slides[i];
    
   /* 
   Increment i. */
    i += 1;

   /* 
   Use setTimeOut() to call function fadeout 
   after 5 seconds.(Slide will remain displayed 
   for 5s and then, function fadeOut 
   will make it disappear). */
    window.setTimeout(fadeOut, 5000);
    
/* 
End function runSlides. */
}

/*
Call function runSlides. This will display 
the first slide as the web page is loaded. */
//window.addEventListener("load", runSlides, false);
runSlides();

/* 
Use setInterval() to call function 
runSlides every 6 seconds.
(Function runSlides is 
a slide-show "engine"). */
//call it over and over with setInterval, parse to timeID

window.setInterval(runSlides, 6000);


/* 
Collect all buttons in array buttons. 
*/

var buttons = document.querySelectorAll(".btn");


/*
Have all contents in array contents. 
*/

var contents = [
     "<figure class = \"clearfix\"><img src=\"./img/main-1.png\" /><figcaption id=\"figcap3\"><p>IMAGE 1 sit amet, consectetur adipisicing elit. Ullam dicta quae ex maxime, quia et aliquam est cumque itaque dolore a perspiciatis quis impedit blanditiis iste minus, ut placeat. Quam veniam nostrum, ullam consectetur voluptatum ab id quisquam, provident nesciunt cupiditate possimus facilis ipsum perspiciatis enim fugit harum rerum temporibus!</p></figcaption></figure>",
     "<figure class = \"clearfix\"><img src=\"./img/main-2.png\" /><figcaption id=\"figcap3\"><p>IMAGE 2 sit amet, consectetur adipisicing elit. Ullam dicta quae ex maxime, quia et aliquam est cumque itaque dolore a perspiciatis quis impedit blanditiis iste minus, ut placeat. Quam veniam nostrum, ullam consectetur voluptatum ab id quisquam, provident nesciunt cupiditate possimus facilis ipsum perspiciatis enim fugit harum rerum temporibus!</p></figcaption></figure>",
     "<figure class = \"clearfix\"><img src=\"./img/main-3.png\" /><figcaption id=\"figcap3\"><p>IMAGE 3 dolor sit amet, consectetur adipisicing elit. Ullam dicta quae ex maxime, quia et aliquam est cumque itaque dolore a perspiciatis quis impedit blanditiis iste minus, ut placeat. Quam veniam nostrum, ullam consectetur voluptatum ab id quisquam, provident nesciunt cupiditate possimus facilis ipsum perspiciatis enim fugit harum rerum temporibus!</p></figcaption></figure>"
    ];

/*Access div with the class "container"
and pass the reference to variable container.*/

var container = document.querySelector(".container");

/*
Pass the value of the first array-element of array contents
to container (use innerHTML on container). */
container.innerHTML = contents[0];


/* 
Define function handleClick 
(pass event object to function) */
function handleClick(ev) {
    "use strict";
 /* 
   Loop through buttons array and
   use removeAttribute() to remove 
   id with the value active from an HTML element 
   that contains this id (use hasAttribute() in if-statement to check). */
    for (k = 0; k < buttons.length; k += 1) {

        if (buttons[k].hasAttribute("id")) {
            buttons[k].removeAttribute("id");
        }
   
    /* 
   Use innerHTML on ev.target to check which button
   was clicked. Based on this, display corresponding array 
   element inside <div class="container"></div> */
        if (ev.target.innerHTML === "B1") {
            container.innerHTML = contents[0];
        }
        else if (ev.target.innerHTML === "B2") {
            container.innerHTML = contents[1];
        }
        
        else if (ev.target.innerHTML === "B3") {
            container.innerHTML = contents[2];
        }


   /*
   Add the class active to clicked list item (use ev.target) */
        ev.target.setAttribute("id", "active");
    
    }
/* 
End function handleClick. */
}

/* 
Loop through buttons array and 
register handleClick to listen for "click" event 
on any button from array buttons. */
for (k = 0; k < buttons.length; k += 1) {
    buttons[k].addEventListener("click", handleClick, false);
}



