// const projectList = document.getElementById("aboutlink");
//
// let scrollPos = 0;
// let ticking = false;
//
// function doSomething() {
//     // do something with scroll position
//     console.log("Hello")
// }
//
// projectList.addEventListener("click", function (){
//    doSomething()
// });
//
// function resizeText(multiplier) {
//     if (document.body.style.fontSize == "") {
//         document.body.style.fontSize = "1.0em";
//     }
//     document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";
// }
//

function finalGrade(a,b,c){
    let avg = Math.floor((a+b+c)/3.0);
    if ((a < 0 || a > 100) || (b < 0 || b > 100) || (c < 0 || c >100)){
        return "You have entered an invalid grade";
    }else{
        switch(true){
            case avg < 60:
                return "F";
                break;
            case avg >=60 && avg < 70:
                return "D";
                break;
            case avg >=70 && avg < 80:
                return 'C';
                break;
            case avg >=80 && avg < 90:
                return 'B';
                break;
            case avg >= 90 && avg <= 100:
                return 'A';
                break;
        }
    }
}
// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(-43, 92, 95)) // Should print 'A'