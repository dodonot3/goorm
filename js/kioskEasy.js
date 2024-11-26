/* 
버튼(커피, 티, 케이크)을 클릭할 때 마다
클릭한 버튼의 메뉴명 + 클릭 횟수 + P(메뉴가격 * 클릭횟수) 가 표시되고
‘Total’+P1+P2+P3 +’원' 표시

- 장바구니 
- 메뉴 클릭 할당할 변수
- 계산값이 카트에 표시되고 할당되는 변수
- 토탈 금액이 할당되는 변수
*/

// 장바구니 객체안에 입력되어 DB에 보관되도록
const cart = {};

//각 메뉴와 가격에 대한 할당 변수
const menuList = document.querySelector("#menu");
const cartItems = document.querySelector("#cart");
const totalPrice = document.querySelector("#total");

menuList.addEventListener("click", (e)=>{
	e.preventDefault;
	//메뉴명이랑 가격받아오기
	if(e.target.tagName === "BUTTON"){
		const name = e.target.getAttribute("data-name");
		const price = e.target.getAttribute("data-price");
		// 상품이 장바구니에 있으면 count 1 증가
		// 상품이 장바구니에 없으면 상품을 추가하고 price와 count를 1로 설정
		if(cart[name]){
			cart[name].count++;
		}else{
			cart[name] = {price, count:1};
		}
		updateCart();
		console.log(cart); 
		// 콘솔을 menuList 이벤트 함수 밖에서 찍으면 실시간으로 반영이 안됨.. 왜지..?
	}
	function updateCart(){
		cartItems.innerHTML = ""; //초기화해서 객체를 다시 넣으면서 조건문을 확인하는게 최선일까?
		let total = 0; 
		//let 안 붙이고 했다가 스코프를 오염시킴
		//변수를 명시적으로 선언하지 않고 값을 할당하면, 해당 변수는 자동으로 전역 변수로 처리
		for(const name in cart){
			const {price, count} = cart[name]; //구조 분해 할당
			total += price * count;
			const item = document.createElement("div");
			item.textContent = `${name} x ${count} (${(price * count).toLocaleString()}원)`;
			// toLocaleString() 숫자나 날짜를 특정 형식(통화, 소수점 등)으로 표시할 때 사용자의 언어와 지역을 고려해서 표시
			cartItems.appendChild(item); // item을 cartItems의 자식 요소로 추가
		}
		totalPrice.textContent = total.toLocaleString();
	}
})
