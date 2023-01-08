/* 
레시피 재료 추가하기

1. 요구사항 확인하기
    재료명과 용량을 입력받아서 추가 버튼을 누르면 [재료, 무게, 관리] 표에 추가가 된다.
    추가된 후에 제출 버튼을 누르면 제출된 목록이 보여지게 된다.
    만약 같은 재료를 입력하고 추가 버튼을 누르게 될 경우 '재료가 이미 있다'고 보여져야 한다.

2. 요구사항 바탕으로 인풋 생각하기

3. 인풋 바탕으로 단계별 한글로 함수 설계하기
    (1) 입력한 재료명과 용량의 값을 받아와서 표에 추가하기
    (2) 표에 있는 재료를 제출했을 때 ingredient-list에 추가하기
    (3) 표에 적힌 내용과 동일한 값이 입력되었을 때 이미 입력되어 있다고 alert으로 알려주기

4. 단계별 구글링 키워드 생각하기
    (1) input 태그에서 값을 받아올 수 있는 방법
    (2) input 에서 받은 값을 js로 table태그에 보여줄 수 있는 법
    (3) 값이 중복인지를 체크하는 if문 || alert를 js로 띄우는 방법
*/

const $ingredient = document.querySelector('[name="ingredient"]');
const $weight = document.querySelector('[name="weight"]');
const $addBtn = document.querySelector('.add-button');
const $table = document.querySelector('table');

console.log($ingredient);
console.log($weight);
console.log($addBtn);

$addBtn.addEventListener('click', () => {
    // 재료와 무게의 값을 받아옴
    const ingredientValue = $ingredient.value;
    const weightValue = $weight.value;

    // 이미 같은 재료가 들어가 있는지 검사를 해줘야 됨
    // tr 태그에 추가해서 받아온 값을 innerhtml로 추가해줘야 함
    if()
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${ingredientValue}</td>
    <td>${weightValue}</td>`;

    // 추가가 된 것 같은데 몬가.. 안 됨..?..?
    $table.append(tr);
});
