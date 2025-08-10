// function a(){
//     function c(){
//         console.log(b);
//     }
// }


// let b = 10;
// a();

// console.log(a);
// let a = 10; 

// function createSecret() {
//   let secret = "JavaScript Closures are powerful!";

//    function y() {
//     console.log(secret);
//   };
//   secret = 10;
//   return y; 
// }
// let sec = createSecret();
// sec();

// function z(){
//     for(var i = 0; i <= 5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
// }
// z();

// function o(){
//     function i(){
//         console.log(3);
//     }
//     return i;
// }
// o()();    

// function x(){
//     var x = 10;
//     function y(){
//         console.log("inside y " , x);
//     }
//     return y;
// }
// var c = x();
// console.log(c)
// c();

// function f1(p1){
//     console.log(p1());
// }

// f1(function(){ console.log("just call the function as arg")})

// function x(y){
//     console.log("x");
//     y();
// }

// x(function y(){
//     console.log("y");
// });

console.log("start")

function cb(){
    console.log("Callback func")
}
cb();
// setTimeout(cb, 5000);

let vr = 10.23;

console.log("end")

let arr = [92,283,273,2,4];
console.log(Object.values(arr))
// console.log(arr.reverse())   
// console.log(arr.toReversed())
console.log(typeof vr);
console.log(Array.isArray(arr))
let obj = {
    'a' : 'man',
    'b' : 'naman'
}
obj['v'] = 'sohan';
console.log(obj)
console.log(Object.keys(obj));
console.log(Object.values(obj));

const user = [{uanme : "man", lname : 'MCA', age : 23},
              {uanme : "naman", lname : 'MCA', age : 23},
              {uanme : "vats", lname : 'BCA', age : 22}
];

// console.log(user[1].uanme);
const fullName = user.map((x) =>{
    return x.uanme + " " + x.lname;
});

const NumOfStdSameAge = user.reduce((age, curr) =>{
    if(age[curr.age]){
        age[curr.age] = ++age[curr.age];
    }else{
        age[curr.age] = 1
    }
    
  return age;
},{})
// console.log(arr.splice(2,3));
const narr = arr.toSorted();
narr[5] = 28;
console.log(narr)
console.log(arr)
console.log(fullName)
console.log(NumOfStdSameAge)
// for(i in arr){
//     console.log(arr[i])
// }
arr.forEach(element => {
    console.log(element);
});

function isprime(n){
    if(n == 0 || n == 1) return false;
    for(let i = 2; i <= Math.sqrt(n); i++) if(n % i == 0) return false;
    return true;    
}

console.log(isprime(4));

const arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};
console.log(Array.prototype.join.call(arrayLike, "+")); 

arr.push("man");
console.log(arr);

function z(){
    let b = 10;
    function y(){
        let a = 9;
        function x(){
            console.log(a, b);
        }
        x();
    }
    y();
}
z();