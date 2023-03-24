//apparently some OS like to do abs. positioning differently? its kinda sketch that I have to math around that but what works works.

//dont even know if its still req. i made other changes and it got funky

if (navigator.userAgentData.platform.indexOf("Win")!=-1)
{
  $(".right").css('right','-115px');
  $(".left").css('left','-5px');
} else {
  $(".right").css('right','0');
  $(".left").css('left','0');
}
