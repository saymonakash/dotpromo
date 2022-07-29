import Swiper, { Navigation, Pagination } from 'swiper';
import Alpine from 'alpinejs'
import MenuStack from './menu-stack'
import EuroModal from './euroModal'
import Cookies from './cookies'
import Loading from './loading'
//import Notify from './notify'
import 'flowbite' 
import { Fancybox } from "@fancyapps/ui";
import counter from './counter'
import Swal from 'sweetalert2'
import numeral from 'numeral' 
import Pace from 'pace-js'
import "@lottiefiles/lottie-player";
import Toast from './toast.js'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


//window.Toast = Toast 

window.disableBodyScroll = disableBodyScroll
window.enableBodyScroll = enableBodyScroll
window.clearAllBodyScrollLocks = clearAllBodyScrollLocks


//import Headroom from "headroom.js";
//import { Dropzone } from "dropzone";
//import 'flexmasonry'
//import MicroModal from 'micromodal';
//import Timer from './timer'
/* 
var myElement = document.querySelector(".nav-main");
var headroom  = new Headroom(myElement);
headroom.init(); */

window.pace = Pace
pace.start();

//import $ from "jquery";
//window.$ = window.jQuery = jquery;
window.numeral = numeral
window.swal = Swal


//MicroModal.init();
counter.initialize()
window.counter = counter

// TODO MicroModal.show('modal'); 
// swiper style
// import 'swiper/swiper-bundle.css'

// configure Swiper to use modules
Swiper.use([Navigation, Pagination])
//SwiperCore.use([Navigation, Pagination])
// configure Alpine
window.Alpine = Alpine
Alpine.start()

// End Configuration


// Main Navbar Fixed

 /* var navbar = document.querySelector('.nav-main')
if (navbar) {
  var navbarPrimary = document.querySelector('.nav-primary')
  var sticky = navbarPrimary.offsetTop
  
  window.onscroll = function() {funcNavbarFixed()}
  
  function funcNavbarFixed() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('navbar-fixed')
    } else {
      navbar.classList.remove('navbar-fixed')
    }
  }
}  */


const body = document.querySelector(".nav-main");

const scrollUp = "navbar-fixed";
const scrollDown = "navbar-hidden";
let lastScroll = 0;


window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);

    return;
  }
 
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
   
    if (currentScroll > 300) {
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
   } else {

     body.classList.add(scrollUp);
   }

  
  } else if (
    currentScroll < lastScroll &&  lastScroll - currentScroll > 20 &&
    body.classList.contains(scrollDown) 
  ) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  

  } else if (currentScroll <= 0) {
      body.classList.remove(scrollUp);
      body.classList.add(scrollUp);
     
  }


  lastScroll = currentScroll;
});
// End Main Navbar Fixed


// Menu Stack
MenuStack.handleEventClickOutside()
MenuStack.render('#mobile-stack-menu')
MenuStack.render('#mobile-stack-menu-other')
// End Menu Stack

//Cookies

Cookies.init();

// EuroModal
EuroModal.init()
// End EuroModal

// general swiper with pagination and navigation
const swiperGeneralConfig = {
  observer: true,
  observeParents: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}

const swiperHome = new Swiper('#banner-home', swiperGeneralConfig)

