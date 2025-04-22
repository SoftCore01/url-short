let burgerEl = document.querySelector("#burger");
let navEl = document.querySelector("nav");

burgerEl.addEventListener("click", (e)=>{
    if (navEl.style.display != "block") {
        
        navEl.style.display = "block"
    } else {
        
        navEl.style.display = "none";
    }
})

window.addEventListener("resize", e => {
    if (window.screen.width > 768 && navEl.style.display == "none") {
      
      navEl.style.display = "flex";
    } else if (window.screen.width < 768 && navEl.style.display == "flex") {
      
      navEl.style.display = "none";
    }
})
