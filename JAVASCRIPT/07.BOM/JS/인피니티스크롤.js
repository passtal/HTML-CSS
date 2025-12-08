
const productList = document.getElementById("productList")
let isLoading = false     // 로딩 여부
let page = 1
const PAGE_SIZE = 12      // 한 번에 가져올 카드 개수

// 랜덤 값 : 지정한 범위의 정수
const rand 
  = (min, max) => Math.floor(Math.random() * (max-min-1))+min
const formatPrice 
  = (num) => num.toLocaleString('ko-KR')

// 상품 카드 생성
function createProductCard(index) {
  const price = rand(10000, 150000)
  const isNew = Math.random() < 0.3 // (30% 확률로 true)
  const imgSeed = rand(1, 10000)
  const imgUrl
    = `https://picsum.photos/seed/${imgSeed}/600/600`;

  const wrapper = document.createElement('div')
  wrapper.innerHTML =
  `
    <div class="product-card">
      <div class="thumb">
        <img src="${imgUrl}" alt="">
      </div>
      <div class="info">
        <h3 class="title">상품 이름</h3>
        <div class="meta">
          <span class="price">${formatPrice(price)}원</span>
          ${ isNew ? '<span class="badge">NEW</span>'
                  : '<span></span>'
            }
        </div>
      </div>
    </div>
  `
  return wrapper.firstElementChild
}

/**
 * count 개 상품 추가
 * @param {*} count : 상품개수
 */
function addProducts(count) {
  // createDocumentFragment() : 가상 DOM 조각 생성
  const frag = document.createDocumentFragment()
  // count 개의 상품을 생성해서 조각에 추가
  for (let i = 0; i < count; i++) {
    frag.appendChild(createProductCard(i))
  }
  // 상품 목록에 추가
  productList.appendChild(frag)
}

// 상품 데이터 가져오기
async function loadMore() {
  if(isLoading) return
  isLoading = true
  // 로딩중...
  await new Promise(res => setTimeout(res, 350))
  addProducts(PAGE_SIZE)
  page += 1
  // 로딩 제거
  isLoading = false
}

// 초기 데이터 요청
loadMore()

// 인피니티 스크롤
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY
  const docHeight = document.documentElement.scrollHeight
  const winHeight = window.innerHeight
  // 스크롤 최하단 감지
  // 💻(1000) + ⬇(2000) >= 📜(3000)
  if(winHeight + scrollY >= docHeight - 80) {
    loadMore()
  }

})