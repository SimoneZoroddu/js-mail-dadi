//CREO 2 NUMERI RANDOM 1 PER LUI E 1 PER ME

let your_number = Math.floor((Math.random() * 6) + 1);
let my_number = Math.floor((Math.random() * 6) + 1);

//GLI COMUNICO IL MIO E IL SUO NUMERO
alert(`Your Number ${your_number}`);
alert(`My Number ${my_number}`);

// CONTROLLO QUALE IL MAGGIORE E NEL CASO COMUNICO CHE HA PERSO VINTO O PATTA
if (your_number > my_number) {
    alert('You win')
} else if (your_number < my_number) {
    alert('You Lose')
} else {
    alert('Patta')
}