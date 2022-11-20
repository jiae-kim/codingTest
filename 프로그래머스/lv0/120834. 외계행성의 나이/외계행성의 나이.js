function solution(age) {
    var answer = '';
    // 숫자를 문자로 변환 후 하나씩 꺼내서 알파벳과 매칭해줌
    const stringAge = String(age);
    let cnt = 0;
    while(cnt < stringAge.length) {
        answer = answer + String.fromCharCode(stringAge[cnt].charCodeAt(0) + 49);
        cnt = cnt + 1;
    }
    return answer;
}