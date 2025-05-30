class student{
    name;
    id;
    group;
    ohayo(){
        document.writeln("Ohayo "+ this.name);
        }
        changeGroup(newgroup){
        this.group = newgroup;
        }
}
a = new student();
a.name = "Pham Minh Duc";
a.ohayo();
a.group = 'Anime - My heart';
document.writeln('<br>' + a.name + ': ' + a.group + ' ' + '(trước khi change)');
a.changeGroup('My cosplay');
document.writeln('<br>' + a.name + ': ' + a.group + ' ' + "(sau khi change)");