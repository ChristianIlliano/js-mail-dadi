// ARRAY
const arrayEmail = ["example@gmail.com", "pippo@gmail.com", "pluto@gmail.com"]

//BARRA RICERCA
const sendBtnElem = document.getElementById("send-btn"); // object | null
// Variabili
let stringMail;
let result = false;
// eventlistener Click
sendBtnElem.addEventListener("click", function(){
    
    // save input mail to variable
    stringMail = document.getElementById("email").value; //string
    result = false;
//LOGICA
    // CONTROLLO SE LA MAIL CHE HO INSERITO è NELL'ARRAY
    for(let i = 0; i <= arrayEmail.length && result === false; i++) {
        // if input mail is the same result = true;
        if(stringMail === arrayEmail[i] ){
            result = true;
        }
    }
// OUTPUT
    if(result === true){
        document.getElementById("result").innerHTML = "Registrato";
    } else {
        document.getElementById("result").innerHTML = "Non Registrato";
        
    }
})
