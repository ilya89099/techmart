var openModal = document.querySelector(".write-us");
var closeModal1 = document.querySelector(".cm1")
var closeModal2 = document.querySelector(".cm2")
var closeModal3 = document.querySelector(".cm3")
var modalWindow = document.querySelector(".write-us-modal")
var mems = document.querySelector(".company .btn")
var buy = document.querySelectorAll(".buy")
var map = document.querySelector('.map-positioner')
var modalCart = document.querySelector(".cart-modal")
var closemap = document.querySelector(".close-map")
var logo = document.querySelector(".logo")
var audio = document.querySelector("audio")

logo.addEventListener("click", function() {
    audio.setAttribute("src", "aaaw.mp3");
})

mems.addEventListener('click', function() {
    document.querySelector(".just-pseudo").classList.toggle("closed");
    document.querySelector(".just-pseudo2").classList.toggle("closed");
})

openModal.addEventListener("click", function() {
    modalWindow.classList.add("opened");
})

closeModal1.addEventListener("click", function() {
    modalWindow.classList.remove("opened");
})

closemap.addEventListener('click', function() {
    map.classList.remove("opened");
})

map.addEventListener('mousedown', function(eve) {
    map.classList.add("opened");
})

for (var i = 0; i < buy.length; i++) {
    buy[i].addEventListener("click", function() {
        modalCart.classList.add("opened");
    });
}

closeModal3.addEventListener("click", function() {
    modalCart.classList.remove("opened");
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
        map: map1,
        icon: ("images/b3.png"),
        title: "Пора выбирать"
    });
    document.getElementById("map1").style.position = "absolute";

}