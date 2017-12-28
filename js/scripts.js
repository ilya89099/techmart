var openModal = document.querySelector(".contacts .write-us");
var closeForm = document.querySelector(".close-form")
var closeCart = document.querySelector(".close-cart")
var modalWindow = document.querySelector(".write-us-modal")
var mems = document.querySelector(".company .btn")
var buy = document.querySelectorAll(".buy")
var map = document.querySelector('.map-positioner')
var modalCart = document.querySelector(".cart-modal")
var closeMap = document.querySelector(".close-map")

for (var i = 0; i < buy.length; i++) {
    buy[i].addEventListener("click", function() {
        modalCart.classList.add("opened");
    });
}

closeCart.addEventListener("click", function() {
    modalCart.classList.remove("opened");
})

openModal.addEventListener("click", function() {
    modalWindow.classList.add("opened");
})

closeForm.addEventListener("click", function() {
    modalWindow.classList.remove("opened");
})

closeMap.addEventListener('click', function() {
    map.classList.remove("opened");
})

map.addEventListener('mousedown', function(eve) {
    map.classList.add("opened");
})

function initMap() {
    var place = {
        lat: 59.938759,
        lng: 30.3231015
    };
    var map1 = new google.maps.Map(document.getElementById('map1'), {
        zoom: 19,
        center: place
    });
    var marker1 = new google.maps.Marker({
        position: place,
        map: map1
    });
    document.getElementById("map1").style.position = "absolute";

}