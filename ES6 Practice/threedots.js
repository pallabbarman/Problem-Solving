const ages = [12, 14, 16, 18, 19];
const ages2 = [13, 15, 17];
const ages3 = [23, 25, 27];
const allAges = ages.concat(ages2).concat(ages3);
console.log(allAges);

const allAges2 = [...ages, ...ages2, ...ages3];
console.log(allAges2);

const business = 650;
const minister = 450;
const localGuy = 250;
const maximum = Math.max(business, minister, localGuy);
console.log(maximum);

const money = [650, 450, 250];
console.log(Math.max(...money));