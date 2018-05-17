console.log("hello 123");
var greeting = "hello user";
console.log(greeting);
// function f(tf) {
//     if (tf) {
//         var a = 99;
//     }
//     return a;
// }
// function f2(tf) {
//     if (tf) {
//         let a = 22;
//     }
//     return a;
// }
// console.log(f(true));
// console.log(f2(true));
// function g3(){
//     for (let i=0; i<=10; i++){
//     }
//     return i;
// }
// console.log(g3());
var names = ['Andy', 'Tony', 'Kevin'];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
for (var x in names) {
    console.log(names[x]);
}
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(name_1);
}
