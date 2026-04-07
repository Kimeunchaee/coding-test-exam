// ## 자동 줄바꿈 프로그램

const wrapText = (str) => {
     // 문자열 결과값 (완성된 줄)
    let result = "";

    // 작성 중인 지금 줄
    let line = "";
    let lineLength = 0;

    // 단어 하나씩 칸 수 세기
    for(const word of str){
        // 한글은 2칸, 나머지는 1칸
        const wordLength = /[가-힣]/.test(word) ? 2 : 1;

        if(lineLength + wordLength > 80){
            // 줄바꿈 추가
            result += line + "\n";

            // 단어에 공백이 있으면
            if(word === " "){
                // 공백 지우기
                line = "";
                lineLength = 0;
            } else {
                // 단어를 라인에 추가
                line = word;
                lineLength = wordLength;
            }
        } else{
            // 단어 이어서 저장
            line += word;
            lineLength += wordLength;
           }
     }

    if(line !== ""){
        result += line;
    }

    return result;

    };

const text = "이 글은 도커에 대해 1도 모르는 시스템 관리자나 서버 개발자를 대상으로 도커 전반에 대해 얕고 넓은 지식을 담고 있습니다. 도커가 등장한 배경과 도커의 역사, 그리고 도커의 핵심 개념인 컨테이너와 이미지에 대해 알아보고 실제로 도커를 설치하고 컨테이너를 실행해 보도록 하겠습니다.";
console.log(wrapText(text));


/*
# 변수 선언
let 값 변경있을 때 (누적, 점수, 반복문 등)
const 값 변경 없을 때 (함수, 고정된 값, 설정값)
    - 배열이나 객체 안의 내용은 변경 가능
    const arr = [1, 2, 3];
    arr.push(4);
    console.log(arr); // [1, 2, 3, 4]
    - 배열이나 객체 안의 내용 재할당은 불가능
    const arr = [1, 2, 3];
    arr = [4, 5, 6]; // 오류
var 옛날 방식, 잘 안씀

const a = 10; // 재할당 불가
let b = 20;   // 재할당 가능

= 대입
== 값만 비교 (1 == '1') // true
=== 값,타입 비교 (1 == '1') // false

# 함수
function add (a,b){
    return a+b;
}

const add = (a,b) => {
    return a+b;
}
*/