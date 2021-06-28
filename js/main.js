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

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);    // 스크롤 값
    if(window.scrollY > 500){
        badgeEl.style.dislay = 'none';
        // gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, .6, {   // 배지 숨기기 애니메이션
            opacity : 0,
            dislay : 'none'
        })
    }else{
        badgeEl.style.dislay = 'block';
        gsap.to(badgeEl, .6, {
            opacity : 1,
            dislay : 'block'
        })
    }
}, 300));  //0.3초

const fadeEls = document.querySelectorAll(".visual .fade-in")
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {   // 순차적으로 나타나기
        delay: (index+1 )*.7, // 0.7초, 1.4초, 2.1초, 2.7초
        opacity : 1
    });
});

