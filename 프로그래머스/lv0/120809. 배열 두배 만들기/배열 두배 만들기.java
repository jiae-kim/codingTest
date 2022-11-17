class Solution {
    public int[] solution(int[] numbers) {
        // 1. numbers에서 원소를 꺼내야함
        // numbers [1,2,3,4,5] => numbrers[0] == 1
        // 2. 원소를 꺼내 2배를 한 후에 새 배열에 넣어줘야함
        // push는 배열의 길이만큼만 해야됨 => 반복문 사용해서 
        // answer.push(1); => [1]
        
        for(int i=0; i < numbers.length; i++){
            numbers[i] *= 2;
        }
        return numbers;
    }
}