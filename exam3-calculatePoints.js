// ## 승점구하기

/*
Set : 중복을 허용하지 않는 값 저장소
Set에 배열을 저장하면 중복값은 한번만 저장됨 > 중복 불가
고유한 값만 관리 가능
*/
const calculatePoints = (games) => {
    let point = 0;

    for(let i = 0; i < games.length; i++ ){
        const arr = games[i].split(":").map(Number);
        // 배열 저장
        const x = arr[0];
        const y = arr[1];

        if(x > y){
            point += 3;
        } else if(x === y){
            point += 1;
        }
    }
    return point;
};


// 테스트
// ["3:1", "2:2", "1:3"] ⇒ 4
console.log(calculatePoints(["3:1", "2:2", "1:3"]));
console.log(calculatePoints(["5:9", "3:2", "3:3", "1:1", "6:4"]));

/*
// 배열 구조 (순서기준)
const arr = [1,2];
const [a,b] = arr;
console.log(a); // 1
console.log(b); // 2

// 객체 구조 (key 값)
const arr1 = {
    id : "a",
    name : "b"
};
const {id, name} = arr1;
console.log(id);    // a
console.log(name);  // b
*/