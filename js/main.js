$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 90) {
      $(".sticky-header").addClass("fix");
    } else {
      $(".sticky-header").removeClass("fix");
    }
  });
});



document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.head-menu').classList.toggle('open')
})


$('.section-btn').click(function () {
$(this).toggleClass('active');
$('.section-btn').not(this).removeClass('active');
});


$(document).ready(function() {
  $('.section-btn').on('click', f_acc);
});

function f_acc(){
  //$('#question-wrapper .ac-body').slideUp(1000);
  $('.hide-text').not(    $(this).next()   ).slideUp(1000);
  $(this).next().slideToggle(1000);
}





 $('.multiple-items').slick({
  accessibility: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});
