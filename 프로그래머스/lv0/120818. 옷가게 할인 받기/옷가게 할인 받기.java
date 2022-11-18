class Solution {
    public int solution(int price) {
        // if ~ else if
        
        if (price >= 500000) {
            return (int)(price * 0.80); 
        } else if (price >= 300000) {
            return (int)(price * 0.90);
        } else if(price >= 100000) {
            return (int)(price * 0.95);
        }
        
        return price;
    }
}