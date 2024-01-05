window.onload = () => {
    var header = document.querySelector('header');
    var headerMoving = function(direction){
        if (direction === "up"){
            $("header").removeClass("scrollDown");
            $(".header__popup").removeClass("scrollDown");
        } else if (direction === "down"){
            $("header").addClass("scrollDown");
            $(".header__popup").addClass("scrollDown")
        }
    };
    var prevScrollTop = 0;
    document.addEventListener("scroll", function(){
        if (window.screen.width < 930) {
            var nextScrollTop = window.pageYOffset || 0; 
            if (nextScrollTop > prevScrollTop){
                headerMoving("down");
            } else if (nextScrollTop < prevScrollTop){
                headerMoving("up");
            }
            prevScrollTop = nextScrollTop;
        }
    });

    let num = 0;
    $(".header__popup").on("click", function() {
        $(".header__popup i").eq(num % 2).toggleClass("rotateAnimation")
        $(".new-section").toggleClass("openPopup")
        if (num % 2 == 0) {
            $(".header__popup").transition({ y: '83px' });
        } else {
            $(".header__popup").transition({ y: '0px' });
        }
        setTimeout(function () {
            $(".header__popup i").eq(num % 2).css('display', 'none')
            $(".header__popup i").eq((1 + num) % 2).css('display', 'inherit')
            $(".header__popup i").eq(num % 2).toggleClass("rotateAnimation")
            num += 1;
        }, 250)
    })

    console.log("Script loaded")
}