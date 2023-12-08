"use strict";
/* 07. typescript로 HTML 변경, 조작시 주의점 */
const title = document.querySelector(".title");
// as Element를 써도 되지만, 지양하는 편이다.
if ((title === null || title === void 0 ? void 0 : title.innerHTML) !== undefined) {
    // title에 innerHTML이 있으면 출력해주고 없으면 undefined === ?
    title.innerHTML = "반가워요!";
}
const link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
    // 그냥 Element가 아닌 보다 상세한 type들이다. HTMLAnchor/Button...
    link.href = "https://www.kakao.com";
}
