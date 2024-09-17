//Preloader
const loader = document.querySelector(".preloader");
window.addEventListener("load" , () => {
    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
});



//Hero Section Background 
const wrapper = document.getElementById("tiles");

const createTile = index => {
    const tile = document.createElement("div");

    tile.classList.add("tile");

    return tile;
}

const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    });
}

const createGrid = () => {
    wrapper.innerHTML = ""

    const size = document.body.clientWidth > 800 ? 100 : 50;

    columns = Math.floor(document.body.clientWidth / size);
    rows = Math.floor(document.body.clientHeight / size);

    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);

    createTiles(columns * rows);
}

createGrid();

window.onresize = () => createGrid();


const ball = document.getElementById("colorball");

window.onmousemove = event => { 
  const { clientX, clientY } = event;
  
  ball.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}


//Navbar Shifting in Mobile view
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const nav = document.querySelector(".navbar");

const toggleNavbar = () =>{
    nav_header.classList.toggle("active");   
};

const removeNav = () =>{
    nav_header.classList.remove("active");   
};

mobile_nav.addEventListener('click', () => toggleNavbar());
nav.addEventListener('click', () => removeNav());
const buyNow = document.querySelectorAll('.buy');

buyNow.forEach(buy => {
    buy.addEventListener('click', () => {
        alert("Congrats!! Now accept all the cookies so that we could know your ip address And the cost is 2000$ + shipping");
    });
});

function Alert(){
    alert("The form has been submitted");
}

//function to change the style of the color
const btn = document.querySelectorAll(".Btn");
btn.forEach(element => {
    element.addEventListener('click', () => toggleBtn());
    const toggleBtn = () => {
        element.classList.add("active");
        btn.forEach(notele => {
            if (element != notele){
                notele.classList.remove("active");
            };
        });
    };
    
});

// Function to change Img

function changeImage(phoneSrc,padSrc,miniSrc) {
    let phoneImg = document.querySelector('#phone');
    let padImg = document.querySelector('#pad');
    let miniImg = document.querySelector('#mini');

    phoneImg.setAttribute('src', phoneSrc);
    padImg.setAttribute('src', padSrc);
    miniImg.setAttribute('src', miniSrc);
}

//On scroll animation
const observerRight = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            setTimeout(() => entry.target.classList.add("show-right") , 500);
        };
    });
});
const observerLeft = new IntersectionObserver((entries1) =>{
    entries1.forEach((entry1) => {
        if(entry1.isIntersecting){
            setTimeout(() => entry1.target.classList.add("show-left") , 500);
        };
    });
});
const observer = new IntersectionObserver((entries2) =>{
    entries2.forEach((entry2) => {
        if(entry2.isIntersecting){
            setTimeout(() => entry2.target.classList.add("show"), 500);
        };
    });
});

const hidRight = document.querySelectorAll(".hidden-right");
hidRight.forEach((el) => observerRight.observe(el));
const hidLeft = document.querySelectorAll(".hidden-left");
hidLeft.forEach((ele) => observerLeft.observe(ele));
const hid = document.querySelectorAll(".hidden");
hid.forEach((elem) => observer.observe(elem));