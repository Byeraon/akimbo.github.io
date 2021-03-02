$(function() {
    // устанавливаем прозрачность изображения на 50%
    $(window).load(setEqualHeight);
    $(window).resize(setEqualHeight);
    $(window).load(tlp);


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

    function tlp() {
        Element.prototype.reshape = function() {
            var self = this;


            function change() {
                var is_safari_or_uiwebview = document.getElementById("id5");
                is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
                if (is_safari_or_uiwebview == true) {
                    self.style.marginLeft = "50%";
                    self.style.marginRight = "50%";
                    self.style.textAlign = "center";
                    self.style.marginTop = "55vh";
                    self.style.borderRadius = "0";
                    self.style.height = "auto";
                    self.style.fontSize = "5.625vw";
                    self.style.lineHeight = "5.625vw";
                    self.style.width = "100vw";
                    self.style.marginLeft = "0";
                    self.style.opacity = "0.5";
                    self.style.paddingTop = "5vh";
                    self.style.paddingLeft = "0";
                    self.style.paddingRight = "0";
                    self.style.paddingBottom = "5vh";
                    self.style.fontSize = "13.1vw";

                }
                console.log(is_safari_or_uiwebview);
            }

            return change();
        };

        document.getElementById('but').reshape();
    }
});