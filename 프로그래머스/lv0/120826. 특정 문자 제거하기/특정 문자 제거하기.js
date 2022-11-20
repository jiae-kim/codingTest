function solution(my_string, letter) {
    // 비어있는 문자열에 레터에 들어있지 않은 문자를 추가하는 방식
    var answer = '';
    
    // my_string 원소 꺼내기
    let cnt = 0;
    
    while(cnt < my_string.length) {
        // 문자 하나 꺼내서 letter와 다르면 비어있는 문자열 answer에 추가
        if(my_string[cnt] !== letter) {
            answer = answer + my_string[cnt]
        }
        cnt = cnt + 1;
    }
    return answer;
}