// TODO: Responsive
const swiperResponsive = {
  breakpoints: {
    370: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
     
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
}

new Swiper('#swiper-customer', swiperResponsive)


new Swiper('#tabs', Object.assign(swiperResponsive, {

  breakpoints: {
    

    370: {
      slidesPerView: 'auto',
      spaceBetween: 20,

    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
}))


new Swiper('#faq', {

  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  freeMode:true,

  breakpoints: {
    
    freeMode:true,
    370: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

new Swiper('#swiper-today-deals', Object.assign(swiperResponsive, {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  freeMode:true,
  breakpoints: {
    370: {
      slidesPerView: 'auto',
      centeredSlides: false,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
}))

new Swiper('#swiper-category-of-week', Object.assign(swiperResponsive, {
  breakpoints: {
    370: {
      slidesPerView: 'auto',
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}))



// Swiper Product Detail Vertical
function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth >= 1024 ? 'vertical' : 'horizontal';
  console.log('check: ', windowWidth, direction)

  return direction;
}

/* 
var swiperVertical = new Swiper(".swiper-product-detail", {
  direction: getDirection(),
  slidesPerView: 5,
  allowTouchMove: true,
  spaceBetween: (screen.width >= 900) ? 0 : 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  grabCursor: true,
  modules: [ Navigation, Pagination ],
  on: {
    resize: function (theSwiper) {
      theSwiper.changeDirection(getDirection());
    },
  },
})
console.log(swiperVertidsadscal) */

// Swiper Product Ac
new Swiper('#swiper-product-accessories', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 
  breakpoints: {
    370: {
      slidesPerView: 'auto',
      spaceBetween: 10,
      
    },
    700: {
      slidesPerView: 3,
      slidesPerGroup:3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      slidesPerGroup:5,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})

// Swiper Product Detail More of this model
new Swiper('#swiper-more-model', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    370: {
      slidesPerView: 'auto',
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})


new Swiper('#swiper-recently-visited', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  freeMode:true,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    370: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 6,
      slidesPerGroup: 6,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})


new Swiper('#swiper-recently-visited-search', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  freeMode:{
    enable:true,
  },

  breakpoints: {
    370: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },

    1024: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})
// Product gallery

new Swiper('.swiper-product-gallery', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  allowTouchMove: true,
  maxBackfaceHiddenSlides: 5,
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
})


var elProductGallery = document.querySelector('.swiper-product-gallery')
if (elProductGallery) {
  var elGallerLarge = document.querySelector('.gallery-large')
  var elItemActive = document.querySelector('.item-img-slider.active')

  elGallerLarge.src = elItemActive.getAttribute('data-img-lg')
  
  // Handle Click Event


  elProductGallery.querySelectorAll('.item-img-slider').forEach(item => {
    item.addEventListener('click', function (e) {
    
      if (window.innerWidth <= 770) {
        return;
      }

      e.preventDefault();

      var elCurrentItem = e.target.closest('.item-img-slider')
      var sourceImgLg = elCurrentItem.getAttribute('data-img-lg')
      
      if (!sourceImgLg) {
        console.log('error no specified `data-img-lg`')
      }
      
      elGallerLarge.src = sourceImgLg

      // Active State
      document.querySelector('.item-img-slider.active').classList.remove('active')

      elCurrentItem.classList.add('active')
    })
  })
  // End Handle Click Event


  // Handle Product Detail Gallery Responsiveness
  var imageGallreyResize = function () {
    var isDesktop = window.innerWidth >= 768
    elProductGallery.querySelectorAll('.item-img-slider').forEach(item => {
      var img = item.querySelector(':scope > img')
      var bigImg = item.getAttribute('data-img-lg')
      var smallImg = img.getAttribute('src')
  
      if (!isDesktop) {
        item.setAttribute('data-img-lg', smallImg)
        img.setAttribute('src', bigImg)
      }
      else {
        item.setAttribute('data-img-lg', bigImg)
        img.setAttribute('src', smallImg)
      }
    })
  }
  imageGallreyResize()
  window.onresize = imageGallreyResize
}


/* 
FlexMasonry.init('.grid', {

   responsive: true,
 
   breakpointCols: {
       'min-width: 1500px': 6,
       'min-width: 1200px': 5,
       'min-width: 992px': 4,
       'min-width: 768px': 3,
       'min-width: 576px': 2,
   },
 
   numCols: 4,
}); */


Fancybox.bind('[data-fancybox="gallery"]', {
  animated: false,
  showClass: false,
  hideClass: false,
  click: false,
  dragToClose: false,

  Image: {
    zoom: false,
  },

  Toolbar: {
    display: [{ id: "counter", position: "center" }, "close"],
  },
});

function wishlistInit() {

  new Swiper('#swiper-wishlist',Object.assign(swiperResponsive), {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    freeMode: true,
    breakpoints: {
      370: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      700: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })
 
}

window.wishlist = wishlistInit;
window.wishlist();
window.Fancybox = Fancybox;




/* 
// options with default values
const options = {
  defaultTabId: 'returns',
  activeClasses: 'text-orange-600 hover:text-orange-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
  inactiveClasses: 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
  onShow: () => {
      console.log('tab is shown');
  }
};

const tabs = new Tabs('tabs', options);

*/



var themeToggleBtns = document.querySelectorAll('.theme-toggle');

themeToggleBtns.forEach(themeToggleBtn => {

var themeToggleDarkIcon = themeToggleBtn.querySelector('.theme-toggle-dark-icon');
var themeToggleLightIcon = themeToggleBtn.querySelector('.theme-toggle-light-icon');


if(themeToggleDarkIcon && themeToggleLightIcon)  { 

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}


themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        document.addEventListener('alpine:init', () => {
          Alpine.store('theme', localStorage.getItem('color-theme'))
         });

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }


    }

 

    
});

}

});



 /* 
// dropzone
	const dropzone = new Dropzone(
	
	"#dropzone", { 
	  
	  url: "/process/resolution/upload" ,
	  thumbnailWidth : 100,
	  thumbnailHeight : 100,
	  createImageThumbnails:true,
	  dictDefaultMessage: 'drop_files_or_click_to_upload',
	  init: function() {
		this.on("success", function(file, serverResponse) {
		   this.createThumbnailFromUrl(file, serverResponse.filepath);
			 //this.removeFile(file);
			 addFile(serverResponse);
  
		});
  
	 }
  
  }); */