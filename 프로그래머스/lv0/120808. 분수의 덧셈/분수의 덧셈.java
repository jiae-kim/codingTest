class Solution {
    public int[] solution(int denum1, int num1, int denum2, int num2) {
        // 1. 분수형식으로 만든 후 덧셈
        // denum1 / num1 + denum2 / num2 == denum1 * num2 + denum2 * num1 / num1 * num2
        int[] answer = new int[2];
        // 분자
        int denum = denum1 * num2 + denum2 * num1;
        // 분모
        int num = num1 * num2;

        // 2. 분자분모의 최대공약수로 나눠줌 
        int max = 1;
        
        for(int i = 1; i <= num && i <= denum; i++){
            if(num % i == 0 && denum % i == 0) {
                max = i;
            }
        }
        
        answer[0] = denum / max;
        answer[1] = num / max;
        
        return answer; 
        
    }
}