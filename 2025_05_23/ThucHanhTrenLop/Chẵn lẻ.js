n=parseInt(prompt('Nhập số nguyên: '))
        function kiemTraChanLe(n){
            if (n % 2 === 0){
                document.writeln('Chuỗi số chẵn là: ' + String(n))
            }
            else{
                document.writeln('Chuỗi số lẻ là: ' + String(n))
            }
        }
        kiemTraChanLe(n)