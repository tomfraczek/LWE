$(document).ready(function(){
  $(window).scroll(function(){
   var top = $(window).scrollTop();
   var find_class_small = $.contains('header, .logotype, .menu, .tite, #sections_panel, .but_nav, #sections_btn_holder', '.small');

   if(top > 50 && find_class_small == false) {
    $('header, .logotype, .menu, .tite, #sections_panel, .but_nav, #sections_btn_holder').addClass('small');
   }
   else {
    $('header, .logotype, .menu, .tite, #sections_panel, .but_nav, #sections_btn_holder').removeClass('small');
   }

  });
});
