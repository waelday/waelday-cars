/**
    * @description      : 
    * @author           : waeld
    * @group            : 
    * @created          : 15/06/2024 - 15:01:40
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2024
    * - Author          : waeld
    * - Modification    : 
**/
let codes = document.getElementById("codes");
let play = document.getElementById("play");
let remove = document.getElementById("remove");
let result = document.getElementById("result");

play.onclick = ()=>{
    result.innerHTML = codes.value;
    localStorage.setItem("RESULT" , codes.value);
};
remove.onclick = ()=>{
    result.innerHTML = "";
    
}

onload = ()=>{
   codes.value =  localStorage.getItem("RESULT");
   result.innerHTML = codes.value;
}