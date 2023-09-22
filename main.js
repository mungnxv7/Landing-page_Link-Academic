const viTriCanLuotDen = document.getElementById("form_submit")
const btn_scroll =document.querySelectorAll(".btn_scroll")
btn_scroll.forEach(function(btn) {
    btn.addEventListener("click", function() {
      viTriCanLuotDen.scrollIntoView({
        behavior: "smooth", // Thêm hiệu ứng trượt mượt
        block: "start" // Để lướt đến phía trên của đối tượng
      });
    });
  });

  const btn_nav =document.querySelector("#btn-nav");
  const nav =document.querySelector("#nav");
  const btn_close =document.querySelector("#btn-close");
  btn_nav.addEventListener('click', function () {
    nav.classList.toggle('active');
    btn_nav.classList.toggle('hidden_block');
    btn_close.classList.toggle('hidden_block');
    });
    btn_close.addEventListener('click', function () {
        nav.classList.toggle('active');
        btn_close.classList.toggle('hidden_block');
        btn_nav.classList.toggle('hidden_block');
        });
