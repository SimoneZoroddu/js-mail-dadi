const email = ['francesco@gmail.com', 'giacomo@gmail.com', 'marco@gmail.com', 'pietro@gmail.com', 'mario@gmail.com']

// console.log(email);

const your_email = prompt('Verifica tramite email se sei invitato, inserisci la tua email');

// console.log(your_email);

// if (email.indexOf(your_email)) {
//     alert('Non sei invitato alla mia festa');    
// } else {
//     alert('Sei invitato alla mia festa');
// }

let accept = 'Non sei invitato alla mia festa'

for (let i = 0; i < email.length; i++) {
    const element = email[i];
    if (your_email == element) {
        accept =  'Sei invitato alla mia festa';
        break
    }
}


alert(accept);

