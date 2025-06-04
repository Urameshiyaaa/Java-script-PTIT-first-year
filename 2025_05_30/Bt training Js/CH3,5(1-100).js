function demSoChiaHet(){
    s = 0
    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            s++
        }
    }
    return s
}
alert('Có ' + demSoChiaHet() + ' số chia hết cho 3 & 5 trong [1;100]');