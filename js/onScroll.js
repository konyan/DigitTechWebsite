$(document).ready(function () {
  $("a[href^='#']").on('click', function (e) {
    var id = $(this).attr('href');
    console.log(id);
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $(id).offset().top - 50,
    });
  });
  $(document).scroll(function () {
    var st = $(this).scrollTop();
    console.log(st);
    $('section').each(function () {
      if (st > this.offsetTop - 80 && st <= this.offsetTop - 80 + $(this).height()) {
        var id = $(this).attr('id');
        console.log(id);
        $('a[href="#' + id + '"]').addClass('text-color');
      } else {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').removeClass('text-color');
      }
    });
  });
});
