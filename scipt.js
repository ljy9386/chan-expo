 // 클릭 시 말풍선 토글
 function toggleSpeech(el) {
    el.classList.toggle('active');
  }

  // 스크롤 시 구름 이동
  window.addEventListener('scroll', () => {
    const cloud = document.querySelector('.cloud');
    const offset = window.scrollY;
    cloud.style.transform = `translateX(${offset * 0.5}px)`;
  });