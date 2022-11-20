function solution(my_string, n) {
    var answer = '';
    
    // 원소 꺼내기
    let cnt = 0;
    while(cnt < my_string.length) {
        // 반복할 문자
        const repeat = my_string[cnt];
        
        // n번만큼 반복해서 만든 문자열에 추가
        let repeatCnt = 0;
        while(repeatCnt < n) {
            answer = answer + repeat;
            repeatCnt = repeatCnt + 1;
        }
        
        cnt = cnt + 1;
    }
    return answer;
}