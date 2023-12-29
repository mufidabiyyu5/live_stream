var text = [
    "Di 2024 orang ini bakal lebih famous dari gamers cakep idaman",
    "Mbak taylor... plis aminin orang ini biar selalu menang war tiket musisi favoritnya di 2024", 
    "NuMin yakin orang ini konten tiktoknya FYP terus di 2024",
    "Waktunya orang yang di 2024 bakal naik gaji ini tampil",
    "Orang ini gak bakal kena spoiler film kesukaannya di tahun 2024",
    "Semoga 2024 tim bola favorit orang ini juara",
    "2024 orang ini bakal dichat duluan sama crushnya",
    "Semoga 2024 orang ini gak perlu habis berjuta-juta buat gatcha",
    "Dear 2024, semoga orang ini bakal diabsen streamer favoritnya",
    "Semoga 2024 orang ini bakal pake kaos band tapi bisa nyebutin 5 lagunya",
    "2024 muka orang ini tambah glowing biar makin slay",
    "Di 2024 orang ini bakal ngelarin skripsi gak pake revisi",
    "2024 orang ini bakalan jago pantun biar CAKEP!",
    "Di 2024 orang ini lebih banyak nice dream daripada nice try",
    "2024 orang ini bisa checkout wishlist tanpa overthinking",
    "Moga aja di 2024 orang ini tiap swipe right auto match",
    "Sederhana tapi bikin seneng, 2024 orang ini bakal diucapin ultah sama idolanya",
    "Orang ini bakal jadi KARTAP alias KARYAWAN MANTAP di 2024",
    "NuMin doain di 2024 orang ini menang giveaway tiap bulan",
    "2024 orang ini gak bakal dapet chat \"Minjem dulu seratus\"",
    "NuMin berharap di 2024 orang ini bakal terhindar dari temen yang mendang-mending",
    "2024 tahunnya orang ini dijauhin dari temen yang hobi minta tethering",
    "Orang ini gak bakal ngerasain WIFI lemot di tahun 2024",
];
let itemsArray = localStorage.getItem('text') ? JSON.parse(localStorage.getItem('text')) : [];
var index = 0;
var elem = $("#text");
var urlString = window.location.href;
var url = new URL(urlString);
var time = url.searchParams.get("time");
console.log(time);

$(document).ready( () => {
    if (time != null) {
        index = 1;
        document.getElementById("text").innerHTML = text[0];
        setInterval(change, time * 1000);
    } else {
        getArray();
    }
})

if(itemsArray.length > 0) {
    window.onload = getArray();
}

console.log(itemsArray);

function getArray(){
    console.log(index);
    if (itemsArray.length == 0) {
        elem.fadeOut(function(){
            elem.html(text[index]);
            itemsArray.push(text[index]);
            localStorage.setItem('text', JSON.stringify(itemsArray));
            resize_to_fit();
            elem.fadeIn();
        });
    } else if(itemsArray.length == text.length) {
        localStorage.clear();
        itemsArray = [];
    } else if(itemsArray.length > 0) {
        do {
            if (itemsArray[index] != text[index]) {
                    elem.fadeOut(function(){
                        elem.html(text[index]);
                        itemsArray.push(text[index]);
                        localStorage.setItem('text', JSON.stringify(itemsArray));
                        resize_to_fit();
                        elem.fadeIn();
                    });
            } else {
                index++;
            }
        } while (itemsArray[index] == text[index]);
    }
}
// localStorage.clear();

function change() {
    elem.fadeOut(function(){
        elem.html(text[index]);
        index++;
        resize_to_fit();
        if(index >= text.length) { index = 0; }
        elem.fadeIn();
    });
}

$(document).ready(function () {
    resize_to_fit();
}); 

function resize_to_fit(){
    if ($('#box #text').height() > $('#box').height()) {
        while ($('#box #text').height() > $('#box').height()) {
            $('#box #text').css('font-size', (parseInt($('#box #text').css('font-size')) - 1) + "px");
        }
    } else {
        $('#box div').css('font-size', "24px");
    }
}