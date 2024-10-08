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
  const navList = document.querySelector('.nav_list > ul');
  const subMenus = document.querySelectorAll('.nav_list > ul > li> ul');

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
  let currentIndex = 0;
  const sliderWrap = document.querySelector('.sliderwrap');
  const slider = document.querySelectorAll('.slider');
  const sliderClone = sliderWrap.firstElementChild.cloneNode(true);
  sliderWrap.appendChild(sliderClone);
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  setInterval(() => {
    currentIndex++;
    sliderWrap.style.marginLeft = -currentIndex * 100 + '%';
    sliderWrap.style.transition = 'all 0.6s';

    if (currentIndex == slider.length) {
      setTimeout(() => {
        sliderWrap.style.marginLeft = '0';
        sliderWrap.style.transition = '0s';
        currentIndex = 0;
      }, 700);
    }
  }, 4000);

  prevBtn.addEventListener('click', function () {
    currentIndex--;
    sliderWrap.style.transition = 'all 0.6s';
    sliderWrap.style.marginLeft = -currentIndex * 100 + '%';

    if (currentIndex == -1) {
      sliderWrap.style.transition = 'all 0.6s';
      sliderWrap.style.marginLeft = '0';
      currentIndex = slider.length;
    }
  });

  nextBtn.addEventListener('click', function () {
    currentIndex++;
    sliderWrap.style.transition = 'all 0.6s';
    sliderWrap.style.marginLeft = -currentIndex * 100 + '%';

    if (currentIndex == slider.length) {
      sliderWrap.style.transition = 'all 0.6s';
      sliderWrap.style.marginLeft = '0';
      currentIndex = 0;
    }
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

  document.querySelectorAll('.e_slider_btn a').forEach((btn) => {
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

  // 모바일 tab
  const mtabBtn = document.querySelectorAll('.sidebar_tab > li');

  mtabBtn.forEach((mbtn) => {
    mbtn.addEventListener('click', function () {
      mtabBtn.forEach((mbtn) => mbtn.classList.remove('m-active'));
      mbtn.classList.add('m-active');
    });
  });

  // 모바일 햄버거
  const menuBtn = document.querySelector('.menu_btn');
  const closeBtn = document.querySelector('.close_btn');
  const sidebarMenu = document.querySelector('.sidebar_menu');
  const spot = document.querySelector('.spot');
  const nav = document.querySelector('.nav_list');

  menuBtn.addEventListener('click', function () {
    sidebarMenu.style.display = 'block';
    // sidebarMenu.style.transition = 'all 0.6s';
    nav.style.display = 'block';
    spot.style.display = 'block';
  });

  closeBtn.addEventListener('click', function () {
    sidebarMenu.style.display = 'none';
    // sidebarMenu.style.transition = '0s';
    nav.style.display = 'none';
    spot.style.display = 'none';
  });
};
