import { RESERVATION_LIST } from './reservation .js';
console.log(RESERVATION_LIST);

/* 
예약 고객 확인하기

1. 요구사항 확인하기
    고객 이름과 연락처를 입력 받아 예약이 되어 있는지 확인하고 되어 있으면 예약번호 보여주기

3. 인풋 바탕으로 단계별 한글로 함수 설계하기
    (1) RESERVATION_LIST에서 사용자가 입력한 이름과 같은 요소 찾기 => 배열에서 특정 값을 만족하는 배열 찾기
    (2) 이름이 없을 경우에는 일치하지 않는다고 alert으로 알려주기
    (3) 이름이 있을 경우 핸드폰 번호가 일치하는지 확인하기 => 배열에서 특정 값을 만족하는 요소 찾기 
    (4) input 값이 입력되었을 때 자동으로 전화번호 하이픈

4. 단계별 구글링 키워드 생각하기
*/

const $userName = document.querySelector('[name="user-name"]');
const $userPhone = document.querySelector('[name="user-phone"]');
const $btn = document.querySelector('button');
const $reservNum = document.querySelector('#reservation-number');

console.log($userName);

// 물어볼 부분 1
$userPhone.addEventListener('input', (e) => {
    $userPhone.value = e.target.value;
    e.target.value = e.target.value
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
        .replace(/(\-{1,2})$/g, '');

    return e.target.value;
});

$btn.addEventListener('click', () => {
    const userNameValue = $userName.value;
    const userPhoneValue = $userPhone.value;

    const listName = RESERVATION_LIST.filter((el) => (el.name = userNameValue));
    if (listName.length == 0) return alert('일치하는 이름이 없습니다.');

    const listPhone = listName.find((list) => list.phone == userPhoneValue);
    if (!listPhone) return alert('일치하는 번호가 없습니다.');

    return ($reservNum.innerText = listPhone.number);
});

// form 이벤트
// find / filter 반환값
