const toggleButtons = document.querySelectorAll(".toggle-button");

for(let item of toggleButtons) {
    item.addEventListener("click", function() {
        this.innerText == "Show" ? this.innerText = "Hide" : this.innerText = "Show";
        const nextSibling = item.nextElementSibling;
        nextSibling.classList.toggle("show");
    })
}