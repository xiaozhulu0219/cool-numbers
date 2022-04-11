/**
 * 判断给定的数字是否为质数
 * return true/false
 */
export default function isPrime(n) {
    if (n == 2) {
        return true;
    }
    else if (n > 2) {
        for (let i = 2; i <= n - 1; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
    // else {
    //     throw new Error("大于1的正整数")
    // }

}