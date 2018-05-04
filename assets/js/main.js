$(function(){

    // Инициализация слайдеров на главнойстранице
    (function(){
        // Главная страница. верхний
        $('.main__slider-items').slick({
            dots: true,
            infinite: true
        });

        // Главная страница. Раздел Видео
        $('.main__video-items').slick({
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        // Главная страница. Раздел Интервью
        $('.main__interview-items').slick({
            dots: false,
            infinite: true
        });
    })();



    // Кнопка пролистывания вверх станицы
    (function(){
        var btn = $('#slideup'),
            wind = $(window),
            duration = 500,
            durationToTop = 600;

        wind.scroll(function(){
            if (wind.scrollTop() > 700) {

                btn.fadeIn(duration, function() {
                    btn.addClass('slideup-visible');
                });
            }
            else {
                btn.fadeOut(duration);
            }
        });

        btn.on('click', function(e){
            e.preventDefault();
            btn.hide();
            $('html, body').animate({scrollTop: 0}, durationToTop);
        });
    })();



    // Главное меню и форма поиска
    (function(){
        var duration = 200;
        // Показать/скрыть главное меню
        $('.header__menu-mob-icon').add('.header__menu-mob-title').on('click', function(){
            if($('.header__search').is(':visible')) {
                $('.header__search').slideUp(duration);
            }

            $('.header__menu-list').stop(false, false).slideToggle(duration);
        });
        // Показать/скрыть форму поиска
        $('.header__menu-mob-search-icon').on('click', function(){
            if($('.header__menu-list').is(':visible')) {
                $('.header__menu-list').slideUp(duration);
            }

            $('.header__search').stop(false, false).slideToggle(duration);
            $('.header__search-field').focus();
        });
    })();



    // Загрузка iframe видео youtube по клику
    (function(){
        $('.video__player-block').on('click', function(e){
            e.preventDefault();

            var $this = $(this),
                //parent = $this.parent(),
                videoId = $this.data("video-id");

            var iframe = '<iframe class="main__player-iframe" src="https://www.youtube.com/embed/' + videoId + '?rel=0&showinfo=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
            $this.html(iframe);
        });
    })();
});