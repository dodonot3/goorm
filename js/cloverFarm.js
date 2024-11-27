/* 
버튼(애기 세잎클로버, 엄마 세잎클로버)를 클릭할 때 마다
클릭한 버튼의 data-name + 클릭 횟수가 각각 표시되고
‘총’+ 전체 버튼의 클릭 횟수 +’개' 표시

- 클로버 카운트 상세가 담길 빈 객체
- 클로버 버튼 할당할 변수
- 각각의 클로버의 카운트 디스플레이 변수
- 총 카운트 변수
- 남은 카운트 변숫
*/

const cloverCountDetails = {}; // '클로버 카운트 상세' 객체안에 입력되어 보관되도록

const cloverList = document.querySelector("#clover");
const cloverItems = document.querySelector("#cloverCountDetails");
const totalClover = document.querySelector("#total");
const remainCount = document.querySelector("#remain");

updateRemainingButtons();// 초기 남은 버튼 갯수 설정

document.addEventListener("DOMContentLoaded", () => {
    const cloverItems = document.querySelector("#cloverCountDetails");

    // 버튼 클릭 이벤트에서 div 추가 여부에 따라 ::after 상태 변경
    function updateCloverDetailsState() {
        if (cloverItems.children.length > 0) {
            cloverItems.classList.remove("no-after");
        } else {
            cloverItems.classList.add("no-after");
        }
    }

    // 말풍선 초기 상태 호출
    updateCloverDetailsState();
    
    cloverList.addEventListener("click", (e)=>{
        //메뉴명이랑 가격받아오기
        if(e.target.tagName === "BUTTON"){
            const button = e.target; // 클릭한 버튼 요소 참조
            const name = e.target.getAttribute("data-name");
            // 클로버 내역이 있으면 count 1 증가
            // 클로버 내역이 없으면 클로버 종류를 추가하고 count를 1로 설정
            if(cloverCountDetails[name]){
                cloverCountDetails[name].count++;
            }else{
                cloverCountDetails[name] = {count:1};
            }
    
            button.classList.add("hidden");
    
            updateCart();
            updateRemainingButtons();
            updateCloverDetailsState(); // 말풍선 상태 업데이트 호출
            console.log(cloverCountDetails); //객체가 제대로 만들어지는지 확인
        }
    
        function updateCart(){
            cloverItems.innerHTML = ""; //초기화해서 객체를 다시 넣으면서 조건문을 확인하는게 최선일까? - DB와 모듈로 JS를 설계한다면 가능하다는 이야기를 들었다
            let total = 0; 
            for(const name in cloverCountDetails){
                const {count} = cloverCountDetails[name]; //구조 분해 할당
                total += count;
                const item = document.createElement("div");
                item.textContent = `${name} x ${count}`;
                cloverItems.appendChild(item); // item을 cloverItems 자식 요소로 추가
            }
            totalClover.textContent = total;
        }
    })
    
})



function updateRemainingButtons() {
    const remainingButtons = cloverList.querySelectorAll("button:not(.hidden)").length; // 남아있는 버튼 갯수 계산
    remainCount.textContent = remainingButtons;
    // :not(...) 부정 선택자, 괄호 안에 명시된 조건에 맞지 않는 요소를 선택
    // 속성 선택자 [attribute="value"] ex) [style*='display: none']
    // *=는 부분 일치를 의미, 특정 문자열이 속성 값에 포함되어 있으면 선택


    // 모달창 표시 조건 확인
    if (remainingButtons === 0) {
        showModal();
    }
}

// 모달창 표시
function showModal() {
    const modal = document.getElementById("modal");
    modal.classList.add("show"); 

    // 닫기 버튼 클릭 이벤트
    const closeModalButton = document.getElementById("closeModal");
    closeModalButton.addEventListener("click", () => {
        modal.classList.remove("show"); 
        location.reload();
    });
}




// 말풍선 변경
document.addEventListener("DOMContentLoaded", () => {
    const bubble = document.getElementById("bubble");

    // 기본 메시지 배열
    const messages = [
        "나는 행복이 좋아~",
        "행복을 의미하는<br>세잎 클로버를 찾아줘!",
        "힘내~!!<br>응원하고 있어!",
        "행복은 잘<br>보이는 곳에 있어",
        "함께 찾아보자!"
    ];

    let index = 0;
    let messageInterval;

    // 기본 글자색 저장
    const defaultColor = bubble.style.color;
    const defaultSize = bubble.style.fontSize;

    // 3초마다 기본 메시지 변경
    function startBubbleRotation() {
        messageInterval = setInterval(() => {
            bubble.innerHTML = messages[index];
            bubble.style.color = defaultColor; // 기본 글자색으로 복구
            bubble.style.fontSize = defaultSize; // 기본 글자색으로 복구
            index = (index + 1) % messages.length; // 순환하도록 인덱스 업데이트
        }, 3000);
    }

    // 말풍선 메시지 초기화
    startBubbleRotation();

    // 사랑해 버튼 클릭 이벤트 처리
    const cloverList = document.querySelector("#clover");
    cloverList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON" && e.target.getAttribute("data-name") === "사랑해") {
            // 기본 메시지 변경 멈추기
            clearInterval(messageInterval);

            bubble.textContent = "사랑해~❤️"; 
            bubble.style.color = "#E23737";
            bubble.style.fontSize = "5vw";  

            // 2초 후 기본 메시지로 복귀
            setTimeout(() => {
                startBubbleRotation(); // 기본 메시지 로테이션 재시작
            }, 1000);
        }
    });
});

