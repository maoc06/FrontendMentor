var idx = 0;

const jsonStr =
    '{ "testimonials" : [ ' +
    '{ "name": "Tanya Sinclair", "rol": "UX Engineer", "urlImage": "./images/image-tanya.jpg", "quote": "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”"},' +
    '{ "name": "John Tarkpor", "rol": "Junior Front-end developer", "urlImage": "./images/image-john.jpg", "quote": "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”"} ]}';

const data = JSON.parse(jsonStr);

var quote;
var nameTestimonial;
var rol;
var urlImage;

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("LOADED");
    quote = document.querySelector("#testimonial");
    nameTestimonial = document.querySelector("#name");
    rol = document.querySelector("#rol");
    urlImage = document.querySelector("#profile-photo");
});


function prevTestimonial() {
    if (idx == 0) {
        idx = data.testimonials.length - 1;
    } else {
        idx--;
    }
    setData();
}

function nextTestimonial() {
    if (idx == data.testimonials.length - 1) {
        idx = 0;
    } else {
        idx++;
    }
    setData();
}

function setData() {
    quote.innerHTML = data.testimonials[idx].quote;
    nameTestimonial.innerHTML = data.testimonials[idx].name;
    rol.innerHTML = data.testimonials[idx].rol;
    urlImage.src = data.testimonials[idx].urlImage;
}