// 4. template literals && tagged literals(tagged는 자주 쓰이는 편은 아니다.)

var 문자 = `문자`; // ES6이후 부터 ``(backtick, backquote)을 이용해서 문자열을 나타낼수 있다.
// ``의 장점 : 엔터키 가능, 중간중간 변수넣기가 쉬움(""여기에 넣으려면 +""등 따로 떠 써야해서 불편했음.)
var 변수 = "변수";
var 두개더하기 = "두개" + 문자 + 변수 + "더하기";

var 지역 = `서울 ${문자} ${변수}`; // ${}를 통해 쉽게 변수를 넣을수 있다.

function 함수01() {
  return 10;
}
함수01`어서오시오`; // 함수뒤에 ``을 추가해 문자열을 추가할수 있다. --> tagged literal, 그냥 함수가 실행만 된다.
// 그럼 왜 ()만 하면 되지 굳이 `문자열`을 추가하나?
function 해체분석기(문자들, 변수들01, 변수들02) {
  console.log(문자들); // ['서울 ', ' ', '', raw: Array(3)]
  console.log(변수들01); // 문자
  console.log(변수들02); // 변수
  console.log(변수들02 + 문자들[0] + 변수들01); // 변수서울 문자 --> 이렇게 해체/분석이 가능하다.
}
해체분석기`서울 ${문자} ${변수}`; // --> 이를 통해 단어순서변경, 단어제어, ${변수}위치 옮기기등을 할 수 있다.(`문자`해체/분석이 가능하다.)
// 함수에서 parameter(01)은 문자들을 array화 해준다.
// parameter(02)는 ${변수}를 뜻한다.
// parameter(03)은 두번째 ${변수}를 뜻한다.

var pants = 20;
var socks = 100;
`바지${pants} 양말${socks}`;
function 해체분석기02(a, b, c) {
  console.log(a[1] + b + a[0] + c); // 양말20바지100
}
해체분석기02`바지${pants} 양말${socks}`;

function 해체분석기03(a, b, c) {
  if (b === 0) {
    b = "가 다 팔렸습니다.";
    console.log(a[0] + b + a[1] + c); // 바지가 다 팔렸습니다. 양말100
  }
}
pants = 0;
해체분석기03`바지${pants} 양말${socks}`;

// 5. spread operator (...)

var 배열 = ["hello", "world"];
console.log(...배열); // hello world --> 배열에 붙이면 대괄호를 제거해준다. ①

var 문자 = "hello";
console.log(...문자); // h e l l o --> 문자에 붙이면 각각 해체해서 펼쳐준다.
/* 참고로 문자도 배열처럼 indexing이 가능하다 --> 문자[0] = h, 문자[1] = e */

var a = [1, 2, 3];
var b = [4, 5, 6];

var c = [...a, ...b];
console.log(c); // [1, 2, 3, 4, 5, 6]

var d = a;
console.log(d); // [1, 2, 3]
a[2] = 7;
console.log(a, d); // [1, 2, 7] [1, 2, 7]
d[0] = 3;
console.log(a, d); // [3, 2, 7] [3, 2, 7] --> 이렇게 같이 변하게 되는 deep copy가 된다.
// reference data type(배열, 객체)는 복사를 하게 되면 값을 공유한다. 따라서 ...을 사용하는것을 지향한다.

var 객체1 = { a: 1, b: 2 };
var 객체2 = { ...객체1, c: 3, d: 4 };
console.log(객체2); // {a: 1, b: 2, c: 3, d: 4} --> 대괄호, 중괄호 둘다 해체시켜 버린다. ②

// 만약, copy하다가 값이 중복 되버리면?
var 객체3 = { a: 2, ...객체1 };
console.log(객체3); // {a: 1, b: 2} --> JS가 자동으로 가장 뒤에 온 값을 적용시킨다.

var 객체3 = { ...객체1, a: 2 };
console.log(객체3); // {a: 2, b: 2} --> 마찬가지로 뒤에 온 값으로 적용시킨다.
// 항상 ...은 소,중,대괄호안에서만 사용할 수 있다.

function 더하기 (a,b,c) {
  console.log(a + b + c);
};

var 배열2 = [10,20,30];
더하기(...배열2); // 60 --> function 인자로 넣을때 ...을 사용한다. ③