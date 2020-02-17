// import WOW from './wow.min.js';
// import Pace from './pace.min.js';


var winH = window.innerHeight;
var winW = window.innerWidth;
var range = winH / 3;
var scroll = $(window).scrollTop();

var start = new TimelineMax({delay: 3});

document.addEventListener("DOMContentLoaded", function() {
var isIpadPro;
var ios;


var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    ios = navigator.userAgent.match(/iPhone|iPad|iPod/i);
    var mac = navigator.userAgent.match(/Mac/i);
    var s = screen.width + 'x' + screen.height;
    var dpr = devicePixelRatio;

    if (ios) {

      if (ios[0] === "iPad") {
        viewportSize();
        isIpadPro = false;

        if (ancho == 1024 && alto == 1366) {

          isIpadPro = true;


        }

        if (ancho == 1366 && alto == 1024) {

          isIpadPro = true;


        }

        if (ancho == 1112 && alto == 834) {

          isIpadPro = true;


        }

        if (ancho == 2048 && alto == 2732) {

          isIpadPro = true;


        }

        if (ancho == 834 && alto == 1112) {

          isIpadPro = true;


        }




      }

    } else if (mac) {
      //viewportSize();
      if (dpr == 2 && (s == '1112x834' || s == '1194x834' || s == '1024x768' || s == '1366x1024' || s == '834x1112' || s == '1024x1366' || s == '834x1194')) {
        isIpadPro = true;
        ios = true;
      }
    }


    return ios; //&& ancho < 1366;
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};



});









var minus = 0; 

$(document).ready(function () {
  

    $(function() {
      $(".rslides").responsiveSlides({

        nav: false,
      });
    });

    // START MODAL MODULE

    // Get Modal
    var modal = document.getElementById('myModal');
        
    // Get pseudoelement to open Modal
    var btn = document.getElementById("sized");

    // Get the <span> element to close Modal
    var span = document.getElementsByClassName("close")[0];


    if (btn != null) {

          // When user clicks button, open Modal
          btn.onclick = function() {  

               modal.style.display = "flex";      
          };

      
    }

    if (span != null) {

          // When user clicks Close (x), close Modal
          span.onclick = function() {    modal.style.display = "none";    };

      
    }

  


    // When user clicks anywhere outside of the Modal, close Modal
     window.onclick = function(event) {
        if (event.target == modal) {
           modal.style.display = "none";
           }
    }


    // END MODAL MODULE

    Pace.on("done", function () {
      $('body').css('overflow', 'auto');
      TweenMax.to($('#preloader'), 2, {
        y: -3000,
        ease: Power4.easeInOut,
        delay: 1
       });
      TweenMax.to($('.viewport'), 1.5, {
        opacity: 1,
        ease: Power4.easeInOut,
        delay: 0.5
      });
      start.play()
    });
    
    // const WOW = require('wowjs').WOW;
    // window.wow = new WOW(
    // {
    // boxClass:     'wow',      // default
    // animateClass: 'animated', // default
    // offset:       0,          // default
    // mobile:       true,       // default
    // live:         true,        // default
    // mobile:       false
    // }
    //                 )
    // window.wow.init();

    $('#easyPaginate').easyPaginate({
        paginateElement: 'li',
        elementsPerPage: 21,
        effect: 'fade'
    });


});
