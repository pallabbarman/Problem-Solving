// destructure 
const person = { name: "Jake William", age: 17, job: "Blogger", gfName: "Ema Watson", address: "Dhaka", phone: "016111111" }
const { phone, gfName, age } = person;
console.log(gfName, phone, age);

// destructure array 
const friends = ['Sakib Khan', 'Ananta Jolil', 'Amir Khan'];
const [first, ...restFriend] = friends;
console.log(first, restFriend);

const complexObject = {
    name: 'abc',
    info: {
        address: 'Mirpur, Dhaka',
        leader: 'Lion Leader'
    }
}

const { leader } = complexObject.info;
console.log(leader);