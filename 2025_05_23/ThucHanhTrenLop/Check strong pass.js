 //Kiểm tra mật khẩu mạnh
        mk=prompt('Nhập mk cho tao check:')
        function kiemTraMatKhau(mk){
            if ((mk.length >= 8) && (mk = /[A-Z]/) && (mk = /[a-z]/) && (mk = /\d/) ){
                document.writeln("Thỏa mãn")
            }
            else{
                document.writeln('ko thỏa mãn')
            }
        }
        kiemTraMatKhau(mk)