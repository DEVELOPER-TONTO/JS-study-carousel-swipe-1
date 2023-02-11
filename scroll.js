// document.querySelector('.navbar-toggler').addEventListener('click',function(){
//     document.querySelector('.list-group').classList.toggle('show');
// });

$(".navbar-toggler").on("click", function () {
  $(".list-group").toggleClass("show");
});

// document.querySelector('#login').addEventListener('click',function(){
//     document.querySelector('.black-bg').classList.add('show');
// });

// document.querySelector('#close').addEventListener('click',function(){
//     document.querySelector('.black-bg').classList.remove('show');
// });

$("#login").on("click", function () {
  $(".black-bg").addClass("show-ani");
});

$("#close").on("click", function () {
  $(".black-bg").removeClass("show-ani");
});


//전송버튼 누르면 첫 input 값 공백씨 알림 띄움
document.querySelector("form").addEventListener("submit", function (e) {
    let vau = document.querySelector(".form-id").value;  
  
  if (vau == "") {
    alert("아이디 뭐하냐 지금");
    e.preventDefault();
  }

  if (/\S+@\S+\.\S+/.test(vau) == false) {
    alert("이메일로 쳐야지 뭐하냐 지금");
    e.preventDefault();
  }

  if (document.querySelector(".form-pwd").value == "") {
    alert("비번 뭐하냐 지금");
    e.preventDefault();
  }

  if (document.querySelector(".form-pwd").value.length < 6) {
    alert("비번 6자넘게 지금");
    e.preventDefault();
  }
});


//darkmode
let D_count = 0;

document.querySelector(".bg-dark").addEventListener("click", function () {
  if (D_count % 2 == 0) {
    document.querySelector(".bg-dark").innerHTML = "light 🔄";
    document.querySelector(".bd").classList.add("dark");
    D_count += 1;
  } else {
    document.querySelector(".bg-dark").innerHTML = "dark 🔄";
    document.querySelector(".bd").classList.remove("dark");
    D_count += 1;
  }
});


//5초가 지나면 없어지는 div
// let count = 5;

// var out = setInterval(function () {
//   count -= 1;
//   if (count > 0) {
//     document.querySelector("#num").innerHTML = count;
//     setInterval(out, 1000);
//   } else {
//     document.querySelector(".alert").style.display = "none";
//     clearTimeout(out);
//   }
// }, 1000);


// 1,2,3번 버튼 누르면 화면이동
document.querySelector('.slide-1').addEventListener('click',function(){
  document.querySelector('.slide-container').style.transform = 'translateX(0vw)';
});

document.querySelector('.slide-2').addEventListener('click',function(){
  document.querySelector('.slide-container').style.transform = 'translateX(-100vw)';
  지금사진=2;
});

document.querySelector('.slide-3').addEventListener('click',function(){
  document.querySelector('.slide-container').style.transform = 'translateX(-200vw)';
  지금사진=3;
});

// $('.slide-2').on('click', function() {
//   $('.slide-container').css('transform', 'translateX(-100vw)');
// });


//다음이전버튼
let 지금사진 = 1;

document.querySelector('.next').addEventListener('click',function(){
  document.querySelector('.slide-container').style.transform = 'translateX(-'+지금사진+'00vw)';
  지금사진+=1;
});

document.querySelector('.prev').addEventListener('click',function(){
  지금사진-=1;
  document.querySelector('.slide-container').style.transform = 'translateX(-'+지금사진+'00vw)';
});


//scroll 이벤트 리스터
window.addEventListener('scroll',function(){
  let val = window.scrollY;
  if(val > 100){
    document.querySelector('.navbar-brand').style.fontSize = "10px";
  }
  else if(val < 100){
    document.querySelector('.navbar-brand').style.fontSize = "30px";
  }
});

//div 박스 내린양 찾기
document.querySelector('.lorem').addEventListener('scroll',function(){
  let 스크롤양 = document.querySelector('.lorem').scrollTop; // 내린 높이
  let 스크롤야 = document.querySelector('.lorem').scrollHeight;  // 실제 높이
  let 스콜양 = document.querySelector('.lorem').clientHeight; // 눈에 보이는 div 박스 높이

  if(스콜양 + 스크롤양 > 280){
    alert('오우 오우 다읽었고');
  }
});

//스크롤 진척도 프로그레스 바
window.addEventListener('DOMContentLoaded',function(){
  window.addEventListener('scroll', function(){
    if(document.querySelector('.progress-bar') != null)set();
  });
});

function set(){
  let currY = document.documentElement.scrollTop;
  let totalY = document.documentElement.scrollHeight - document.documentElement.clientHeight; // 전체 높이
  let percentage = (currY / totalY) * 100;
  document.querySelector('.progress').style.width = percentage + "%";
}