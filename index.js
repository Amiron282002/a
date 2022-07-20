
let count = document.querySelector("#buttonCountNumber");
let plus =document.querySelector("#buttonCountPlus")
let minus= document.querySelector("#buttonCountMinus")
plus.onclick = function() {
    let countPlus = count.innerHTML;
    if(+countPlus ){
      count.innerHTML++;
      let countPlus = count.innerHTML;
  }
}
  minus.onclick = function() {
    let countMinus = count.innerHTML;
  if(+countMinus >= 2){
    count.innerHTML--;
    let countMinus = count.innerHTML;
      

    }
}