function solution(n) {
    // 1 ~ 7명 = 0.XX ~ 1
    // 8 ~ 14명 = 1.XX ~ 2
    // 15 ~ 21명 = 2.XX ~ 3
    // n을 7로 나눈 값을 올림처리
    var answer = Math.ceil(n / 7);
    return answer;
}