$(function() {
    
    const mainMenu = $('.main-menu > .menu-item')

    // 방법 1
    // mainMenu
    //     // 마우스 올렸을 때
    //     .on('mouseover', function() {
    //         $('.submenu').stop().slideDown()
    //     })

    //     // 마우스 벗어날 때
    //     .on('mouseout', function() {
    //         $('submenu').stop().slideUp()
    //     })


    // 방법 2
    /* mainMenu.hover(
        // 마우스 올렸을 때
        function() {
            $('.submenu').stop().slideDown()
        },
        // 마우스 벗어날 때
        function() {
            $('.submenu').stop().slideUp()
        }
    ) */

    // 방법 3
    mainMenu.hover(
        () => {
            $('.submenu').stop().slideDown()
        },
        () => {
            $('.submenu').stop().slideUp()
        }
    )
    // this가 아닌 .submenu 전체에 대한 적용은 () => {} 사용가능
})