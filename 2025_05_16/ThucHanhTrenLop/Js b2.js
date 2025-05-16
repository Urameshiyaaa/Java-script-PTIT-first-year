var c = parseInt(prompt('Nhập số nguyên c: '));
var d = parseInt(prompt('Nhập số nguyên d: '));
if (c>=d) {
    document.write('c lớn hơn bằng b ')
}
else if (c < d){
    document.write(' tương tự th1')
}
else {
    document.write('syntax error')
}



a=parseInt(prompt('Viết số a vào: '))
     switch(a){
            case 1:
                document.writeln('Bạch DƯơng')
                break;
            case 2:
                document.writeln('Kim Ngưu')
                break;
            case 3:
                document.writeln('Song Tử')
                break;
            case 4:
                document.writeln('Cự giải')
                break;
            case 5:
                document.writeln('Sư tử')
                break;
            case 6:
                document.writeln('Xử nữ')
                break;
            case 7:
                document.writeln('Thiên Bình')
                break;
            case 8:
                document.writeln('Thần nông')
                break;
            case 9:
                document.writeln('Nhân mã')
                break;
            case 10:
                document.writeln('Ma kết')
                break;
            case 11:
                document.writeln('Bảo Bình')
                break;
            case 12:
                document.writeln('Song ngư')
                break;
            default:
                document.writeln('Xà phu')
                break;
        }   
        

        b=parseInt(prompt('Nhập số may mắn của mày '))
        sum1=0
        for(; b<=100; b++){
            sum1+=b
        }
        document.writeln('Tổng từ số nhập vào đến 100' +sum1 +'<br> ')

        sum2=0;
        e = parseInt(prompt('Nhập số may mắn của mày '));
        while(e <= 100){
           e++
	       sum2+=e
        }
        document.writeln('Tổng từ số nhập vào đến 100' +sum2 +'<br>')

        f=parseInt(prompt('Nhập số may mắn của mày '))
        sum3=0
        do {
            sum3+=f
            document.writeln('Tổng từ số nhập vào đến 100' +sum3 +'<br>')
        }
        while(f<=100);
        

for (var i = 0; i <= 10; i++) {
    if (i == 5) {
        continue;
    } 
    document.writeln(i + '<br>');
}
        


    function getInfo(){
        document.writeln("Sinh viên UDU <br>");
    }
    getInfo();


    function xinChao(name){
        document.writeln("Xin chào " + name +"<br>");
    }
    xinChao("Mahiru");
    xinChao("Amane");


    function tinhTong_vi(a,b){
        document.writeln("Tổng 2 số trong hàm: "+(a+b));
        return a+b
    }
    var sum = tinhTong_vi(10,20);
    document.writeln("<br>"+(sum + 10));
