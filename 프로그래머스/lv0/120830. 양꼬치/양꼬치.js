function solution(n, k) {
    var answer = 0;
    // 양꼬치 : n * 12000
    // 음료수 : k * 2000
    let yang = n * 12000;
    let drink = k * 2000;
    
    // 할인가격 : n / 10 것의 몫
    let discount = Math.floor(n/10) * 2000;
    
    return yang + drink - discount;
}