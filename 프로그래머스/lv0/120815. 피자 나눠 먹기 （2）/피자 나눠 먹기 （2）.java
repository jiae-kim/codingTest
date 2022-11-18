class Solution {
    public int solution(int n) {
        // 피자는 1판부터 시작
        int answer = 1;
        
        while(true) {
            if (answer * 6 % n == 0) {
                break;
            } else {
                answer ++;
            }
        }
        return answer;
    }
}