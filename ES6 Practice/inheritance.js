class Parent {
    constructor() {
        this.fatherName = "Leo"
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Hanks");
const baby2 = new Child("Tom");
console.log(baby, baby2);
console.log(baby.getFullName(), ",", baby2.getFullName());