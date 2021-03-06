new Swiper('.swiper-container', {
    pagination:{
        el:'.swiper-pagination',
        clickable:true
    },
    slidesPerView:3,
    breakpoints:{
     320:{
         slidesPerView:1,
     },
     720:{
         slidesPerView:2,
     },
     1050:{
         slidesPerView:3,
     },
        
    },
    loop:true,
});