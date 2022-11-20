function solution(n) {
    // n까지 1씩 커짐
    let cnt = 1;
    // 더한 값을 누적시킬 변수
    let sum = 0;
    while (cnt <= n) {
        if(cnt % 2 == 0) {
            sum = sum + cnt;
        }
        cnt = cnt + 1;
    }
    return sum;
}