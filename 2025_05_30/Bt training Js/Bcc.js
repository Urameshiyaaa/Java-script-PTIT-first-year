n = parseInt(prompt('Hãy nhập 1 số: '))
function bangCuuChuong(n){
    tich=1
    for (i=1; i<=10; i++){
        tich=n*i
        document.writeln(tich)
    }
}
bangCuuChuong(n)