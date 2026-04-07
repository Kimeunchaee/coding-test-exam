// ## 더하고 뺴기

const sum = (num) => {
    let total = 0;
    
    while (num > 0){
        total += num % 10;
        num = Math.floor(num/10);
    }
    return total;
};

/*
// 방법 1) 각 자리의 숫자를 더한 값을 원래 숫자에서 뺴고 결과가 과일코드로 나올때까지 반복 계산
const foo = (n) => {
    let fruits = {
        1:'kiwi',2:'pear',3:'kiwi',4:'banana',5:'melon',6:'banana',7:'melon',8:'pineapple',9:'apple'
        ,10:'pineapple',11:'cucumber',12:'pineapple',13:'cucumber',14:'orange',15:'grape',16:'orange',17:'grape',18:'apple',19:'grape'
        ,20:'cherry',21:'pear',22:'cherry',23:'pear',24:'kiwi',25:'banana',26:'kiwi',27:'apple',28:'melon',29:'banana'
        ,30:'melon',31:'pineapple',32:'melon',33:'pineapple',34:'cucumber',35:'orange',36:'apple',37:'orange',38:'grape',39:'orange'
        ,40:'grape',41:'cherry',42:'pear',43:'cherry',44:'pear',45:'apple',46:'pear',47:'kiwi',48:'banana',49:'kiwi'
        ,50:'banana',51:'melon',52:'pineapple',53:'melon',54:'apple',55:'cucumber',56:'pineapple',57:'cucumber',58:'orange',59:'cucumber'
        ,60:'orange',61:'grape',62:'cherry',63:'apple',64:'cherry',65:'pear',66:'cherry',67:'pear',68:'kiwi',69:'pear'
        ,70:'kiwi',71:'banana',72:'apple',73:'banana',74:'melon',75:'pineapple',76:'melon',77:'pineapple',78:'cucumber',79:'pineapple'
        ,80:'cucumber',81:'apple',82:'grape',83:'orange',84:'grape',85:'cherry',86:'grape',87:'cherry',88:'pear',89:'cherry',90:'apple'
        ,91:'kiwi',92:'banana',93:'kiwi',94:'banana',95:'melon',96:'banana',97:'melon',98:'pineapple',99:'apple',100:'pineapple'
    }

    let result = n;
    console.log(n);
    
    if(n > 100){
        while (result > 100) {
        const sumNum = sum(result);
        result = result - sumNum;

        // console.log(n,"-",sumNum,"=",result);
        // console.log("------");
    }
    } else {
        const sumNum = sum(result);
        result = result - sumNum;
    }
    console.log(result);
    return fruits[result];
    
};

console.log(foo(10));
console.log("------");
console.log(foo(51));
console.log("------");
console.log(foo(167));
console.log("------");
console.log(foo(745));
console.log("------");
console.log(foo(100000));
console.log("------");
*/


/**
 *
 * - ex) 10 => 10 - (1+0) = 9 ⇒ apple
 * - ex) 325 =>
    - 325 - (3+2+5) = 315
    - 315 - (3+1+5) = 306
    - 306 - (3+0+6) = 297
    - ...
 */





/*
// 방법2) 조건 : 10~10000 사이의 숫자만 입력
// 원래 숫자 - 각 자리의 숫자 합 => 결과값은 항상 9의 배수
// f(n) = n - (각 자리 숫자 합)
// 325 - (3+2+5) = 315
// 9의 배수로 이동 > 이후 연산 또한 9의 배수들끼리 감소 > 0으로 수렴
// n % 9 === 0

// 검증 1 (원래 숫자에서 각 자리의 숫자의 합을 뺸 결과는 항상 9의 배수)
const sumDigits = (num) => {
    let str = String(num);
    let sum = 0;

    for(let i = 0; i < str.length; i++){
        sum += Number(str[i]);
    }

    const result = num - sum;

    if (result % 9 !== 0) {
      console.log("실패:", num, "->", result);
    }

    console.log(num, "-", sum, "=", result);
    console.log(result, "/ 9 = ", result/9);
    return result % 9 // 나머지 확인
};

console.log(sumDigits(10));
console.log(sumDigits(11));
console.log(sumDigits(58));
console.log(sumDigits(99));
console.log(sumDigits(367));
console.log(sumDigits(888));
console.log(sumDigits(10000));


const foo2 = (n) => {

    // 9의 배수만 나열 
    let fruits = {
        9:'apple',18:'apple',27:'apple',36:'apple',45:'apple'
        ,54:'apple',72:'apple',81:'apple',90:'apple',99:'apple'
    }

    let result = n;
    if(n > 100){
        while (result > 100) {
        const sumNum = sum(result);
        result = result - sumNum;
    }
    } else {
         const sumNum = sum(result);
        result = result - sumNum;
    }

    return fruits[result];
}

console.log(foo2(10));
console.log(foo2(11));
console.log(foo2(18));
console.log(foo2(25));;
console.log(foo2(205));
console.log(foo2(1166));
console.log(foo2(10000));
*/

/*
// 제출용
const getSum = (num) => {
  let total = 0;

  while (num > 0) {
    total += num % 10;
    num = Math.floor(num / 10);
  }

  return total;
};

const findFruits = (n) => {
    const fruits = {
        9:'apple',18:'apple',27:'apple',36:'apple',45:'apple'
        ,54:'apple',72:'apple',81:'apple',90:'apple',99:'apple'
    }

    let result = n;
    while (result > 100) {
        result -= getSum(result);
    }
    result -= getSum(result);

    return fruits[result];
};
console.log("------------");
console.log(findFruits(10));
console.log(findFruits(11));
console.log(findFruits(18));
console.log(findFruits(25));;
console.log(findFruits(205));
console.log(findFruits(1166));
console.log(findFruits(10000));
*/


// 방법 3 ) 리팩토링
const getDigitSum = (num) => {
  let total = 0;

  while (num > 0) {
    total += num % 10;
    num = Math.floor(num / 10);
  }

  return total;
};

const reduceNumber = (num) => {
  let result = num;

  while (result > 100) {
    result -= getDigitSum(result);
  }

  return result - getDigitSum(result);
};

const getFruit = (num) => {
  const reduced = reduceNumber(num);
  return reduced % 9 === 0 ? 'apple' : undefined;
};

console.log(getFruit(25));;
console.log(getFruit(205));
console.log(getFruit(1166));
console.log(getFruit(10000));









// 5. 더하고 뺴기
const getSum = (num) => {
  let total = 0;

  while (num > 0) {
    total += num % 10;
    num = Math.floor(num / 10);
  }

  return total;
};

const findFruits = (n) => {
    // const fruits = {
    //     9:'apple',18:'apple',27:'apple',36:'apple',45:'apple'
    //     ,54:'apple',72:'apple',81:'apple',90:'apple',99:'apple'
    // }

    let result = n;
    while (result > 100) {
        result -= getSum(result);
    }
    result -= getSum(result);

    //return fruits[result];
    return result % 9 === 0 ? 'apple' : '';
};

// test
console.log(findFruits(10));
console.log(findFruits(11));