n=parseInt(prompt('Nhập số nguyên dương: '))
function tinhGiaiThua(n) {
    while ( n < 0 || isNaN(n)) {
        n = parseInt(prompt('Nhập số nguyên dương cơ mà:'));
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    chamThan = 1;
    for (let i = 2; i <= n; i++) {
        chamThan *= i;
    }
    return chamThan;
}
chamThan = tinhGiaiThua(n);
alert(`Giai thừa là: ${chamThan}`);