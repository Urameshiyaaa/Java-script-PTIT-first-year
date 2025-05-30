n=parseInt(prompt('Nhập số dòng: '))
function veTamGiac(n){
    for (i=1; i<=n; i++){
        a= '*'.repeat(i)
        document.writeln(a + '<br>')
    }
}
veTamGiac(n)