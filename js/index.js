const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// image
let header = document.getElementById("cta-img"); 
header.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img"); 
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//nav 
let aTags = document.getElementsByTagName('a')
Array.from(aTags).forEach((link, i) => {
  link.textContent = siteContent["nav"][`nav-item-${i + 1}`];
  link.style.color ="green";
});

// heading text and button 

let headingText = document.getElementsByClassName("cta-text");
headingText[0].children[0].textContent = siteContent["cta"]["h1"];
headingText[0].children[1].textContent = siteContent ["cta"]["button"];


// main content

// let mainContent = document.getElementsByClassName("text-content");
// mainContent[0].children[0].textContent = siteContent["main-content"]["features-h4"];
// for (let i = 0; i < mainContent.length; i++) {
//   for(let j = 0; j < mainContent[i].children.length; j++){
//   mainContent[i].children[j].textContent = Object.values(siteContent["main-content"])[i];
// }
// }

// main content

let mainContent = document.getElementsByClassName("text-content");
mainContent[0].children[0].textContent = siteContent["main-content"]["features-h4"];
mainContent[0].children[1].textContent = siteContent["main-content"]["features-content"];

mainContent[1].children[0].textContent = siteContent["main-content"]["about-h4"];
mainContent[1].children[1].textContent = siteContent ["main-content"] ["about-content"];

mainContent[2].children[0].textContent = siteContent["main-content"]["services-h4"];
mainContent[2].children[1].textContent = siteContent["main-content"]["services-content"];

mainContent[3].children[0].textContent = siteContent["main-content"]["product-h4"];
mainContent[3].children[1].textContent = siteContent ["main-content"] ["product-content"];
mainContent[4].children[0].textContent = siteContent["main-content"]["vision-h4"];
mainContent[4].children[1].textContent = siteContent ["main-content"] ["vision-content"];
console.log(mainContent);


//contact
const textNode = document.createTextNode("123 Way 456 Street");
const brTag = document.createElement("br");
const textNode2 = document.createTextNode("Somewhere, USA");
let contactText = document.getElementsByClassName("contact");
contactText[0].children[0].textContent = siteContent["contact"]["contact-h4"]
contactText[0].children[1].appendChild(textNode);
contactText[0].children[1].appendChild(brTag);
contactText[0].children[1].appendChild(textNode2);
contactText[0].children[2].textContent = siteContent["contact"]["phone"]
contactText[0].children[3].textContent = siteContent["contact"]["email"]

// footer

let footerText = document.getElementsByTagName("footer");
footerText[0].textContent = siteContent["footer"]["copyright"];