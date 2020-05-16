
        
        $(".btn").on("click",function(){
            $('.menu').toggleClass("show");
            $('.logo').toggleClass("padd");
            $('.btn').toggleClass("padd");
        });
        

        $('a[href*="#"]').not('[href="#"]').not('[href="#0"]')
            .click(function (event) {
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                    &&
                    location.hostname == this.hostname
                ) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top - 64
                        }, 1000, function () {
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) {
                                return false;
                            } else {
                                $target.attr('tabindex', '-1');
                                $target.focus();
                            };
                        });
                        
                        console.log(target.offset().top);
                    }
                }
            });
            
        $(document).on('click', 'a', function () {
            $(this).addClass('active').siblings().removeClass('active')
        });
        
        
        $(document).ready(function(){
            $(window).scroll(function(){
                if($(document).scrollTop() > 350){
                    $("#navbar1").css({"box-shadow": "0px 1px 2px 1px beige"});
                   
                }else{
                    $("#navbar1").css({"box-shadow": "0px 0px 0px 0px"});
                   
                }
            })
        })
        
        $(function(){
            'use strict';
            window.addEventListener('load',function(){
                var forms = document.getElementsByClassName('needs-validation');
                
                var validation = Array.prototype.filter.call(forms,function(form){
                    form.addEventListener('submit',function(event){
                        if(form.checkValidity === false){
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            }, false);
        })();
        
