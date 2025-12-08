$(function() {                      /* html 요소 준비 후 실행 */
    let index = 0                   /* 현재 슬라이드 인덱스 */
    const speed = 500               /* 애니메이션 속도 */
    const time = 3000               /* 자동 슬라이드 시간 */
    const $slide = $('.slide')      /* 개별 슬라이드 요소 */
    const count = $slide.length     /* 슬라이드 개수 */

    setInterval(function() {        /* time(3초)마다 타이머 실행 */
        index = (index + 1) % count /* 0 1 2 인덱스 증가 (순환) */
        $slide.fadeOut(speed)       /* 모든 슬라이드 fade-out */
        $slide.eq(index).fadeIn(speed)  /* 현재 슬라이드 fade-in */
    }, time)
})