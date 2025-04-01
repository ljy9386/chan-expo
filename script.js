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
  
  // 음악 On/Off 토글 버튼
  window.addEventListener('DOMContentLoaded', () => {
    const bgm = document.getElementById('bgm');
    const toggleBtn = document.getElementById('bgm-toggle');
  
    toggleBtn.addEventListener('click', () => {
      if (bgm.paused) {
        bgm.play();
        toggleBtn.textContent = '🔈 음악 끄기';
      } else {
        bgm.pause();
        toggleBtn.textContent = '🔇 음악 켜기';
      }
    });
  });
  
  
  