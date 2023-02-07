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
count = 5;

var out = setInterval(function () {
  count -= 1;
  if (count > 0) {
    document.querySelector("#num").innerHTML = count;
    setInterval(out, 1000);
  } else {
    document.querySelector(".alert").style.display = "none";
    clearTimeout(out);
  }
}, 1000);
