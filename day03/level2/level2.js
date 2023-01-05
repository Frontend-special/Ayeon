import { RESERVATION_LIST } from './reservation .js';
/*
예약 고객 확인하기
*/

const $userNameInput = document.querySelector(["[name='user-name']"]);
const $userPhonInput = document.querySelector(["[name='user-phone']"]);
const $form = document.querySelector('form');
const $reservation = document.querySelector('#reservation-number');

// 예약리스트에 유저가 없을 때 알럿으로 일치하는 내역이 없다고 하면서
// id가 reservation-number인 태그 안에 일치하는 내역이 없다고 뜨는 함수를 따로 만듦

function NodeUserListInReservationList() {
    alert('일치하는 내역이 없습니다');
    $reservation.innerHTML = '일치하는 내역이 없습니다';
}

// userPhonInput 에 숫자가 입력 되었을때 target으로 값을 불러와서
// 숫자 사이에 정규표현식을 사용해 하이픈을 넣어준다.

$userPhonInput.addEventListener('input', (e) => {
    const phone = e.target.value;
    const hiepnPhone = phone
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
        .replace(/(\-{1,2})$/g, '');
    e.target.value = hiepnPhone;
});

// form 태그가 서브밋 되었을 때 발생하는 이벤트
// 유저네임에 유저네임인풋 값을 불러와서 예약리스트에서 필터를 통해 리스트에 있는 이름과 적힌 이름이 같다면
// sameNameuser에 할당해주고 만약 같지 않을 경우 NodeUserListInReservationList 함수를 실행시킨다
// sameNameuser에 있는 값이 예약리스트에도 있다면 find를 통해서 입력된 핸드폰 번호와 리스트 속 핸드폰 번호가
// 일치하는지 확인한 후에 일치한다면 예약번호를 화면에 내보내주고 일치하지 않을 경우 NodeUserListInReservationList를 실행한다

$form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = $userNameInput.value;
    const userPhone = $userPhonInput.value;

    const sameNameUser = RESERVATION_LIST.filter((list) => list.name === userName);
    if (sameNameUser.length === 0) return NodeUserListInReservationList();

    const targetUser = sameNameUser.find((list) => list.phone === userPhone);
    if (!targetUser) return NodeUserListInReservationList();
    $reservation.innerHTML = targetUser.number;
});

/*
- 구글링

입력된 값을 받아오는 방법
핸드폰 번호를 확인할 수 있는 정규 표현식
받아온 값이 올바른지 확인할 수 있는 방법
js로 태그에 글씨를 추가하는 방법
*/
