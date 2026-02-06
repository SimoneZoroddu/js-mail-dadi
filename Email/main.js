// CREO ARRAY CON VARIE EMAIL DI INVITATI

const email = ['francesco@gmail.com', 'giacomo@gmail.com', 'marco@gmail.com', 'pietro@gmail.com', 'mario@gmail.com']

// VERIFICO CHE FUNZIONA
// console.log(email);

// CHIEDO EMAIL ALLA PERSONA
const your_email = prompt('Verifica tramite email se sei invitato, inserisci la tua email');

// VERIFICO CHE FUNZIONA
// console.log(your_email);

//CONTROLLO SE L EMAIL DELLA PERSONA FA PARTE DELLA LISTA DI EMAIL NELL ARRAY -1 (FALSO, NON TROVATO) 1 (VERO, TROVATO)
// let verification = email.indexOf(your_email)

// VERIFICO CHE FUNZIONA
// console.log(verification);

// PASSAGGIO TRAMITE IF ELSE SENZA FOR QUINDI NON CONTROLLANDO 1 A 1 GLI ELEMENTI MA SOLO VERIFICANDO TRAMITE INDEX SE PRESENTE
// if (email.indexOf(your_email)) {
//     alert('Non sei invitato alla mia festa');    
// } else {
//     alert('Sei invitato alla mia festa');
// }

//TRAMITE FOR CONTROLLO OGNI EMAIL E OGNI VOLTA CONTROLLA SE PRESENTE L EMAIL INSERITA DALLA PERSONA, NEL CASO LA TROVA FA DIVENTARE LA VARIABILE GLOBALE CREATA ALL ESTERNO POSITICAMENTE
let accept = false;

for (let i = 0; i < email.length && !accept; i++) {
    const element = email[i];
    if (your_email == element) {
        accept =  true;
    }
}

if (accept) {
    alert('sei invitato'); 
} else {
    alert('non sei invitato');
}


// if (accept == false)
// GLI DO L ESITO ALLA PERSONA
// alert(accept);

// niente brake
// aggiugere booleano e aggiungere un if che controlla i boolean e dice una frase o no