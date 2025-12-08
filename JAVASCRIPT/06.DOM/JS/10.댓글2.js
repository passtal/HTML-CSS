// 댓글 추가
function addComment() {
    // 입력한 작성자 & 내용
    const writer = document.getElementById("writer").value

    const content = document.getElementById("content").value

    // 날짜
    const today = new Date()
    const date = today.toISOString().slice(0,10)
    
    // 댓글 카드
    let commentCard = 
    `
    <div class="comment-card">
        <div class="title">
            <div class="item">
                <div class="avatar"><img src="img/avatar.png" alt="profile"></div>
                <div class="writer">${writer}</div>
            </div>
            <div class="item">
                <div class="date">${date}</div>
            </div>
            <div class="content-box">
                <p class="content">
                    ${content}
                </p>
            </div>
        </div>
    </div>
    `

    const commentList = document.getElementById("commentList")
    commentList.innerHTML += commentCard

    // 입력 내용 비우기
    document.getElementById("writer").value = ''
    document.getElementById("content").value = ''
}

// [작성] 버튼 클릭 이벤트
const btn = document.getElementById("commentBtn")
btn.addEventListener("click", (event) => {
    addComment()
})