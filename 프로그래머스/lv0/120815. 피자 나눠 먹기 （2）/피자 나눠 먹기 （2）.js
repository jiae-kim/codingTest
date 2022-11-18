function solution(n) {
    // 약수 개념
    // 1 ~ 3명 => 1판
    // 4명 => 2판
    // 5명 => 5판
    
    // 1에서 계속 커지는 숫자 반복문으로 만들기
    var answer = 0;
    // 몇판 시켰는지 카운트 : 1판부터 시작 ~ n판까지
    let pizzaCount = 1;
    while(true) {
        if(pizzaCount * 6 % n == 0) {
            answer = pizzaCount;
            break;
        }
        pizzaCount = pizzaCount + 1;
    }
    
    return answer;
}