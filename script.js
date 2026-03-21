let words = ["Student", "Athlete", "Fitness Lover"];
let i = 0, j = 0;
let isDeleting = false;

function type(){
  let current = words[i];

  if(isDeleting){
    j--;
  } else {
    j++;
  }

  document.getElementById("typing").innerHTML = current.substring(0,j);

  let speed = isDeleting ? 80 : 150;  // slow typing

  if(!isDeleting && j === current.length){
    isDeleting = true;
    speed = 1200; // pause
  }
  else if(isDeleting && j === 0){
    isDeleting = false;
    i = (i + 1) % words.length;
    speed = 500;
  }

  setTimeout(type, speed);
}

type();

/* NAV ACTIVE */
window.addEventListener("scroll",()=>{
  let sections=document.querySelectorAll("section");
  let links=document.querySelectorAll("nav a");

  sections.forEach(sec=>{
    let top=window.scrollY;
    let offset=sec.offsetTop-100;
    let height=sec.offsetHeight;
    let id=sec.getAttribute("id");

    if(top>=offset && top<offset+height){
      links.forEach(link=>{
        link.classList.remove("active");
        document.querySelector('nav a[href*='+id+']').classList.add("active");
      });
    }
  });
});

let circles = document.querySelectorAll(".circle");

function animateCircles(){
  circles.forEach(circle => {
    let percent = circle.getAttribute("data-percent");
    let degree = percent * 3.6;
    let count = 0;

    let interval = setInterval(() => {
      if(count >= percent){
        clearInterval(interval);
      } else {
        count++;
        circle.querySelector("span").innerText = count + "%";
      }
    }, 20);

    circle.style.background = `conic-gradient(cyan ${degree}deg, #333 ${degree}deg)`;
  });
}

/* Scroll trigger */
let triggered = false;

window.addEventListener("scroll", () => {
  let section = document.querySelector("#skills");
  let position = section.getBoundingClientRect().top;

  if(position < window.innerHeight - 100 && !triggered){
    animateCircles();
    triggered = true;
  }
});

function animateCircles(){
  document.querySelectorAll(".circle").forEach(circle => {
    let percent = circle.getAttribute("data-percent");
    let count = 0;

    let interval = setInterval(()=>{
      if(count > percent){
        clearInterval(interval);
      } else {
        circle.style.background =
          `conic-gradient(cyan ${count*3.6}deg, #333 0deg)`;

        circle.querySelector("span").innerText = count + "%";
        count++;
      }
    }, 15);
  });
}

/* scroll trigger */
let done = false;

window.addEventListener("scroll", ()=>{
  let section = document.querySelector("#skills");
  let top = section.getBoundingClientRect().top;

  if(top < window.innerHeight - 100 && !done){
    animateCircles();
    done = true;
  }
});

const sections = document.querySelectorAll(".transform, .Lifestyle");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    let top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});

