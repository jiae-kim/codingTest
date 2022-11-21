class Solution {
    public String solution(String my_string) {
        // substring함수로 string배열을 잘라 이어 붙이기
        String answer = "";
        
        for(int i = my_string.length() - 1; i >= 0; i--) {
            answer += my_string.substring(i, i+1);
        }
        return answer;
    }
}