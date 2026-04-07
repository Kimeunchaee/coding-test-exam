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