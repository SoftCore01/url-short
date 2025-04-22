let burgerEl = document.querySelector("#burger");
let navEl = document.querySelector("nav");

burgerEl.addEventListener("click", (e)=>{
    if (navEl.style.display != "block") {
        console.log(navEl.style.display)
        navEl.style.display = "block"
    } else {
        console.log(navEl.style.display);
        navEl.style.display = "none";
    }
})

window.addEventListener("resize", e => {
    if (window.screen.width > 768 && navEl.style.display == "none") {
      console.log("hello");
      navEl.style.display = "flex";
    } else if (window.screen.width < 768 && navEl.style.display == "flex") {
      console.log("small")
      navEl.style.display = "none";
    }
})
