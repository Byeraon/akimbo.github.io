$(function() {
    // устанавливаем прозрачность изображения на 50%
    $(window).load(setEqualHeight);
    $(window).resize(setEqualHeight);
    $(window).load(checkIOS);
    $(window).resize(checkIOS);
    $(".button").css("opacity", "0.5");
    $(".button").hover(function() {
            // после чего прозрачность исчезает

            $(this).animate({
                top: 1.0,
                opacity: 1.0
            }, "fast");
        },

        // после снятия наведения мыши на изображение
        function() {

            // прозрачность возвращается в исходное положение 50%

            $(this).animate({
                opacity: 0.5,
                top: -1.0
            }, "fast");
        });

    function setEqualHeight() {
        var str1 = document.getElementById("id1");
        str1.innerHTML = "         choose your car";
        var str2 = document.getElementById("id2");
        str2.innerHTML = "     it is very";
        //var str3 = document.getElementById("id3");
        //str3.innerHTML = "         choose your car";
        if ($(window).width() < 768) {

            str1.innerHTML = "choose your car";
            str2.innerHTML = "it is very";
        } else {
            str1.innerHTML = "         choose your car";
            str2.innerHTML = "     it is very";

        }
    }

    function checkIOS() {
        var is_uiwebview = document.getElementById("id4");
        is_uiwebview.innerHTML = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
        var is_safari_or_uiwebview = document.getElementById("id5");
        is_safari_or_uiwebview.innerHTML = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
    }
});