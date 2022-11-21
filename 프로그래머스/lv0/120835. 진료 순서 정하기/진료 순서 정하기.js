function solution(emergency) {
    // emergency 배열의 원소들을 내림차순으로 나열
    let newEmergencyArray = [];
    let cnt = 0;
    while (cnt < emergency.length) {
        // 객체를 이용해서 원래 값, 위치 넣어줌
        newEmergencyArray.push({value: emergency[cnt], idx: cnt});
        cnt = cnt + 1;
    }
    // 내림차순으로 나열된 원소들의 순서를 정한 후 원래 위치로 이동
    newEmergencyArray.sort((a,b) => b.value - a.value);
    var answer = new Array(emergency.length);
    
    cnt = 0;
    while(cnt < newEmergencyArray.length) {
        // 배열에서 꺼낸 하나의 원소
        let item = newEmergencyArray[cnt]; 
        // 현재위치에서 중요도 정하기
        answer[item.idx] = cnt + 1; 
        cnt = cnt + 1;
    }
    return answer;
}