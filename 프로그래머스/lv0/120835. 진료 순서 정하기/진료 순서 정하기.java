import java.util.*;
class Solution {
    public int[] solution(int[] emergency) {
        // 깊은복사 : Arrays.copyOf(arr, length)
        // 얕은복사 : int[] arr = arr_b
        int[] answer = new int[emergency.length];
        int[] copy = Arrays.copyOf(emergency, emergency.length);
        
        Arrays.sort(copy);
        
        for(int i = 0; i < emergency.length; i++) {
            for(int j = 0; j < copy.length; j++) {
                if(emergency[i] == copy[j]) {
                    answer[i] = emergency.length - j;
                }
            }
        }
        return answer;
    }
}