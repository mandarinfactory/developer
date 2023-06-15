/* 11. Generic */

// 함수 parameter에 type도 입력가능하게 해준다.

function 함수1<MyType>(a: MyType[]): MyType { 
    // <number>가 parameter처럼 MyType에 들어가서 type을 지정해준다. --> Generic방법
  return a[0];
}

let a = 함수1<number>([5, 2]); // a가 number type으로 되어있다.
let b = 함수1<string>(["5", "2"]); // a가 string type으로 되어있다.

interface LengthCheck {
    length : number;
}

function 함수2<MyType extends LengthCheck> (x :MyType) {
    // custom타입(여기서는 MyType)을 제한하려면 extends ~로 제한할수 있다. (constraint)
    return x.length;
};
let c = 함수2<string>("100");