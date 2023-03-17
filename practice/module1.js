alert("hi");

const a = 2; 

 console.log(a+2);
 console.log(a*2);
 console.log(a/2);
 console.log("jaduu");

 const mon = "mon";
 const tue = "tue";
 const wed = "wed";
 const thu = "thu";
 const fri = "fri";
 const sat = "sat";
 const sun = "sun";

 const daysOfWeek = [mon, tue, wed, thu, fri, sat];
 
 // get item from array
 console.log(daysOfWeek[5])

 // add one more to the array
 daysOfWeek.push("sun");

 console.log(daysOfWeek);

const player = {
    name: "jaduu",
    points: 10,
    pretty: true,
};

player.lastName = "ma";
player.points += 15;

console.log(player);
console.log(player.name);

function sayHello(personName, age){
    console.log("hello my name is " + personName + " and i am " + age);
}

sayHello("jadoo", 22);
sayHello("harry", 44);


function plus(a,b) {
    console.log(a + b);
}

plus(2,4);

const player2 = {
    name: "jadoo",
    sayHello: function (otherPersonsName) {
        console.log("hello " + otherPersonsName + " nice to meet you!")
        },
    };

player2.sayHello("lynn");


