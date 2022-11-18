function solution(money) {
    // [최대로 마실 수 있는 잔수, 남는 돈]
    // [money / 5500, 나머지]
    
    // 마실 수 있는 최대 잔수
    let coffeeCnt = Math.floor(money / 5500);
    
    // 남는 돈
    let moneyLeft = money % 5500;

    return [coffeeCnt, moneyLeft];
}