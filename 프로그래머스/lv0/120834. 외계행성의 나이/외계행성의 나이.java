import java.util.*;
class Solution {
    public String solution(int age) {
        // split(regex, limit)
        // substring(startIndex, endIndex)
        // substr(start, length)
        String answer = "";

        // 숫자형을 문자형으로 
        String s = String.valueOf(age);
        // 문자형을 나눈다
        String[] arr = s.split("");
        
        // 아스키코드 개념
        for(int i = 0; i < arr.length; i++) {
            answer += ((char)((Integer.parseInt(arr[i]) + 97)));
        }
        return answer;
    }
}