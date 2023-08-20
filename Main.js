$(".menu").click(function(){
    $("#leftMenu").css({ display:'flex'},50)
    $(".menu").css({ left:'270px'},50)

    $("#leftMenu").animate({ width:'250px'},50)
   $(".home-contentt").animate({marginLeft :'250px'},50)
})
$(".closebtn").click(function(){
    $("#leftMenu").animate({ width:'0px'},50)
    $("#leftMenu").css({ display:'none'},50)
    $(".menu").css({ left:'20px'},50)
   $(".home-content").animate({marginLeft :'0px'},50)
})

$('#leftMenu a').on('click',function(e){
   
    let aHref= $(e.target).attr("href")
    let sectionOffset = $(aHref).offset().top;
    $("html , body").animate({scrollTop:sectionOffset},2000);
})


$('#sliderDown .toggle-one').click(function(){
    $('.first-par').slideToggle(500);

   
    
});
$('#sliderDown .toggle-tow').click(function(){

    $('.second-par').slideToggle(500);

    
    
});
$('#sliderDown .toggle-three').click(function(){
    $('.third-par').slideToggle(500);

    
    
});
$('#sliderDown .toggle-four').click(function(){
    $('.fourth-par').slideToggle(500);

    
    
});








window.onload = function() {
   
    countDownToTime("31 december 2023 11:59:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }


  var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  console.log(length);
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#num").text("your available character finished");
                
            }
        else{
        
        $("#num").text(AmountLeft);
        }
});

