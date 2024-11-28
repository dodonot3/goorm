//일반적으로 import 하는 방법

//왜 import 방식이 나누어져있는지 찾아보기
import multiply, { add, subtract } from './math.js'
// import multiply, { add, subtract } from './math.js'
// 이게 또 섞어쓰는 것은 가능하네..
// import multiply from './math.js'
//export default로 내보낸 모듈을 가져올 때는 스코프에 감싸지 않는다.

console,console.log(add(5,3));
console,console.log(subtract(10,4));
console,console.log(multiply(2,3));


//모듈 전체 가져오기
/*
import * as Math from './math.js';
//전부 가져와서 Math라는 객체라고 정의하고 각각의 모듈을 쓴다.
console.log(Math.add(2, 3));
*/


//이름 변경하여 가져오기
/*
import {add as sum} from './math.js'; // {원본명 as 새로운 이름}
//적은 리소스 유지보수를 위해 원본은 보존하고 함수에 새로운 이름을 부여해서 사용한다.
console.log(sum(2,3));
*/

// 일반적으로 ESM은 정적, 동적(비동기)으로 가져오기 (참고 fetch, axios, 비동기, 동기, SWC)
async function loadModule(){
    const module = await import('./math.js'); //전부 가져와서 module이라는 객체라고 쓸게
    //await은 예약어, 기다렸다가 콜링했을때 불러와
    console.log(module.add(2, 3)); // loadModule라고 선언
}

//내가 콜링을 하면 그때 참조해서 가져올게
loadModule();
