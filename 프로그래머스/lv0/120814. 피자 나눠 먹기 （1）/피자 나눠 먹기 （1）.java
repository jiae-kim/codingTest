class Solution {
    public int solution(int n) {
        int answer = 0;
        
        if(n % 7 == 0) {
            // 7로 나누어 떨어진다
            answer = n / 7;
        } else {
            // 안떨어진다
            answer = n / 7 + 1;
        }
        
        return answer;
    }
}