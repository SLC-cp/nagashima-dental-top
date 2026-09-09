
// スライダー
$(function () {
  $('.sec09-slider').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: 'linear',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false
  });
});


// ハンバーガーメニュー

document.addEventListener('DOMContentLoaded', () => {
  // ハンバーガーボタン（PC用・SP用の両方）を取得
  const hamburgerBtns = document.querySelectorAll('.hamburger');
  const naviContents = document.querySelector('.sp-navi-contents');
  const overlay = document.querySelector('.overlay');

  // メニュー開閉処理を行う関数
  const toggleMenu = () => {
    // 各ハンバーガーボタンに is-active / active を切り替え
    hamburgerBtns.forEach(btn => {
      btn.classList.toggle('is-active');
      btn.classList.toggle('active');
    });

    // ナビゲーションメニューとオーバーレイの表示切り替え
    if (naviContents) {
      naviContents.classList.toggle('is-active');
      naviContents.classList.toggle('active');
    }
    if (overlay) {
      overlay.classList.toggle('is-active');
      overlay.classList.toggle('active');
    }
  };

  // すべてのハンバーガーボタンにクリックイベントを設定
  hamburgerBtns.forEach(btn => {
    btn.addEventListener('click', toggleMenu);
  });

  // 暗い背景（オーバーレイ）をクリックしたときにもメニューを閉じる
  if (overlay) {
    overlay.addEventListener('click', toggleMenu);
  }
});

// 治療の流れ（横スライダー）
$(function () {
  $('.flow-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev" aria-label="前へ">前へ</button>',
    nextArrow: '<button type="button" class="slick-next" aria-label="次へ">次へ</button>',
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 800,  settings: { slidesToShow: 1.15, arrows: true } }
    ]
  });
});
