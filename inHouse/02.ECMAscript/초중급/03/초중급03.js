// 8. primitve / reference data type

var a = 1234; // 변수에 값이 그대로 저장되는 data를 primitve data라고 한다.

var 배열1 = [1, 2, 3];
// 변수에 reference가 저장되는걸 reference data라고 한다. --> 변수에 값이 저장되는게 아니다. (배열, 객체가 reference)
// 배열인 [1,2,3]이 저쪽에 있다(var 배열1)고 알려주는 화살표라고 생각하면 된다.
var 객체1 = { name: "kim" };
// 객체 또한 reference로 { name: "kim" }이 저쪽에 알려주는 화살표가 변수(객체1)이다.

var 이름1 = "김";
var 이름2 = 이름1;
이름1 = "박"; // 이렇게 되면 이름1은 "박", 이름2는 "김"이 출력된다. --> primitive type
// 이름1의 값은 "박"으로 바뀌었지만 그게 이름2의 값까지 바뀌는건 아니기 때문이다.

이름1 = { name: "김" };
이름2 = 이름1;
console.log(이름1.name); // 김
console.log(이름2.name); // 김

이름1.name = "박";
console.log(이름1.name); // 박
console.log(이름2.name); // 박
// 이름2 또한 변하게 된다. 이름2는 그냥 이름1이라는 화살표를 복사한거이므로 이름1이 바뀌어서 같이 이름2도 바뀌게 된다.

var 이름1 = { name: "김" };
var 이름2 = { name: "김" };
console.log(이름1 == 이름2); // false
// 보기엔 이름1과 이름2는 같아 보이지만 각각 다른 메모리에 저장되어있는 화살표이다. 전혀 다른값이라는것! (배열도 똑같음)

function 변경기계(obj) {
  obj = { name : "park"};
}
변경기계(이름1); // { name: "김" }
/* 
풀어서 정리하자면, 변경기계(이름1)은 변경기계(var obj = 이름1)이므로 obj는 reference를 복사한 또다른 화살표이다.
그러다가 obj는 다시 함수내에서 { name: "park" }를 가리키는 화살표로 변경된다.
따라서, obj.name = "park"으로 하면 이름1의 객체값이 아예 바뀌어서 park로 나오지만,
위에처럼 함수가 성림되면 이름1과 obj가 각각 reference type이라서 값이 아닌 화살표로 각각의 객체값을 가리키고 있어서
예상하는 값이 아닌 값이 나온다. (이름1 = { name: "김" }, obj = { name : "park"})
*/