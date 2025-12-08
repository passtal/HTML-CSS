$(function() {

    const mainMenu = $('.main-menu > .menu-item')

    // 방법 1

    // 메인 메뉴에 마우스 올렸을 때
    mainMenu.on('mouseover', function() {
        $(this).find('.submenu').stop().slideDown()
    })

    // 메인 메뉴에 마우스 벗어났을 때
    mainMenu.on('mouseout', function() {
        $(this).find('.submenu').stop().slideUp()
        // ㄴ mainmenu.find가 아니라 $(this).find가 되어야 
        // 내가 선택한 탭만 열림
    })

    // 방법 2
    // $().hover(올렸을 때, 벗어났을 때)
    
    // mainMenu.hover(
    //     function() {
    //         $(this).find('.submenu').stop().slidDown()
    //     },
    //     function() {
    //         $(this).find('.submenu').stop().slideUp()
    //     })

    // () => {} 는 사용불가능. 화살표쓰면 this 사용이 불가하므로 구현이 안댐
    // 따라서 function(){} 로 구현해주어야 함

})