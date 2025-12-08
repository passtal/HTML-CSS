$(function() {

    const mainMenu = $('.main-menu')

    // 방법 1
    // mainMenu
    //     .on('mouserover', function() {
    //         $('.submenu, #back').stop().slideDown()
    //     })
    //     .on('mouseover', function() {
    //         $('.submenu, #back').stop().slideUp()
    //     })

    // 방법 2
    // mainMenu.hover(
    //     function() {
    //         $('.submenu, #back').stop().slideDown()
    //     },
    //     function() {
    //         $('.submenu, #back').stop().slideUp()
    //     }
    // )

    // 방법 3
    mainMenu.hover(
        () => {
            $('.submenu, #back').stop().slideDown()
        },
        () => {
            $('.submenu, #back').stop().slideUp()
        }
    )
    // 그냥 function으로 통일해서 외워 가는게 더 나을듯
})