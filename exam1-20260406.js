// 1. 두 숫자의 합 (two sum)
// Map을 사용해 현재 값의 보수값(target - 현재값)을 확인
// Map 은 배열읗 한번만 순회하기 떄문에 시간 복잡도 O(n)
function twosum(nums, target) {
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

// 시간 복잡도 O(n²) 높은 풀이
// 필요한 숫자가 배열에 있는지 반복문을 통해 찾기 > 모든 조합을 비교
function twosum2(nums, target) {
    for(let i =0; i < nums.length; i++){
        for(let j = i + 1; j <nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j];
            }
        }
    }

    return [];
}

// 테스트
console.log(twosum(nums = [3,2,4], target = 6));
console.log(twosum(nums = [5,8,9,1], target = 6));