var searchParams = new URL(window.location.href).searchParams;
var stylesheet = $('link[href="style.css"]');

if(searchParams.get('theme')==2) stylesheet.attr('href', 'style2.css');

var cube = $('.cube');
var wrapper = $('.wrapper');

$(document).mousemove((e) => {
  if(!cube.hasClass('locked')) {
    var deltaX = e.pageX - (wrapper.offset().left+(wrapper.width()/2));
    var deltaY = e.pageY - (wrapper.offset().top+(wrapper.height()/2));
    var rotateY = deltaX/($(document).width()/2) * 90;
    var rotateX = deltaY/(($(document).height()/2)) * -90;
    cube.css("transform", " rotateY("+rotateY+"deg) rotateX("+rotateX+"deg)");
  }
});

$('.top-label').click((e) => {
  cube.toggleClass('locked locked-bottom');
  $('.top-label').toggleClass('active');
  $('.bottom .fullpage-only, .cube-only').fadeToggle();
  $('.labels div:not(.top-label)').fadeToggle();
});
$('.bottom-label').click((e) => {
  cube.toggleClass('locked locked-top');
  $('.bottom-label').toggleClass('active');
  $('.top .fullpage-only, .cube-only').fadeToggle();
  $('.labels div:not(.bottom-label)').fadeToggle();
});
$('.left-label').click((e) => {
  cube.toggleClass('locked locked-right');
  $('.left-label').toggleClass('active');
  $('.right .fullpage-only, .cube-only').fadeToggle();
  $('.labels div:not(.left-label)').fadeToggle();
});
$('.right-label').click((e) => {
  cube.toggleClass('locked locked-left');
  $('.right-label').toggleClass('active');
  $('.left .fullpage-only, .cube-only').fadeToggle();
  $('.labels div:not(.right-label)').fadeToggle();
});
