function solution(num_list) {
    // js 기능 중 배열메소드 reverse 기능
    // num_list.reverse();
    
    // 차례대로 원래 배열에서 원소를 꺼내서 새로운 배열을 만들어 차례대로 넣어줌
    
    // 새로운 배열 생성
    const newArray = [];
    
    // while문의 시작점은 배열의 맨 뒤에서부터 : 배열의 길이 - 1
    let cnt = num_list.length - 1;
    
    while(cnt >= 0) {
        // 새로운 배열에 넣어줌
        newArray.push(num_list[cnt]);
        
        cnt = cnt - 1;
    }
    
    return newArray;
}