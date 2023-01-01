/* 
페이지네이션 구현하기

1. 요구사항 확인하기
    총 80페이지로, 페이지 하단에 사용자가 1,2, ... 숫자 버튼을 누르면 페이지가 바뀌고
    < 버튼을 누를시 ex) 현재 10페이지일 때 바로 1페이지로, > 버튼을 누를시 ex) 현재 1페이지일 때 10페이지로 이동하게 된다.

2. 요구사항 바탕으로 인풋 생각하기
    (1) 총 페이지 값을 설정하기
    (2) 현재 사용자가 있는 페이지 값 받아오기
    (3) 숫자 버튼을 누를 때는 한 페이지씩 이동
    (4) < > 버튼을 누를시 현재 사용자가 있는 페이지에서 10페이지씩 이동하기

3. 인풋 바탕으로 단계별 한글로 함수 설계하기
    (1) 총 페이지 값을 설정할 변수
    (2) 현재 사용자가 있는 페이지를 설정할 변수
    (3) 사용자가 한 페이지씩 이동 가능하게 할 함수
    (4) 특정 버튼을 클릭시 현재 사용자가 있는 페이지를 받아서 그 페이지에서 앞뒤로 10페이지씩 이동 가능하게 할 함수

4. 단계별 구글링 키워드 생각하기
    (1) ...

기초 변수

let totalPage = 80;
let currentPageIndx = 0;
let currentPage = new URLSearchParams(location.search).get('page') || 1;

*/
