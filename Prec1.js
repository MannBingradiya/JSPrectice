// import axios from 'axios';

// console.log("this is log message");
// let str = "ILoveJS";
// console.log(str.slice(1,4));
// let arr = ['d','a','b','c'];
// let nums = [1,2,3,4];
// console.log(arr.sort().reverse());
// // console.log(arr.shift());
// // console.log(arr.pop());
// for(i of arr){
//     console.log(i);
// }
// let func = nums.map((i) =>{
//     return i*i;
// });
// console.log(func); 
// let mul = nums.reduce((res, i) => {
//     return res + i;
// }); 
// console.log('reduce', mul);
// let nums2 = nums;
// console.log(nums2);
// nums2.push(20);
// console.log(nums2 , nums);
// let nums3 = [...nums];
// nums3.push(40);
// console.log(nums3 , nums);
let obj = [
    {
        name: "man",
        age: 23,
        marks: 89    
    },
    {
        name: "mohan",
        age: 24,
        marks: 79    
    },{
        name: "manan",
        age: 22,
        marks: 54    
    }    
];

let newObj = {
    ...obj,
    stud : true
}
console.log(newObj);
let func2 = function (...obj){
    console.log(obj);
}
func2(newObj);
// let [ele1, ele2, ...newArr] = arr;
// console.log(newArr);

// let {stud} = newObj;
// console.log(stud);

// let body = document.querySelector('body');
// let p1 = document.createElement('p');
// p1.innerText = "Hey i am red";
// p1.classList.add('redCol');
// body.append(p1);

// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let p = document.createElement('p');
// h1.innerText = "i am div";
// p.innerText = "me too"; 
// div.append(h1);
// div.append(p);
// body.append(div);
// div.classList.add('div');

// let exmp = {
//     name : "mohan",
//     age:  24,
//     salary : 1300000,
//     JobPosition : "SDE",
//     profile : function(){
//         console.log(this);
//         console.log(this.name + " " + this.age);
//     },
//     profetion : () =>{
//         console.log(this);        
//     }
// }
// exmp.profetion();
// // exmp.profile();

// let arr1 = ["Man"];
// let arr2 = ["Man"];
// console.log(arr1 === arr2);


//---------------------  game -----------------------


let gameSine = [];
let userPress = [];
let btns = ["red", "purple","yellow","green"];

let level = 0;
let start = false;
let body = document.querySelector('body');
let h3 = document.querySelector('h3');


function blinkBox(renBtn){
    renBtn.classList.add("blink");
    setTimeout(() => {
        renBtn.classList.remove("blink");
    }, 250);
}

function gameStart(){
    userPress = [];
    level++;
    h3.innerText = `Level ${level}`;

    let rdm = Math.floor(Math.random() * 3) + 1;
    let renColor = btns[rdm];
    console.log(renColor);
    let renBtn = document.querySelector(`.${renColor}`);
    gameSine.push(renColor);
    blinkBox(renBtn);
}

let allbtns = document.querySelectorAll('.box');
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function check(idx){
    // let idx = level - 1;
    if(gameSine[idx] === userPress[idx]){
        if(gameSine.length == userPress.length){
            gameStart();
        }
    }else{
        console.log("game Over");
    }
}

function btnPress(){
    let btn = this;
    let userSelect  = btn.getAttribute("id");
    userPress.push(userSelect);
    console.log(userSelect);
    blinkBox(btn);

    check(userPress.length - 1);
}

body.addEventListener("click", function(){
    if(start == false){
        start = true;
        gameStart();
    }
});

function success(data){
    console.log(data);
}
function failed(failMess){
    console.log(failMess);
}

function saveToDb(data){
    return new Promise((resolve, reject) =>{
        let ren = Math.floor(Math.random() * 10);
        if(ren < 6){
            console.log(data);
            resolve(data + " was added");
        }else{
            reject(data + "was not added");
        }    
    })
}

saveToDb("man").then(() =>{
    console.log("first user added");    
    return saveToDb("naman");
})
.then(() =>{
    console.log("sec user added");
}) 
.catch(() =>{
    console.log("promise was rejected");
})
saveToDb("user data", () =>{
    console.log("successfully added..");
    saveToDb("man data",
        () =>{
            console.log("man is addded");
        }, 
        () =>{
            console.log("man not added");
        }
    )
}, () =>{
    console.log("failed");
});


let func = async () =>{
    return 5;
}

function ren(){
    return new Promise((resolve, reject) => {
        let ren = Math.floor(Math.random() * 10);
        setTimeout(() => {
            console.log(ren);
            resolve("work done");
        }, 1000);
    });
}

async function name() {
    await ren();
    await ren();
    await ren();
}

let cat = {
"fact": "The Maine Coon is 4 to 5 times larger than the Singapura, the smallest breed of cat.",
"length": 84
}

console.log(cat.fact);

let url = "https://catfact.ninja/fact";

fetch(url).then((res) =>{
    console.log(res);
    console.dir(res.headers);
    return res.json();
}).then((data) => {
    console.log(data.fact); 
}).catch((err) =>{
    console.log(err);
})

async function call(){
    let facts = await fetchApi();
    console.log(facts)
}

async function fetchApi() {
    try{
        let res = await fetch(url);
        let data = await res.json();
        return data.fact;
    }catch(err){
        console.log(err);
    }
}




console.log(n);
console.log(squre(n));
var n = 2;  

function squre(num){
    return num * num;
}

let redius = [10,3,7,6];
// console.log(...redius)
// function area(a, b, c, d){
//     console.log((3.14) * a * a);
//     console.log((3.14) * b * b);
//     console.log((3.14) * c * c);
//     console.log((3.14) * d * d);
// }
// area(...redius);

// function func(...abc){
//     console.log(abc);
// }

// func(1,2,3,4);

let area = function (radius){
    return Math.PI * radius * radius;
}
let diameter = function (radius){
    return radius * 2;
}

let calculateArea = function(redius, logic){
    for(let i = 0; i < redius.length; i++){
        console.log(logic(redius[i]));
    }
}

// calculateArea(redius, area);
calculateArea(redius, diameter);


function getData(id){
    return new Promise((reslove, reject) =>{
        let success = true;
        if(success){
            setTimeout(() => {
                reslove("pass with id ", id);
            }, 1000);
        }else{
            reject("fail");
        }
    });
}

getData(1).then(() =>{
    console.log("Pass id 1");
    getData(2).then( () =>{
        console.log("pass id 2");
    })
}).catch((err) =>{
    console.log(err);
})

// getData(1, () =>{
//     getData(2, () =>{
//         getData(3, () =>{
//             getData(4); 
//         })
//     });
// })

