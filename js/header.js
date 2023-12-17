$(document).ready(function(){ //初始化
    $("#toggleMobileSearch").click(function(){  //打開手機板搜尋box
        $(".mobile-search-box").toggleClass("active")
    })

    var mobileNav = $(".mobile-nav");
    // console.log('Click event triggered');

    $("#toggleMobileNav").click(function(){ //以hamburger開關手機板menu
        if (mobileNav.hasClass("active")){
            mobileNav.animate({left: "100vw"}, 600);
            setTimeout(function(){
                mobileNav.css('display','none')
                mobileNav.toggleClass("active")}, 600);
        }else{
        mobileNav.toggleClass("active");
        mobileNav.css('display','block')
        mobileNav.animate({left: "0"}, 600);
        }
    })

    $('#remainingMobileNavBox').click(function(){
        if(mobileNav.hasClass("active")){
            mobileNav.animate({left: "100vw"}, 600);
            setTimeout(function(){
                mobileNav.css('display','none')
                mobileNav.removeClass("active")}, 600);
        }
        console.log('hello')
    })

    // console.log('After animation:', mobileNav.css('display'));
})
