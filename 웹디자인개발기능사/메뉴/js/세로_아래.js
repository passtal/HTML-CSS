$(function() {
    const mainMenu = $('.menu-item')

    // 방법 1
    // mainMenu
    //     .on('mouseover', function() {
    //         $(this).find('.submenu').stop().slideDown()
    //     })
    //     .on('mouseout', function() {
    //         $(this).find('.submenu').stop().slideUp()
    //     })

    // 방법 2
    mainMenu.hover(
        function() {
            $(this).find('.submenu').stop().slideDown()
        },
        function() {
            $(this).find('.submenu').stop().slideUp()
        }
    )
})