function solution(num_list) {
    // 원소 꺼내기
    let cnt = 0;
    let even = 0;
    let odd = 0;
    
    while(cnt < num_list.length) {
        if(num_list[cnt] % 2 == 0) {
            // 짝수일 경우
            even = even + 1;
        } else {
            // 홀수일 경우
            odd = odd + 1;
        }
        cnt = cnt + 1;
    }
    return [even, odd];
}