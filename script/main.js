let txtNum = document.getElementById("txtNum");
let display = document.getElementById("display");

function CheckNum (){
   if (txtNum.value %2 == 0){
    display.innerHTML = "The Number is Even"
   }

   if (txtNum.value %2 !==0) {
    display.innerHTML = "The Number is Odd"
   }
   else if (txtNum.value =="")
    display.innerHTML = "Invalid Number"

}
