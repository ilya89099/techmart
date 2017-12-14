var openModal = document.querySelector(".write-us");
var closeModal1 = document.querySelector(".cm1")
var closeModal2 = document.querySelector(".cm2")
var modalWindow = document.querySelector(".write-us-modal")
var modalMap = document.querySelector(".modal-map")

setTimeout(function() { modalMap.classList.add("closed"); }, 500)

openModal.addEventListener("click", function() {
    modalWindow.classList.add("opened");
})

closeModal1.addEventListener("click", function() {
    modalWindow.classList.remove("opened");
})

document.getElementById('map1').addEventListener('mousedown', function() {
    modalMap.classList.add("opened");
    modalMap.classList.remove("closed");
})

closeModal2.addEventListener("click", function() {
    modalMap.classList.remove("opened");
    modalMap.classList.add("closed");
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
    var map2 = new google.maps.Map(document.getElementById('map2'), {
        zoom: 19,
        center: place
    });
    var marke1 = new google.maps.Marker({
        position: place,
        map: map1,
        icon: ("images/b3.png"),
        title: "Hello World!"
    });

    var marker2 = new google.maps.Marker({
        position: place,
        map: map2,
        icon: ("images/b3.png"),
        title: "Hello World!"
    });
}