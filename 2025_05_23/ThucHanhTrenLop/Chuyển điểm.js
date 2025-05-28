diem=parseFloat(prompt("Nhập điểm: "))
function xepLoai(diem){
    if ((diem < 0) | (diem > 10)){
        document.writeln('Error 404')
    }
    else if(diem >= 9){
        document.writeln('Xếp loại: Xuất sắc')
    }
    else if(diem >= 8){
        document.writeln('Xếp loại: Giỏi')
    }
    else if(diem >= 6.5){
        document.writeln('Xếp loại: Khá')
    }
    else if(diem >= 5){
        document.writeln('Xếp loại: Trung bình')
    }
    else{
        document.writeln("Xếp loại: Yếu")
    }
}
xepLoai(diem)