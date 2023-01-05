/*
배열 나누기
함수 divition은 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다

ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다

필요한 매개변수를 정의하세요
함수내 변수가 필요한다면 해당 변수 부분도 선언 및 정의하세요

매개변수를 어떻게 사용할지 한글로만 작성해보세요
*/

// divition 의 매개변수 originArr을 arr에 할당해주고
// result에는 빈 배열을 할당해준다
// for문으로 i 가 arr의 길이보다 작을 때 arr의 i부터 i + divNumber 전까지의 인자를 복사해서
// result 즉 빈배열 안에 추가해주고 나서 i에 divNumber을 더한 값을 i에 대입하면서 추가하는 걸 반복한 후에
// result를 반환해준다

function divition(originArr, divNumber) {
    const arr = originArr;
    const result = [];
    for (let i = 0; i < arr.length; i += divNumber) {
        result.push(arr.slice(i, i + divNumber));
    }
    return result;
}

/*

구글링

- 배열에 요소를 추가하는 방법
- 배열을 복사하는 방법


*/
