
// stycky scroll class add

const myDiv = document.getElementById("main_navbar");
const myHeaderDiv = document.getElementsByClassName('top_header_social_media')[0];
function addClassOnScroll(){
    if(window.scrollY > 100){
        myDiv.classList.add("nav_bg");
        myHeaderDiv.style.display = "none";
    }else{
        myDiv.classList.remove("nav_bg");
        myHeaderDiv.style.display = "flex";
    }
}
window.addEventListener("scroll",addClassOnScroll);



// Accordian js
function toggleAccordion(header) {
    var item = header.parentNode;
    var content = item.querySelector('.accordian-content');
    var icon = header.querySelector('.icon');

    if (item.classList.contains('active')) {
        content.style.maxHeight = '0';
        icon.textContent = '+';
        item.classList.remove('active');
    } else {
        content.style.maxHeight = '500px'; // Adjust the maximum height as needed
        icon.textContent = '-';
        item.classList.add('active');
    }
}
//menu bar
function menuToggle(){
    let menu = document.getElementById("navMenu");
    menu.classList.toggle("open");
}

//header banner slider
$(document).ready(function(){
    $('.banner_slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});