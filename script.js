$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            name:{
                required:true,
                minlength:3
            },
            place:{
                required:true,
            },
            email:{
                required:true,
            }
        },
        messages:{
            name:{
                required:"Enter a beautiful name like as SHANEEB"
            }
        }

        
    })
})

const faders = document.querySelectorAll('.fade-in')
const appearOptions = {
    threshold:1,
    rootMargin: "0px 0px -100px 0px "
};
const appearOnScroll = new IntersectionObserver(function(entries, 
    appearOnScroll) {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    },appearOptions);
    faders.forEach(fader =>{
        appearOnScroll.observe(fader);
    })
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    

    $document.ready(function(){
        $(window).scroll(function(){
            if($(this).scrollTop() > 0){
                $(".image").css({"opacity" : "0" })
            }
            else{
                $(".image").css({"opacity" : "1" })
            }


        })
    })