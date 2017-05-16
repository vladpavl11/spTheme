define([
  "jquery",
  "TweenMax",
], 
function($) {

 // $(document).on('click', '.navigation li.level-top.parent>a', function(e){
 // 	console.log('click');
 //        e.preventDefault();
 //        if($(this).parents('li.level-top').hasClass('open')){
 //            $('li.level-top').removeClass('open');
 //        }else{
 //            $('li.level-top').removeClass('open');
 //            $(this).parents('li.level-top').addClass('open');
 //        }
 //    });

 //    $(document).on('click', '.navigation li.level1.parent>a', function(e){
 //        e.preventDefault();
 //        e.stopPropagation();
 //        e.stopImmediatePropagation();
 //        if($(this).parents('li.level1').hasClass('open')){
 //            $('li.level1').removeClass('open');
 //        }else{
 //            $('li.level1').removeClass('open');
 //            $(this).parents('li.level1').addClass('open');
 //        }
 //        return false;
 //    });

var nav_bar = TweenMax.to('.nav-toggle', 0.2, {rotation:90});
nav_bar.pause();
var timeline = TweenMax.to({}, 0.4, {
  onUpdateParams:["{self}"],
  onUpdate:function(tl){
    var tlp = (tl.progress()*10)>>0;
    TweenMax.set('.page-wrapper ',{'-webkit-filter':'blur(' + tlp + 'px' + ')','filter':'blur(' + tlp + 'px' + ')'});
  }
});
timeline.pause();
 
$(".hamburger").on("click", function() {
  var hamburger = document.querySelectorAll(".hamburger");
    if (hamburger.length > 0) {
          this.classList.toggle("is-active");
       
      
    }
	if ($("html").hasClass("nav-open")) {
	  timeline.reverse();
	  nav_bar.reverse();
	}else{
		timeline.play();
		nav_bar.play();
	}
});

  return;
});
