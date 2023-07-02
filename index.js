let img = document.createElement('img');

img.src = 'img/icons/logo_n3.png';

img.style.width = '25%';
img.style.height = 'auto';
img.style.position = 'fixed';
img.style.top = '50%';
img.style.left = '50%';
img.style.transform = 'translate(-50%, -50%)';
img.style.zIndex = '9999'; 


let backgroundDiv = document.createElement('div');
backgroundDiv.style.position = 'fixed';
backgroundDiv.style.top = '0';
backgroundDiv.style.left = '0';
backgroundDiv.style.width = '100%';
backgroundDiv.style.height = '100%';
backgroundDiv.style.backgroundColor = '#ffffff'; 
backgroundDiv.style.zIndex = '9998'; 

let container = document.getElementById('loading-img');

container.appendChild(backgroundDiv);

container.appendChild(img);

backgroundDiv.style.display = 'block';
img.style.display = 'block';

window.addEventListener('load', () => {
    backgroundDiv.style.display = 'none';
    img.style.display = 'none';
});

// onload=()=>{
//     let btn=document.getElementById("dark_mode")
//     btn.onclick = () =>{
//         document.body.classList.toggle("dark")
//     }
// }

// let width = innerWidth;

// if (innerWidth<=480){
    
// }
// .navbar .container-navbar .navbar-menu-show

  onload=()=>{
    let navbar = document.getElementById("navbarMenu");
    let btn = document.getElementById("nav-bar");
    btn.onclick = () => {
      if (navbar.style.display === "block") {
        navbar.style.display = "none";
      } else {
        navbar.style.display = "block";
      }
    };
    const slides = document.querySelectorAll('.slide');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersection, observerOptions);

slides.forEach(slide => {
  observer.observe(slide);
});
var swiper = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  speed: 2000,
});


}
