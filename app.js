// ----------About Me Tabs----------

let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

// ----------Side Menu----------

let sideMenu = document.getElementById("side-menu");

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}

// ----------Contact Form----------

const scriptURL = "https://script.google.com/macros/s/AKfycbyNTrrWgg3uXwZFn7of4IiHCL6Z2s6vLurvaPRkrQLpZIalWPa_iRqUme3m2u5-Ysjm/exec"
const form = document.forms["submit-to-google-sheet"]

let msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})

// ----------Button To Top----------

let mybutton = document.getElementById("my-btn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}