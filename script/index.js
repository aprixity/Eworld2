'use strict';

window.onload = function () {
  // 새로고침
  window.addEventListener('resize', function () {
    location.reload();
  });

  // 헤더 tab
  const htabBtn = document.querySelectorAll('.h-tab-btn > ul > li > a');

  htabBtn.forEach((hbtn) => {
    hbtn.addEventListener('click', function () {
      htabBtn.forEach((hbtn) => hbtn.classList.remove('h-active'));
      hbtn.classList.add('h-active');
    });
  });

  // nav
  const navList = document.querySelector('.nav > ul');
  const subMenus = document.querySelectorAll('.nav > ul > li> ul');

  subMenus.forEach(function (submenu) {
    submenu.style.display = 'block';
    submenu.style.height = '0';
    submenu.style.overflow = 'hidden';
    submenu.style.transition = 'all 0.6s';

    navList.addEventListener('mouseover', function () {
      document.querySelectorAll('.submenu').forEach((sub) => {
        sub.style.height = '190px';
      });
      document.getElementById('header').classList.add('on');
    });

    navList.addEventListener('mouseout', function () {
      document.querySelectorAll('.submenu').forEach((sub) => {
        sub.style.height = '0px';
      });
      document.getElementById('header').classList.remove('on');
    });
  });

  // 슬라이드
  const sliderInner = document.querySelector('.slider_inner'); //움직이는 영역
  const slider = document.querySelectorAll('.slider'); //각각의 이미지
  const sliderDot = document.querySelector('.slider_dot'); // 닷메뉴
  const sliderImg2 = document.querySelector('.sliderimg');

  let currentIndex = 0;
  let sliderCount = slider.length;
  let sliderWidth = sliderImg2.offsetWidth;

  let dotIndex = '';

  function intit() {
    slider.forEach(() => (dotIndex += "<a herf='javascript:' class='dot'></a>"));
    sliderDot.innerHTML = dotIndex;

    sliderDot.firstChild.classList.add('active');
  }
  intit();

  function gotoSlider(num) {
    sliderInner.style.transition = 'all 400ms';
    // sliderInner.style.marginLeft = -currentIndex * 100 + '%';
    sliderInner.style.transform = 'translateX(' + -sliderWidth * num + 'px)';
    currentIndex = num;

    let dotActive = document.querySelectorAll('.slider_dot .dot');
    dotActive.forEach((el) => el.classList.remove('active'));
    dotActive[num].classList.add('active');
  }

  document.querySelectorAll('.slider_btn a').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      let prevIndex = (currentIndex + (sliderCount - 1)) % sliderCount;
      let nextIndex = (currentIndex + 1) % sliderCount;

      if (btn.classList.contains('prev')) {
        gotoSlider(prevIndex);
      } else {
        gotoSlider(nextIndex);
      }
    });
  });

  document.querySelectorAll('.slider_dot .dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
      gotoSlider(index);
    });
  });

  // tab
  const tabBtn = document.querySelectorAll('.tab_btn > ul > li > a');
  const tabCont = document.querySelectorAll('.tab_cont > div');

  tabCont.forEach((el) => (el.style.display = 'none'));
  tabCont[0].style.display = 'block';

  tabBtn.forEach((btn, index) => {
    btn.addEventListener('click', function () {
      tabBtn.forEach((btn) => btn.classList.remove('tab_active'));
      btn.classList.add('tab_active');

      tabCont.forEach((cont) => (cont.style.display = 'none'));
      tabCont[index].style.display = 'block';
    });
  });

  // 이벤트 슬라이드
  const eventSliderImg = document.querySelector('.e_slider_img'); //보여지는 영역
  const eventSliderInner = document.querySelector('.e_slider_inner'); //움직이는 영역
  const eventSlider = document.querySelectorAll('.e_slider'); //각각의 이미지

  let currentImg = 0;
  let eventSliderCount = eventSlider.length;
  let eventSliderWidth = eventSliderImg.offsetWidth;

  function eventGotoSlider(eventNum) {
    eventSliderInner.style.transition = 'all 400ms';
    eventSliderInner.style.transform = 'translateX(' + -eventSliderWidth * eventNum + 'px)';
    currentImg = eventNum;
  }

  document.querySelectorAll('.e_slider_btn a').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      let eventPrevIndex = (currentImg + (eventSliderCount - 1)) % eventSliderCount;
      let eventNextIndex = (currentImg + 1) % eventSliderCount;

      if (btn.classList.contains('e_prev')) {
        eventGotoSlider(eventPrevIndex);
      } else {
        eventGotoSlider(eventNextIndex);
      }
    });
  });

  // 더보기 버튼
  document.getElementById('more_btn').addEventListener('click', function () {
    const moreItems = document.querySelectorAll('.more_item');
    const hidden = moreItems[0].style.display === 'none' || moreItems[0].style.display === '';

    moreItems.forEach(function (item) {
      item.style.display = hidden ? 'list-item' : 'none';
    });

    this.textContent = hidden ? '접기' : '더보기';
  });
};
