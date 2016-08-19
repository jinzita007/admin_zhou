$(document).ready(function() {
  $('.nav_list_a').click(function() {
  //var tmp = null,
    //$title = $('.nav li'),
   // $con = $('.nav li > ul');
 
 // $title.click(function(){
    $('.nav li').children('ul').slideUp().end().children('.arrow').removeClass('arrow-up');
    $('.nav li > ul').children('ul').slideToggle().end().children('.arrow').addClass('arrow-up');
    //tmp = this;
  });
 // $con.click(function(){
 //   return false;  // 阻止事件冒泡
//  });
});