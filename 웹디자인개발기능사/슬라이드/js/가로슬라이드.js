$(function() {                      /* html 준비가 되면 실행 */
    const speed = 500               /* 슬라이드 애니메이션 속도 (ms) */
    const time = 3000               /* 자동 슬라이드 시간 (ms) */
    const $slide = $('.slide')      /* 개별 슬라이드 요소 */
    const $container = $('.slide-container')    /* 슬라이드 컨테이너 */
    const size = $slide.width()     /* 한 슬라이드 사이즈 - 가로 슬라이드:width() */
    const count = $slide.length     /* 슬라이드 개수 */

    $container.width(size*count)    /* 컨테이너 사이즈 지정 */ 

    setInterval(function() {        /* time(3초) 마다 타이머 실행 */
        $container.animate({        /* 애니메이션 */
            left: -size             /* 슬라이드 사이즈만큼 이동 */
        }, speed, function() {      /* 애니메이션 speed(0.5) 동안 동작 */
            /* 애니메이션 후 동작 */
            /* 위치 초기화 */
            $container.css('left', 0)
            /* 맨 앞 슬라이드를 맨 뒤로 이동 */
            $container.append($('.slide').first())
        })
    }, time)
})