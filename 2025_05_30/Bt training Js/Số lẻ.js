n=parseInt(prompt('Nhập n, để tôi tính tổng số lẻ: '))
function tongSoLe(n){
    while (n < 0){
        n=parseInt(prompt('Nhập số chẵn ấy: '))
    }
    s=0
    for (i=1; i < n; i=i+2 ){
        s+=i
    }
return s 
}
a=tongSoLe(n)
alert('Tổng số lẻ nhỏ hơn ' + n + ' là: ' +a)