var buy = document.querySelectorAll(".buy")
var modalCart = document.querySelector(".cart-modal")
var closeCart = document.querySelector(".close-cart")

for (var i = 0; i < buy.length; i++) {
    buy[i].addEventListener("click", function() {
        modalCart.classList.add("opened");
    });
}

closeCart.addEventListener("click", function() {
    modalCart.classList.remove("opened");
})