var isAdditiveNumber = function (num) {
    for (let i = 0; i < num.length - 1; i++) {
        if (num[0] == 0 && num[i + 2] != num[i + 1]) {
            break;
        }
        let one = num.substring(0, i + 1)
        for (let j = i; j < num.length - 1; j++) {
            let two = num.substring(i + 1, j + 2)
            if (two.length > 1 && two[0] == 0) {
                break;
            }
            const onee = one
            for (let k = j; k < num.length - 1; k) {
                ans = String(Number(one) + Number(two))
                if (ans == num.substring(k + 2, ans.length + k + 2)) {
                    one = two
                    two = ans
                    k = ans.length + k
                    if ((k + 2) == num.length) {
                        return true
                    }
                }
                else {
                    break;
                }
            }
            one = onee
        }
    }
    return false
};
