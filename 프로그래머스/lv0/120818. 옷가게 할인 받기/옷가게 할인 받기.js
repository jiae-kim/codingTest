function solution(price) {
    // 3가지 조건 만들기
    // 코드 실행 순서 : 50 -> 30 -> 10
    
     if(price >= 500000) {
        return Math.floor(price * 0.80);
    }
    
    if(price >= 300000) {
        return Math.floor(price * 0.90);
    }
    
    if(price >= 100000) {
        return Math.floor(price * 0.95);
    }
    
    // 어느조건에도 일치하지 않을때
    return price;
}