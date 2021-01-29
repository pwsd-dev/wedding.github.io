if(document.getElementById('projectsSlider')){
    var slider = tns({
        // mode:"gallery",
        container: '#projectsSlider',
        items: 1,
        startIndex: 0,
        slideBy: 'page',
        autoplay: false,
        prevButton: '.projects-btn_prev',
        nextButton: '.projects-btn_next',
        nav: false,
        loop: true,
        swipeAngle: true,
      });
}

if(document.getElementById('feedbackSlider')){
  var slider = tns({
      // mode:"gallery",
      container: '#feedbackSlider',
      items: 1,
      slideBy: 'page',
      autoplay: false,
      prevButton: '.slider-feedback .projects-btn_prev',
      nextButton: '.slider-feedback .projects-btn_next',
      nav: false,
      loop: true,
      swipeAngle: true,
    });
}
  
let strs = document.querySelectorAll('.step-work-block-items-item .page__subtitle');
if(strs){
  strs.forEach((str)=>{
    str.innerHTML = str.innerHTML.replace(/(^ ?|<br> ?|[!?.] .*?)([\wа-яё]+)/gim, '$1<span class="hl">$2</span>');
  });
}
