var togglee=document.querySelector(".toggle");
var showing=document.querySelector(".showcase");

togglee.addEventListener("click", () => {
        togglee.classList.toggle("active");
        showing.classList.toggle("active");
    })