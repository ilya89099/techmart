var buy = document.querySelectorAll(".buy")
var modalCart = document.querySelector(".cart-modal")
var closeModal3 = document.querySelector(".cm3")

for (var i = 0; i < buy.length; i++) {
    buy[i].addEventListener("click", function() {
        modalCart.classList.add("opened");
    });
}

closeModal3.addEventListener("click", function() {
    modalCart.classList.remove("opened");
})