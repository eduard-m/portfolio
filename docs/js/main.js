$(document).ready(function() {

    const mobileMenuToggle = document.querySelector('.toggle-menu');
    const mobMenu = document.querySelector('.header__menu');
    const overlay = document.querySelector('#overlay');

    mobileMenuToggle.addEventListener('click', function(){
        mobMenu.classList.toggle('active');
        this.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('lock');

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

    // form validate

    $('#contacts__form').validate({
      rules:{
        email: {
            required: true,
            email: true
              },
        theme: {
          required: true
              },
        message: {
          required: true
                }      
        },
        messages:{
          email: {
            required: 'Введите Ваш email',
            email: 'Неправильный email адрес'
              },
              theme: {
                required: 'Введите тему сообщения'
                    },
                    message: {
                      required: 'Введите текст сообщения'
                            }      
        },
        submitHandler: function(form) {
          ajaxFormSubmit();
        }
    });

        // Функция AJAX запрса на сервер

        function ajaxFormSubmit() {

          let string = $("#contacts__form").serialize(); // Соханяем данные введенные в форму в строку.
  
          //Формируем ajax запрос
          $.ajax({
              type: "POST", // Тип запроса - POST
              url: "php/mail.php", // Куда отправляем запрос
              data: string, // Какие даные отправляем, в данном случае отправляем переменную string
  
              // Функция если все прошло успешно
              success: function (html) {
                  $("#contacts__form").slideUp(800);
                  $('#answer').html(html);
              }
          });
  
          // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
          return false;
      }


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



