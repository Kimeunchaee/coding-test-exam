// ## 두 숫자의 합 (two sum)



// 1. 시간 복잡도 높은 풀이 O(n²) 
// 필요한 숫자가 배열에 있는지 반복문을 통해 찾기 > 모든 조합을 비교
function twoSum1(nums, target) {
    for(let i =0; i < nums.length; i++){
        for(let j = i + 1; j <nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j];
            }
        }
    }

    return [];
}


// 2. 시간 복잡도 낮은 풀이 O(n)
// Map을 사용해 현재 값의 보수값(target - 현재값)을 확인
// Map 은 배열을 한번만 순회하기 떄문에 시간 복잡도 O(n)
function twoSum2(nums, target) {
    const map = new Map();

    for(let i =0; i < nums.length; i++){
        const complement = target - nums[i]

        // 맵에 필요한 값 있는지 확인
        if(map.has(complement)){
            return [map.get(complement), i]
        }

        map.set(nums[i], i);
    }

    return [];
}



// 3. arrow function
// 콜백 함수, 간단 로직, 코테 등 this 필요없을때
// 일반 함수는 this 사용가능, 생성자로 사용가능
const twoSum3 = (nums, target) => {
    const map = new Map();
    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        if(map.has(complement)) return [map.get(complement), i];
        map.set(nums[i],i);
    }
    return [];
}




// 테스트
console.log(twoSum1(nums = [2,7,11,15], target = 9));
console.log(twoSum2(nums = [3,2,4], target = 6));
console.log(twoSum3(nums = [3,2,4], target = 6));
console.log(twoSum3([2, 7, 11, 15], 9));