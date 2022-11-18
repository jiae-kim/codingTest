class Solution {
    public int[] solution(int money) {
        // [최대로 마실 수 있는 잔수, 남는 돈] == [money / 5500, 나머지]
        int coffeeCnt = (int)(money / 5500);
        int moneyLeft = money % 5500;
        
        // 배열에 값 대입하기
        // 1. 배열 선언 : 배열을 다룰 변수 준비
        int[] answer;
        
        // 2. 배열 요소 생성 : 값을 저장할 상자 준비
        answer = new int[2];
        
        // 3. 배열에 값 대입
        answer [0] = coffeeCnt;
        answer [1] = moneyLeft;
        
        return answer;
    }
}