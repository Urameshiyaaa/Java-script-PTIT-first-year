n=parseInt(prompt('Nhập số nguyên dương'))
function tongChuSo(n){
    s=0
    while (n < 0){
        n=parseInt(prompt('Nhập số dương cơ mà: '));
    }
    a=String(n)
    for (i=0; i<a.length;i++ ){
        b=a[i]
        s=s+parseInt(b)
    }
    return s;
}
document.writeln('Tổng chữ số là:' + tongChuSo(n));