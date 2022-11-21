class Solution {
    public String solution(String my_string, String letter) {
        String answer = "";
        // replace함수를 사용하여 letter를 공백으로 치환
        answer = my_string.replace(letter, "");
        return answer;
    }
}