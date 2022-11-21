class Solution {
    public int solution(int n) {
        int answer = 0;
        // 몇번 나누었는지
        int count = 0;
        // 나누는 수 i는 1부터 시작
        for(int i = 1; i <= n; i++) {
            // n을 i로 나누어진다 == 공약수이다
            if(n % i == 0) {
                count++;
            }
        }
        return count;
    }
}