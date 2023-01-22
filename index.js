let worksElement = document.getElementById("works-element");
let statisticsElement = document.getElementById("statistics-element");
let nav = document.getElementById("nav");
let barButton = document.getElementById("bar-button");
let navList = document.getElementById("nav-list");
let navSocialLinks = document.getElementById("nav-social-links");
let navLogo = document.getElementById("nav-logo");
let ulLi = document.querySelectorAll(".ul a");

const works = [{
    backdrop:"./img/shopify_backdrop.jpeg",
    name:"Shopify",
    link:"https://shopify-gorega.vercel.app/"
},
{
    backdrop:"./img/notify_backdrop.jpeg",
    name:"Notify",
    link:"https://notify-gorega-preview.onrender.com/"
},
{
    backdrop:"./img/netflix_backdrop.png",
    name:"Netflix Clone",
    link:"https://netflix-clone-gorega.vercel.app/"
},{
    backdrop:"./img/easynotes_backdrop.jpeg",
    name:"EaseyNotes",
    link:"https://easynotes-gorega-preview.onrender.com/"
},{
    backdrop:"./img/instagram_backdrop.jpeg",
    name:"Instagram Clone",
    link:"https://instagram-clone-gorega.onrender.com/"
},{
    backdrop:"./img/toptal_backdrop.jpeg",
    name:"Toptal Theme",
    link:"https://toptal-theme-gorega.vercel.app/"
}]

const statistics = [{
    title:"Experience",
    number:"3",
    symbol:"Years"
},{
    title:"Clients",
    number:"24",
    symbol:"+"
},{
    title:"Satisfaction",
    number:"97.8",
    symbol:"%"
}]

// print out Portfolio statistics to html page 
statisticsElement.innerHTML = statistics.map((statistic)=>{
    return `<div class="num">
        ${statistic.number} ${statistic.symbol}
        <pre>${statistic.title}</pre>
    </div>`
}).join(" ")

// print out Portfolio works to html page 
worksElement.innerHTML = works.map((work)=>{
    return `<div class="sec">
        <div class="overlay"></div>
        <img src=${work.backdrop} alt="" />
        <div class="info">
            <h2>${work.name}</h2>
            <a href=${work.link} target="_blank"><button>Visit Website</button></a>
        </div>
    </div>`
}).join(" ");


// navbar dynamic styles when show class appear and disappear
let navStyles = ()=>{
    if(navList.classList.contains("show")){
        document.body.style.overflow = "hidden";
        navLogo.style.opacity = 0;
        nav.style.left = "0"
        nav.style.transform = "none"
    }else{
        document.body.style.overflow = "auto";
        navLogo.style.opacity = 1;
        nav.style.left = "50%"
        nav.style.transform = "translate(-50%)"
    }
}

// add show class on navbar when bar button got clicked (on small screens)
barButton.addEventListener("click",()=>{
    navList.classList.toggle("show");
    navSocialLinks.classList.toggle("show");
    navStyles();
})


// add active class on the active li of the navbar
ulLi.forEach((li)=>{
    li.addEventListener("click",(e)=>{
        // remove bar box when li link got clicked (on small screens)
        if(navList.classList.contains("show")){
            navList.classList.toggle("show");
            navSocialLinks.classList.toggle("show");
        }

        e.target.parentElement.parentElement.querySelectorAll(".active").forEach((element)=>{
            element.classList.remove("active");
        })

        e.target.classList.add("active");
    })
})


// remove show class on navbar when window width size exceed
window.addEventListener("resize",()=>{
    if(window.innerWidth >= 1200){
        navList.classList.remove("show");
        navSocialLinks.classList.remove("show");
        navStyles();
    }
})