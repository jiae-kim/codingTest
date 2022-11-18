class Solution {
    public double solution(int[] numbers) {
        // numbers 배열에 들어있는 모든 변수의 합 / 변수의 갯수 (배열의 길이)
        
        // 모든 원소의 합
        double answer = 0;
        
        // 누적한 값을 담을 변수 생성
        double sum = 0;
        
        // 반복문으로 배열의 길이만큼 덧셈
        int cnt = 0;
        while(cnt < numbers.length) {
            sum = sum + numbers[cnt];
            cnt = cnt + 1;
        }
        
        // sum : 배열의 총합
        return sum / numbers.length;
    }
}