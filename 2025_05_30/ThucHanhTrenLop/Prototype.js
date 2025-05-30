function Student() {
    this.name = 'Duc';
    this.id = 'B24DCCC070';
}
var studObj1 = new Student();
studObj1.id = 'B24DCCC070';
alert(studObj1.id); // B24DCCC070

var studObj2 = new Student();
alert(studObj2.id); // undefined
