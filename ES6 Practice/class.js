class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "Dhaka college";
    }
}
const student1 = new Student(12, "Tom");
const student2 = new Student(22, "Hanks");
console.log(student1, student2);