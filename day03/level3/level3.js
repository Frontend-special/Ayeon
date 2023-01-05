/* 
레시피추가하기
*/

const $form = document.querySelector('#ingredient-form');
const $ingredient = document.querySelector("[name='ingredient']");
const $weight = document.querySelector("[name='weight']");
const $table = document.querySelector('table');
const $button = document.querySelector('#submit_button');
const $list = document.querySelector('#ingredient-list');
const INGREDIENT_LIST = new Map();

// 재료를 삭제하는 함수
// event target이 버튼태그와 맞지 않는다면 반환해준다??
// $tr에는 event target 과 가장 가까운 tr태그가 할당된다. ingredient에는 $tr의 td안에 있는 내용을 할당하는 것 같음
// tr을 제거하고, 재료 리스트에서도 재료를 지워주는 함수

function deleteIngredient(e) {
    if (!e.target.matches('button')) return;
    const $tr = e.target.closest('tr');
    const ingredient = $tr.querySelector('td').textContent;
    $tr.remove();
    INGREDIENT_LIST.delete(ingredient);
}

// ingredient.value을 ingredientValue에 할당해주고, $weight.value를 weightValue에 할당해준다
// 만약 재료 리스트에 이미 ingredientValue가 있다면 이미 존재하는 재료라고 알려준다
// ingredientValue가 같지 않거나 weightValue가 같지 않다면 입력해 달라고 창에 띄운다
// 상수 tr에 추가할 태그? tr을 할당해주고 상수 tr안에 <td> 태그를 사용해 화면에 재료값과 무게값, 삭제 버튼을 보여줄 수 있게 코드를 작성한다
// tr에 삭제 버튼을 클릭했을 시에 deleteIngredient 함수가 실행된다.
// 재료 리스트에 ingredientValue, weightValue을 넣어주고 table에 tr을 추가해준다.
// $ingredient.value = ''; 여기서 ''은 값이 들어있지 않다는 것 같음 빈칸이 들어가는 것 같음

$form.addEventListener('submit', (e) => {
    e.preventDefault(); // ???
    const ingredientValue = $ingredient.value;
    const weightValue = $weight.value;
    if (INGREDIENT_LIST.has(ingredientValue)) return alert('이미 존재하는 재료입니다');
    if (!ingredientValue || !weightValue) return alert('입력해주세요');

    const tr = document.createElement('tr');

    tr.innerHTML = `
  <td>${ingredientValue}</td>
  <td>${weightValue}</td>
  <td><button type="button">삭제</button></td>
  `;

    tr.addEventListener('click', deleteIngredient);

    INGREDIENT_LIST.set(ingredientValue, weightValue); //
    $table.append(tr);
    $ingredient.value = '';
    $weight.value = '';
});

// button 태그를 클릭했을 때 발생하는 이벤트
// 만약 리스트의 자식의 길이가 0보다 크다면 리스트에는 빈칸을 넣어준다...?
// li 태그를 새로 만들고 li 태그 안에 innerText로 글자를 삽입한다
// ingredient 값과 weight 값을 삽입해서 리스트 태그 안에 추가하는 걸 계속 돌려준다

$button.addEventListener('click', () => {
    if ($list.children.length > 0) $list.innerHTML = '';
    INGREDIENT_LIST.forEach((weight, ingredient) => {
        const li = document.createElement('li');
        li.innerText = `${ingredient} : ${weight}`;
        $list.append(li);
    });
});

/*

구글링

- 가장 가까운 태그를 불러오는 방법
- 태그가 맞는지 아닌지 확인하는 방법
- js로 태그 안에 내용을 넣는 방법
- js로 요소를 생성하는 방법...?
- 요소를 삭제하는 방법
- 이미 가지고 있는 요소가 있는지 확인하는 방법

*/
