//Đảo ngược chuỗi
        str=prompt("nhập vào 1 chuỗi: ")
        function daoNguocChuoi(str) {
            ans = "";
            for (i = str.length - 1;i >= 0; i--) {
                ans += str[i];
            }
        return ans;
        }   
        daoNguocChuoi(ans)