// ## 사용하지 않는 가장 작은 숫자 찾기

/*
Set : 중복을 허용하지 않는 값 저장소
Set에 배열을 저장하면 중복값은 한번만 저장됨 > 중복 불가
고유한 값만 관리 가능
*/
const findMinNum = (ids) => {
    const set = new Set(ids);

    // 0 부터 시작하는 배열
    let min = 0;

    while (set.has(min)) {
        min++;
    }

    return min;
};


// 테스트
console.log(findMinNum([0,1,2,4]));          // 3
console.log(findMinNum([0,1,2,3,4,5,6]));    // 7
console.log(findMinNum([0,1,1,1,5,5,3]));
console.log(findMinNum([51,1,3,5,0,3]));