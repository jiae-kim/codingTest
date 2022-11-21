function solution(n) {
    // n을 나누면서 공약수를 찾고 몇번 나누었는지를 return
    var answer = 0;
    // n을 나눈는 수 (최소값인 1)
    let cnt = 1;
    
    while(true) {
        // 나누는 수가 n보다 커질때 멈춤
        if(cnt > n) {
            break;
        }
        
        if(n % cnt == 0) {
            // n을 cnt로 나눈 나머지가 0이면 나누어졌다 == 공약수이다
            answer = answer + 1;
        }
        cnt = cnt + 1;
    }
    return answer;
}