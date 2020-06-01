$(document).ready(function() {

    const mobileMenuToggle = document.querySelector('.toggle-menu');
    const mobMenu = document.querySelector('.header__menu');
    const overlay = document.querySelector('#overlay');

    mobileMenuToggle.addEventListener('click', function(){
        mobMenu.classList.toggle('active');
        this.classList.toggle('active');
        overlay.classList.toggle('active');
        $('body').classList.toggle('lock');

    });

    window .addEventListener('resize', function(){
        mobMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        overlay.classList.remove('active');
    });

    var btn = $('#button');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });


    // placeholder

    const formInputs = document.querySelectorAll('.form-item');

    for(let item of formInputs){

        const inputPlaceholder = item.nextElementSibling;

        item.addEventListener('click', function() {
            inputPlaceholder.classList.add('active');
        });

        item.addEventListener('blur', function(){
            if(this.value == ''){
                inputPlaceholder.classList.remove('active');
            }
        })
    }

    let containerEl = document.querySelector('#portfolio-projects');

    let mixer = mixitup(containerEl);
})



