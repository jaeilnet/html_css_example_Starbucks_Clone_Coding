const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');


searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색')  // HTML속성 추가
});

searchInputEl.addEventListener('blur', function(){  //blur : focus 반대개념
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '')  // HTML속성 추가
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);    // 스크롤 값
    if(window.scrollY > 500){
        badgeEl.style.dislay = 'none';
        // gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, .6, {   // 배지 숨기기 애니메이션
            opacity : 0,
            dislay : 'none'
        })
        gsap.to(toTopEl, .2, {
            x : 0
        })
    }else{
        badgeEl.style.dislay = 'block';
        gsap.to(badgeEl, .6, {
            opacity : 1,
            dislay : 'block'
        })
        gsap.to(toTopEl, .2, {
            x : 100
        })
    }
}, 300));  //0.3초


toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo:0
    });
});

const fadeEls = document.querySelectorAll(".visual .fade-in")
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {   // 순차적으로 나타나기
        delay: (index+1 )*.7, // 0.7초, 1.4초, 2.1초, 2.7초
        opacity : 1
    });
});


// 슬라이드
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay : true,
    loop : true
});

new Swiper('.promotion .swiper-container', {
    slidesPerView : 3, // 한번에 보여줄 슬라이드 갯수
    spaceBetween : 10, //슬라이드 여백
    centeredSlides : true, // 1번이 가운데 보이기
    loop : true, // 반복재생
    autoplay : {
        delay : 2000  ///1000분에 1 500 = > 0.5초
    },
    pagination : {
        el : '.promotion .swiper-pagination',  //페이지 번호 요소 선택자
        clickalbe : true  //클릭 가능 여부
    },
    navigation:{
        prevEl:'.promotion swiper-prev',  // 슬라이드 이전 버튼
        nextEl:'.promotion .swiper-next',  // 슬라이드 다음 버튼
    }
})

new Swiper('.awards .swiper-container', {
    autoplay : true,
    loop : true,
    spaceBetween : 30,
    slidesPerView : 5,
    navigation:{
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next',
    }
})

const promotionEl = document.querySelector('.promotion')

const promotionToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        promotionEl.classList.add('hide')
    }else{
        promotionEl.classList.remove('hide')
    }
})

function random(min, max){
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size) {
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat : -1,
        yoyo : true,
        ease : Power1.easeInOut,
        delay : random(0, delay)
    })
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy') 
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement : spyEl,
            triggerHook : .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();