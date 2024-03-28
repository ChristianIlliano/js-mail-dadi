//BTN
const sendBtnElem = document.getElementById("send-btn"); // object | null

// VARIABILI
let dadiPc = 0;
let dadiUser = 0;
let result = 0

// eventlistener Click
sendBtnElem.addEventListener("click", function(){
    // RACCOLTA DATI
    dadiPc = Math.floor(Math.random() * 6 + 1);
    dadiUser = Math.floor(Math.random() * 6 + 1);
    console.log(dadiPc, "dadi pc");
    console.log(dadiUser, "dadi user");

    if(dadiPc > dadiUser){
        result = 1;
    } else if(dadiUser > dadiPc) {
        result = 2;
    } else {
        result = 0;
    }
    
    document.getElementById("dadi-pc").innerHTML = "ENEMY  " + dadiPc;
    document.getElementById("dadi-user").innerHTML = "KING-DICE  " + dadiUser;
// OUTPUT
    if(result === 1){
        document.getElementById("result").innerHTML = "Hai perso"
    } else if(result === 2){
        document.getElementById("result").innerHTML = "Hai vinto"
    } else{
        document.getElementById("result").innerHTML = "PAREGGIO"
    }

})