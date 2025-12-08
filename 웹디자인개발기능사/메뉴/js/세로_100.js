$(function() {
    const menu = $('.menu')
    const sub = $('.sub', '.inner')

    menu
      .on('mouseover', function() {
        sub.stop().fadeIn()
      })
      .on('mouseout', function() {
        sub.stop().fadeOut()
      })

    // 방법 2
    // menu.hover(
    //     function() {
    //         sub.stop().fadeIn()
    //     },
    //     function() {
    //         sub.stop().fadeOut()
    //     }
    // )
})