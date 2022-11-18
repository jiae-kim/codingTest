class Solution {
    public int[] solution(int n) {
        int cnt = 0;
        
        if(n % 2 == 0) {// n이 짝수일 때
            cnt = n/2;
        } else {// n이 홀수일 때
            cnt = n/2 + 1;
        }
        
        int[] result = new int[cnt];
        int num = 1;
        
        for(int i = 0; i < result.length; i++) {
            result[i] = num;
            // 홀수 만들기
            num = num + 2;
        }
        
        return result;
    }
}