import java.util.Arrays;

class Solution {
    public int solution(int[] array) {
        // 오름차순 정렬 : Array.sort()

        Arrays.sort(array);
        return array[array.length / 2];
    }
}