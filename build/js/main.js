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
  
//дальше копирую полностью конструкцию, вместе с циклом if


