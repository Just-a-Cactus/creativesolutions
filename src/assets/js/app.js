import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
import 'slick-carousel/slick/slick.min.js';

$(document).foundation();

let worksSlider = $('#worksSlider');
worksSlider.slick({
    dots: true,
    dotsClass: 'worksSliderDots',
    prevArrow: '.worksSliderPrev',
    nextArrow: '.worksSliderNext'
});

let contactSlider = $('#contactSlider');
contactSlider.slick({
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 3,
    prevArrow: '.contactSliderPrev',
    nextArrow: '.contactSliderNext',
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1
        }
    }]
});

$(window).on("load", function () {
    var map;
    var mapContainer = $("#map")[0];
    var mapCenter = {
        lat: -7.930684,
        lng: 112.637743
    };
    map = new google.maps.Map(mapContainer, {
        center: mapCenter,
        zoom: 17,
        disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
        position: mapCenter,
        map: map,
        icon: "assets/img/marker.png"
    });
});