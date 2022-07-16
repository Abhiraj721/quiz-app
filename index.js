function work(){
const name=(document.main.txt.value);
var date=new Date(name)
var inputdate=new Date(date).getDate();
var inputmonth=new Date(date).getMonth();
var inputyear=new Date(date).getFullYear();
var nowdate=new Date().getDate();
var nowmonth=new Date().getMonth();
var nowyear=new Date().getFullYear();
var ageyear=nowyear-inputyear
var agemonth=Math.abs(nowmonth-inputmonth)
var agedate=Math.abs(nowdate-inputdate)
let output=document.querySelector(".output");
console.log(ageyear)
output.style.backdropFilter="blur(23px)"

output.style.color="white"
output.style.opacity="0.9"
if(isNaN(ageyear) ||isNaN(agemonth) ||isNaN(agedate)){
    output.innerHTML="<center><h1>Invalid date</h1></center>"
}
else if(ageyear==0 && nowmonth-inputmonth<=0 ){
    
    output.innerHTML="<center><h1>Invalid date</h1></center>"
}
else{
output.innerHTML="<center><h2>Your are "+ageyear+" Years "+agemonth+" Months "+agedate+" Days Old </h2></center><br>"+
"<center><h3>Your birthday🎂 in   <span style='background-color:white;color:black;'> "+agemonth+ " Months "+agedate+" Days</span></h2></center>"
// console.log(Math.abs(nowdate-inputdate) +" "+Math.abs(inputmonth-nowmonth)+" "+nowyear-inputyear)
}

        }