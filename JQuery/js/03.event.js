// 이벤트 처리 메소드
// - on ( '이벤트 타입', 콜백함수{} )
// * 이벤트 타입 : click, keyup, change, ...

/* 
    콜백함수
    - function()    : $(this) 사용가능
    - () => {}      : $(this) 사용불가
 */

$(function() {

    // # 을 생성자 앞에 붙여야 id를 조회할 수 있다
    $('#item1').on('click', function() {
        $('#item1').css('color', 'red')
    })

    // this : 현재 속한 블록의 객체
    //        현재 선택한 요소를 가리키는 키워드

    $('#item2').on('click', function() {
        $(this).css('color', 'hotpink')
    })

    $('#item3').on('mouseover', function() {
        $(this).css('color', 'red')
        $(this).css('background-color', 'black')
    })

    $('#item3').on('mouseout', function() {
        $(this).css('color', 'white')
        $(this).css('background-color', '#3498db')
    })

    // 메서드 체인
    // → 하나의 jQuery 객체에 여러 메소드를 연결하는 기법
    
    $('#item4')
        .on('mouseover',function() {
            $(this).css('color', 'red')
            $(this).css('background-color', 'black')
        })

        .on('mouseout',function() {
            $(this).css('color', 'white')
            $(this).css('background-color', '#3498db')
        })

    $('#item5')
        // 마우스 포인터를 객체 위에 올렸을 경우
        .on('mouseover',function() {
            $(this).css('color', 'red')
            $(this).css('background-color', 'black')
        })

        // 마우스 포인터가 객체 밖으로 벗어났을 경우
        .on('mouseout',function() {
            $(this).css('color', 'white')
            $(this).css('background-color', '#3498db')
        })

        // 클릭
        .on('click',function() {
            $(this).css('color', 'springgreen')
        })

        // 더블 클릭
        .on('dblclick',function() {
            $(this).css({
                'border'            : '10px solid hotpink',
                'background-color'  : 'black',
                'color'             : 'yellow'
            })
        })


})


