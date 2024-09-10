// let per=Number(prompt("Enter Number"))
// if (per>79 && per<101) {
//     document.write("A+");
// }
let per=prompt("Enter Number")
if (per>79 && per<101) {
    console.log("A+");
}
else if (per>69 && per<80) {
    console.log("A");
}
else if (per>59 && per<=70) {
    console.log("B");
}
else if (per>49 && per<=60) {
    console.log("C");
}
else if (per>33 && per<50) {
    console.log("D");
}
else if (per>0 && per<34) {
    console.log("fail");
}
else{
    console.log("Invalid");
    
}