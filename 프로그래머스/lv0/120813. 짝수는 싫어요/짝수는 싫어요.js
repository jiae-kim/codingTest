function solution(n) {
    var answer = [];
    
    // 1 ~ n까지 커지는 숫자 생성
    let cnt = 1;
    
    while(cnt <= n) {
        // cnt가 홀수일 때만
        if(cnt % 2 === 1){
            // 해당 값 배열에 넣어줌
            answer.push(cnt);
        }
        cnt = cnt + 1;
    }
    return answer;
}