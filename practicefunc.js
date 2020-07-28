
var msg;
let name, age, cellNo, firstChar, remChar, num;
let names = ["yaqoob", "khalid", "yousuf"];
let numbers = [10, 20, 30, 11, 12, 41, 21, 2, 3, 5];
let newName = prompt("please enter a name","hamza")
// function greetings(thanks = "Thanks a Lot") {
names.sort();
numbers.sort();

if (names.includes(newName)) {
    document.write("correct " + " You have entered "+ newName +"<br>");
}
else {
    document.write("your userId is incorrect."+"<br>")
}


document.write(numbers + "<br>");
numbers.sort(function (a,b) { return (a-b) });
document.write(numbers + "<br>");


document.write(names + "<br>");
names.reverse();
document.write(names+"<br>")
name = prompt("Please Enter Your Name", "Yaqoob Patel");
age = +prompt("Please Enter Your Age", 55);
cellNo = +prompt("Please Enter Your Cell No.", 3001234567);
num = name.length;
firstChar = name.slice(0, 1);

firstChar = firstChar.toUpperCase();

console.log(firstChar);
remChar = name.slice(1, num);
console.log(num);
console.log(remChar);
// document.write(firstChar);

document.write(firstChar + remChar);


// }


    // if (age >= 18 && age<=60) {
    //     msg = `Hello Mr.${name}.<br> Your Age is ${age} years and <br> your Cell No. is ${cellNo}.<br> 
    //  You Can Get Licence. Thanks a Lot.` 
    //         ;
    // }
    // else {
    //     msg = `Hello Mr.${name}.<br> Your Age is ${age} years and <br> your Cell No. is ${cellNo}.<br>  You Cannot Get Licence. We Are Sorry. `;

    // }

    // msg = `Hello Mr.${name}.<br> Your Age is ${age} years and <br> your Cell No. is ${cellNo}.<br> 
    // ${thanks}`
//     console.log(name, age, cellNo);
//     return msg;
// }



// if (age<=65) {
//     thanks="thanks a Lot"
//     ;
// }
// else {
//     thanks = "thankyou";
// }
// thanks = "We are Thankful to You";
// msg = greetings();
// console.log(name);
// console.log(age);
// console.log(cellNo);
// console.log(msg);

// document.body.innerHTML = msg;

// msg = greetings(name, age, cellNo);
// console.log(window);
// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(innerHeight);
// console.log(innerWidth);
// console.log(scrollX);
// console.log(scrollY);
// console.log(location);
// console.log(location.toString());
// console.log(document.all);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.links[0].href);
// let a = document.all;
// Array.from(a).
//     forEach(function(element) {
//         console.log(element);
//     });

// let a = document.querySelector("#fruit1"); 
//  let a = document.querySelector(".subheading"); 
//  let a = document.querySelector("div"); 
//  

// let a = document.getElementsByClassName(
//     "subheading");

// console.log(a[1]);
// a[2].style.color = "red";
// a[0].style.color = "green";
// a[1].style.color = "blue";
// console.log(location.href = "//google.com/");
// let a = document.getElementsByName("div");
// a = document.hasChildNodes();
// a = document.getElementsByTagName("div");

// console.log(a);
// a.links

// Array.from(a).forEach(element =>  {
//     console.log(element);
//     a[4].style.color = "red";
//     document.links[0].style.color = "yellow";

//     element.input = "red";
// });
// let
// cont = document.querySelector(".container");
// console.log(cont.childNodes);
// console.log(cont.children);
// console.log(cont.children[7].children[3]);
// console.log(cont.firstChild);
// console.log(cont.firstElementChild);
// console.log(cont.lastChild);
// console.log(cont.lastElementChild);

// console.log(cont.childElementCount);
// console.log(cont.firstElementChild.parentElement);
// console.log(cont.firstElementChild.nextSibling);
// console.log(cont.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children);

// cont.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[3].style.color = "green";

// cont.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[2].style.color = "black";


// cont.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[1].style.color = "blue"

// cont.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0].style.color = "red"

// cont.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[3].style.color="green";

// cont.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[3].style.bold="bolder";
// let a = document.links;f
// console.log(a[0].href);
// a[0].style.color = "red";
// document.body.innerHTML = 
// "https://www.youtube.com/watch?v=xPAbXwoB7l0";