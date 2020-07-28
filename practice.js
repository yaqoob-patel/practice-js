// var userAge = prompt("Enter Your Age", 1234);
// var userName = prompt("Please Enter Your Name. ");
// console.log(userName)
// var userNames = ["yaqoob", "yousuf", "khalid", "navyaan", "hamza"];
// userName = userName.toLowerCase();
// console.log(userName);

// if (userNames.includes(userName)) {
//     alert("Please Choose Another Name");

//     prompt("Please Enter Your Name. ");
// }
// else {
//     alert(" Your Choosen Name Is Registered");
// }
// var cellNo = prompt("Please enter your Cell No.");

// if (isNaN(userAge) || cellNo === "  " || "-") {
//     alert("Please Enter Numbers Only ");
// }
// else {
//     alert("You Can Proceed " + userName.toUpperCase() + " \nyour age is " + userAge + " Years");
// }


// var str = prompt("enter your name", " abc ");
// for (let i = 0; i < str.length; i++) {
//     if (str.slice(i, i + 2) === "  " || "-" || "." || isNaN(str)) {
//         alert("do space nhi dena!");
//         break;
//     }

//     // else if (str(isNaN)) {

//     //     alert("Please enter alphabets");
//     //     break;
//     //  }

//     else {
//         str = prompt("enter your father's name", "capital latters");
//         continue;
//     }
// }

// console.time();
// var i = 65;
// var j = 91;
// var l = 0;
// var m = 0;
// var alphaCap = [];
// var alphaSmall = [];
// var alphaCapCode;
// var alphaSmallCode;

// for (let k = i; k < j; k++) {

//     document.write(String.fromCharCode(k) + "--" + k + " ----- " + " " + String.fromCharCode(k + 32) + "--" + (k + 32) + " <br>");

//     (alphaCap[l] = [String.fromCharCode(k)]);

//     (alphaSmall[l] = [String.fromCharCode(k + 32)]);
//     l++;
// }
// document.write("{" + alphaCap + "}" + "<br>");
// document.write("{" + alphaSmall + "}" + "<br>");
// alphaCapCode = alphaCap.toString();
// alphaSmallCode = alphaSmall.toString();

// // document.write(alphaCapCode);
// var t; l = 0;
// for (t = 0; t < alphaCapCode.length; t++) {

//     if (alphaCapCode.charCodeAt(t) === 44) {
//         document.write("")

//     }
//     else {
//         document.write (" " + (l + 1) + "- ");
//         document.write("{" + alphaSmallCode.charCodeAt(t) + " = " + alphaSmall[l] + "} , ");
//         document.write("{" + alphaCapCode.charCodeAt(t) + " = " + alphaCap[l] + "}");
//         l++;

        // for (let w = 0; w < alphaCapCode.length; w++) {

        // if (l % 2 === 0) {
        //     document.write(" <br> ")
        // }

        // }
        // document.write(alphaCapCode.charCodeAt(t));
    // }

// }

// let y = alphaCapCode.concat(`,${alphaSmallCode}`);
// document.write(y + "<br>");
// document.write(y.toLowerCase() + "<br>");
// document.write(y.toUpperCase() + "<br>");
// console.log(y.endsWith(`z`));
// console.log(y.length);
// console.log(alphaSmall.length);
// console.log(alphaCap.length);
// console.log(alphaCapCode.length);
// console.log(alphaSmallCode.length);
// console.log(alphaSmallCode.includes("a"));
// console.log(y.indexOf("A"));
// console.log(y.indexOf("a"));
// console.log(y.lastIndexOf(","));
// console.log(y.indexOf(","));
// console.log(y.substring(0, 51));
// console.log(y.substring(52, 101));
// console.log(y.slice(52, 101));
// console.log(y.split("Z"));
// console.log(y.replace("z", "Z"));
// console.log(typeof(alphaCap));
// console.log(typeof(alphaSmall));
// console.log(typeof(alphaCapCode));
// console.log(typeof(alphaSmallCode));


