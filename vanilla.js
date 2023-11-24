let t1 = gsap.timeline();

t1.from(
    ".mountain2",
    {
        x:"-50%",
        duration:1.5,
        ease:"circ.out"
    }
)

t1.from(
    ".mountain3",
    {
        x:"50%",
        duration:1.5,
        ease:"circ.out"
    },
    "-=2"
)

t1.from(
    ".person",
    {
        y:"90%",
        duration:3.5,
        ease:"circ.out"
    },
    "-=2"
)

t1.from(
     ".mountain1",
    {
        y:"90%",
        duration:3.5,
        ease:"circ.out"
    },
    "-=4"
)











const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border =document.querySelector(".border");

const section_height = section.offsetHeight;

let header_height = header.offsetHeight;


window.addEventListener(("scroll"), () => {

    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    console.log(sectionY.top);
    console.log(scroll)
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)` ;
    });

    opacity.forEach(el => {
        el.style.opacity = scroll / (sectionY.top + section_height) ;
    })

    big_title.style.opacity = -scroll / (header_height / 2) + 1 ;
    
    shadow.style.height = `${scroll * 0.5 + 300}px`;
    

   content.style.transform = `translateY(${scroll/ (section_height + sectionY.top) * 50 - 50}px)`;
   image_container.style.transform = `translateY(${scroll/ (section_height + sectionY.top) * -50 + 50}px)`;   

   border.style.width = `${scroll / (sectionY.top + section_height) * 30}%` ;
});