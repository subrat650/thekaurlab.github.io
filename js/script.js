console.log("script.js loaded");

document.addEventListener("DOMContentLoaded", () => {

    const darkToggle = document.getElementById("darkToggle");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    /* -----------------------
       Load saved theme
    ------------------------*/

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme==="dark"){
        document.body.classList.add("dark");
    }

    if(darkToggle){
        darkToggle.textContent =
            document.body.classList.contains("dark") ? "☀️" : "🌙";
    }

    /* -----------------------
       Dark Mode
    ------------------------*/

    if(darkToggle){

        darkToggle.addEventListener("click",()=>{

            document.body.classList.toggle("dark");

            if(document.body.classList.contains("dark")){
                darkToggle.textContent="☀️";
                localStorage.setItem("theme","dark");
            }
            else{
                darkToggle.textContent="🌙";
                localStorage.setItem("theme","light");
            }

        });

    }

    /* -----------------------
       Mobile Menu
    ------------------------*/

    if(menuToggle && navLinks){

        menuToggle.addEventListener("click",()=>{

            navLinks.classList.toggle("show");

        });

    }

});