// let yourName = prompt("Please Enter Your Name","yaqoob");
// yourName = yourName.toUpperCase();
// let yourFavourateFruit = prompt("Please Enter Your Favourate Fruite","Apple");
// yourFavourateFruit = yourFavourateFruit.toUpperCase();
// let greetings = "Good Morning";

// let myAlert = `<h1>Hello Yaqoob Patel</h1><h2>${greetings.toUpperCase()} ${ yourName} 
// <p> You Like "${yourFavourateFruit}" <br> Thanks. </h2> <br>
// ${alphaSmall}<br>${alphaSmallCode}<br>${alphaCap}<br>${alphaCapCode}

// `;
// document.body.innerHTML=(myAlert);

// ===========================================================================================





// var name;
// var age;
// var cellNo;
// const yaqoobResume = [{ name: "yaqoob" }, { age: "55" }, { cellNo: "03003644505" }, { name: "navyaan" }, { age: "22" }];
// yaqoobResume.push({ cellNo: "0348-2603700" });
// yaqoobResume.push( {name:"hamza"} );
// yaqoobResume.push({name:"yousuf"} );
// yaqoobResume.push({age:"43"} );
// yaqoobResume.push({ cellNo: "0333-3632075" });
// console.table(yaqoobResume);

// console.timeEnd(); 
// ==================================
// console.log('We are at tut 6');
// let name = 'yaqoob';
// name = name.toUpperCase();
// let greeting = 'Good Morning';
// greeting = greeting.toLocaleUpperCase();
// console.log(greeting + ' ' + name);

// let html;
// html = "<h1> this is heading</h1>" +
//     "<p> this is My para</p>";

// html = html.concat('this', ' str2');
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);


// console.log(html[1]);
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(3));
// console.log(html.endsWith('dsfsdfd'));
// console.log(html.includes(' fg'));
// console.log(html.substring(1,6));
// console.log(html.slice(0, 4))
// console.log(html.split('>'));
// console.log(html.replace('this', 'it'));

// let fruit1 = 'Orange\'';
// let fruit2 = 'Apple';
// let myHtml = `${greeting} ${name}
//             <h1> This is "my" heading </h1>
//             <p> You like ${fruit1.toUpperCase()} and ${fruit2.toUpperCase()}`;

// document.body.innerHTML = myHtml;


// ==================================================================================




console.log("We are at tutorial 9");
// console.log(1)
// console.log(2)
// console.log(3)

console.log("General Loops: for, while, do-while");
let a =34;
a +=1;
a++;
++a;
console.log(a);


// for (let i = 0; i < (a-22); i++){
//     console.log(i);
// }

// ======================================================================================

// let j = 110;
// while (j <= 111) {
//   console.log(j + 1);
//   j += 1;
// }

// =========================================================================================

// let k = 0;
// do {
//     if(k===5){
//         k +=1;
//         continue;
//     }
//   console.log(k + 1);
//   k +=1;
// } while (k < 10);

// let arr = [2, 5, 6, 4, 2, 3];

// let arra1 = ["Yaqoob","Navyaan","Hamza","Hashir"];
// arr.reverse();
// console.log(arr);
// arra1 = arra1.reverse();

// // for (let i = 0; i < arra1.length; i++) {
// let element;
//     // = arra1[i];
// //     console.log(element + "  " + i + " " + arra1)
// // }

// arra1.forEach(function (element,index,array) {
//     console.log(element,index,array);
//     document.body.innerHTML = ( element +"<br>"+ array);
// });

// arr.forEach(function (element, index, array) {
//     console.log(element, index, array);
// });

// ===========================================================================

// let obj = {
//     name: "Rohan Das",
//     age: 78,
//     type: "Dangerous Programmer",
//     os: "Ubuntu"
// }
// for(let key in obj){
//     console.log(`The ${key} of object is ${obj[key]}`)
// }
// document.body.innerHTML =`My office boy ${obj.name.toUpperCase()}. he is ${obj.age} years old. He is a ${obj.type.toUpperCase()}.`;
// console.log('done');


// -----------------------------------------------------------------------------------------------------------



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