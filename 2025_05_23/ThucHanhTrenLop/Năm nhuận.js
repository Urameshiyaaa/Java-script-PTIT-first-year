//Kiểm tra năm nhuận
        a=parseInt(prompt("nhập năm: "))
        function laNamNhuan(a){
            if ((a % 4 === 0) && (a % 100 !== 0)) {
                document.writeln('Là năm nhuận')
            }
            else if(a % 400 === 0){
                document.writeln('Là năm nhuận')
            }
            else {
                document.writeln('Ko phải năm nhuận')
            }
        return a
        }
        laNamNhuan(a)