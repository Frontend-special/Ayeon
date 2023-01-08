/* 
페이지네이션 구현하기
*/

const $pageList = document.querySelector('.page_list');
const $nextPage = document.querySelector('.btn_nav.next');
const $prevPage = document.querySelector('.btn_nav.pre');

// 토탈 페이지 값은 80
// PAGE_LST는 빈 배열
// currentPageIndx 값은 0

let totalPage = 80;
let PAGE_LST = [];
let currentPageIndx = 0;

// currentPage는 page를 검색... 하는? 변수?
let currentPage = new URLSearchParams(location.search).get('page') || 1;

Array.prototype.division = function (div) {
    // 어 이거 level 1 문젠디...
    // this로 배열을 받아와서... slice로 배열을 원하는 길이만큼 자르고
    // result에 추가해서 반환하고 있음
    const arr = this;
    const result = [];
    const len = arr.length;
    for (let i = 0; i < len; i += div) {
        result.push(arr.slice(i, i + div));
    }
    return result;
};

(function pagaNation(totalPage, currentPage) {
    // paageNation_list 에 빈배열을... 할당해주고 리밋을 10까지 걸어준다..
    // 현재 페이지 나누기 리밋인 10을 나눠서 나온 값의 소수점 이하 올린 뒤에 1을 빼주면...
    // 현재 페이지 배열? 번호가? 나옴 그게 currentPageIndx 인 거 같음
    const paageNation_list = [];
    const paageNation_limit = 10;
    currentPageIndx = Math.ceil(currentPage / paageNation_limit) - 1;

    // ?? 페이지 리스트에 i를 추가해줌... ??? i는 1부터 시작하고... 토탈 페이지와 같아질 때까지 for문을 돌려서 추가...?
    for (let i = 1; i <= totalPage; i++) {
        paageNation_list.push(i);
    }

    // 이건 뭐라고 하는지 모르겠다... 아! 페이지리스트 80을 division으로 10씩 잘라서 빈 배열이었던 PAGE_LST에 넣어주는 거 같음
    PAGE_LST = paageNation_list.division(paageNation_limit);

    // 페이지네이션 랜더링 실행...
    renderPageNation();
})(totalPage, currentPage);

// 페이지네이션 랜더링
function renderPageNation() {
    const pageNationList = PAGE_LST[currentPageIndx];
    $pageList.innerHTML = pageNationList
        .map((page) => {
            return `<a href="?page=${page}" class="nav_page" data-page="${page}">${page}</a>`;
        })
        .join('');

    const pageList = document.querySelector('.page_list').children;
    for (let i = 0; i < pageList.length; i++) {
        if (pageList[i].dataset.page == currentPage) {
            pageList[i].classList.add('on');
        }
    }
}

// 넥스트 페이지 그룹
function nextPageGroup() {
    if (!(currentPageIndx < PAGE_LST.length - 1)) return;
    currentPageIndx++;
    renderPageNation();
}

// 이전 페이지 그룹
function prevPageGroup() {
    if (!(currentPageIndx > 0)) return;
    currentPageIndx--;
    renderPageNation();
}

$nextPage.addEventListener('click', nextPageGroup);
$prevPage.addEventListener('click', prevPageGroup);
