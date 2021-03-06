var introHeight = $('.intro').offset().top;
var projectsHeight = $('.projects-index').offset().top;
// var githubHeight = $('.github').offset().top;
// var linksHeight = $('.links').offset().top;
// var contactHeight = $('.contact').offset().top;

var init = function(){

}
// console.log("intro: " + introHeight + ", projects: " + projectsHeight + ", github: " + githubHeight + ", links: " + linksHeight + ", contact: " + contactHeight);

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  function imageFadeIn(top,bottom,elName,bgColor) {
    // console.log("scrolltop: " + wScroll);
    if (top <= wScroll && wScroll <= bottom) {
      $('.' + elName + '-fadein').css({
        'background-color' : bgColor,
        'opacity' : '1'
      });
    } else {
      $('.' + elName + '-fadein').css({
        'opacity' : '0'
      });
    }
  }

  function bgcolorFadeIn(top,bottom,elName,bgColor) {
    if (top <= wScroll && wScroll <= bottom) {
      $('.fixed-bg').css({
        'background-color' : bgColor,
        'opacity' : '1'
      });
    }
  }

  var totalHeight = $(document).height();
  var peachColor = '#f6dccb';
  bgcolorFadeIn(introHeight,projectsHeight-300,"intro",peachColor);
  // bgcolorFadeIn(projectsHeight,githubHeight,"projects",'#ffffff');
  // bgcolorFadeIn(linksHeight,contactHeight,"links",'#f58b7a');
  imageFadeIn(projectsHeight-300,totalHeight,"projects-index","white");
  // imageFadeIn(contactHeight,totalHeight,"contact","#edba1c");

});
