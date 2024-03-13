// 練習叉叉
$(document).ready(function ()
{
  $('.all-clos').click(function (e) { 
    e.preventDefault();
    $(this).toggleClass('act');
  });
});

//測試用
$(document).ready(function ()
{
  $('#QQ').click(function (e) { 
    e.preventDefault();
    $(this).toggleClass('bg-warning');
  });
});

// 練習響應式
$(document).ready(function ()
{
  $('.con').click(function (e){ 
    e.preventDefault();
    $('.box').toggleClass('bos');
  });
});

//向下滾動 Ｘ Ｙ 軸會有進入進出效果
$(document).ready(function(){    

  $(window).scroll(function(){
  var scrollPos = $(window).scrollTop();
  var windowHeight = $(window).height();
  // console.log(scrollPos, windowHeight);

    // animated－左邊進
    $('.all-animated-s').each(function(){
    var thisPos = $(this).offset().top;

    if((windowHeight + scrollPos) >= thisPos) {
      $(this).addClass('fadeln-s');
    }
     else if((windowHeight - scrollPos / 2) <= thisPos) {
        $(this).removeClass('fadeln-s');
      }
    });
    // animated－右邊進
    $('.all-animated-e').each(function(){
      var thisPos = $(this).offset().top;
  
      if((windowHeight + scrollPos) >= thisPos) {
        $(this).addClass('fadeln-e');
      }
       else if((windowHeight - scrollPos / 2) <= thisPos) {
          $(this).removeClass('fadeln-e');
        }
      });
      // animated－圖片反轉效果
      $('.all-animated-x').each(function(){
        var thisPos = $(this).offset().top;
    
          if((windowHeight - scrollPos / 2) <= thisPos) {
            $(this).removeClass('fadeln-x');
          }
          if((windowHeight + scrollPos) >= thisPos) {
            $(this).addClass('fadeln-x');
          }
        });
      // 導覽列效果
      $('.navbar').each(function(){
        var thisPos = $(this).offset().top;
        
        if((scrollPos * 2) <= thisPos) {
         $(this).removeClass('bg-coffee').addClass('bg-dark');
        }
        else if((windowHeight + scrollPos / 2) >= thisPos) {
          $(this).addClass('bg-coffee').removeClass('bg-dark');
        }
          // if((scrollPos * 2 ) <= thisPos) {
          //   $(this).removeClass('bg-coffee').addClass('bg-dark');
          // }
      });

  });

});



// 錨點
$(document).ready(function ()
{
  $('.nav-link').click(function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    var targetPos = $(target).offset().top - 100;
    $('html, body').animate({scrollTop: targetPos}, 500);
  });

  $('.back-to-top').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({scrollTop: 0} , 500);
  });
});


//商品列表按鈕切換效果
$(document).ready(function ()
{
  $('.product').click(function (e) { 
    e.preventDefault();
    $(this).addClass('active').parent().siblings().find('.product').removeClass('active');
  });
});

$(document).ready(function () {
  $('.product_a').click(function (e) { 
    e.preventDefault();
    $('#product-a').show();
    $('#product-b').hide();
    $('#product-c').hide();
  });

  $('.product_b').click(function (e) { 
    e.preventDefault();
    $('#product-b').show();
    $('#product-a').hide();
    $('#product-c').hide();
  });

  $('.product_c').click(function (e) { 
    e.preventDefault();
    $('#product-c').show();
    $('#product-a').hide();
    $('#product-b').hide();
  });
});


//核取方塊和選項按鈕 (Checks and radios) 切換 陰影 效果
$(document).ready(function ()
{
  $('.btn-test-outline-info').click(function (e) { 
    // e.preventDefault();
    $(this).toggleClass('active').parent().siblings().find('.btn-test-outline-info').removeClass('active');
  });
});


//Swiper的輪播
$(document).ready(function () {
  var swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    // slidesPerGroup: 1,
    loop: true,
    // loopFillGroupWithBlank: true,
    centerSlid: 'true',
    fade:'true',
    grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween: 100,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 50,
      },
      1024: {
        slidesPerView: 3,
        // spaceBetween: 100,
      },
      1440: {
        slidesPerView: 3,
        // spaceBetween: 40,
      },
    },
  });
});



// 後台管理：可收合的側欄選單 ＪＳ
const toggleMenuBtn = document.querySelector('#toggle-btn');
const body = document.querySelector('body');
toggleMenuBtn.addEventListener('click', (evt) => {
  // console.log(evt);
  evt.preventDefault();
  body.classList.toggle('sidebar-toggled');
});
var swiper = new Swiper(".row", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGropu: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
});

// 後台管理：動態圖表範例程式碼（老師提供 要搭配ＪＳ連結）
(() => {
  const chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
  };
  var randomScalingFactor = function () {
    return Math.round(Math.random() * 2000000);
  };

  const pieCtx = document.getElementById('pie-chart').getContext('2d');
  const barCtx = document.getElementById('bar-chart').getContext('2d');

  const config = {
    type: 'pie',
    data: {
      datasets: [{
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: [
          chartColors.red,
          chartColors.orange,
          chartColors.yellow,
          chartColors.green,
          chartColors.blue,
        ],
        label: 'Dataset 1'
      }],
      labels: [
        '大麥克全餐',
        '肥宅快樂水',
        '太爽啦義大利麵',
        '薯條加大吃不完',
        '兒童餐椅不給坐',
      ]
    },
    options: {
      responsive: true
    }
  };
  const barConfig = {
    type: 'bar',
    data: {
      datasets: [{
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: [
          chartColors.red,
          chartColors.orange,
          chartColors.yellow,
          chartColors.green,
          chartColors.blue,
          chartColors.purple,
        ],
        label: 'Dataset 1'
      }],
      labels: [
        '一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
      ]
    },
    options: {
      responsive: true
    }
  };
  const pieChart = new Chart(pieCtx, config);
  const barChart = new Chart(barCtx, barConfig);
})();



// 後台管理：傳遞內容至 Modal 內 （要放在ＨＴＭＬ
// const modalByDelete = document.querySelector('#deletModal');
//   modalByDelete .addEventListener('show.bs.modal', function(event){
//   const button = event.relatedTarget;
//   const orderId = button.dataset.bsOrderId;
//   console.log(button, orderId);
//   const modalText = modalByDelete.querySelector('#deletText');

//   modalText.textContent = orderId;
// });
