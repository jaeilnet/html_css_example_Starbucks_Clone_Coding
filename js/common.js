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

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();