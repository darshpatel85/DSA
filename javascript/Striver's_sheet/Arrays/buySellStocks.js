// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max_profit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i+1; j < prices.length; j++) {
            profit = prices[j]-prices[i];
            if(profit > max_profit) max_profit = profit
        }
    }
    return max_profit
};
console.log(maxProfit([7,1,5,3,6,3]));