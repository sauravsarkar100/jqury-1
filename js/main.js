$(document).ready(function () {
   $('.btn1').click(function () { 
     $('.lorem').toggle('slow');
      
   });
   

   $('.btn2').mouseleave(function(){
      $('.ipsum').hide(4000);
   });

  $('.btn3').dblclick(function () { 
    $('.dolor').show(3000);
     
  });


  $('.btn4').hover(function(){
   $('.dolo').toggle('slow').css({
      'background-color' : '#333',
      'padding' : '20px',
   });;
  });
  $('h2').click(function () { 
   $('h6').slideToggle(3000);;
    
  });

  $('.button').click(function () { 
    var hello = $('.box');

    hello.animate({
      
        left:'0px',
        width:'100px',
      
    });

    
  });

 
  

});

$(document).ready(function () {
  $('.h').parentsUntil(".parant").css({
    'color':'#fff',
    'background':'blue',
    'border': '3px solid orange',
  });
$('.dic').find('.s').css({
  'color':'#fff',
    'background':'blue',
    'border': '3px solid orange',
});


});