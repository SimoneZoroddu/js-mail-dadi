let your_number = Math.floor((Math.random() * 6) + 1);
let my_number = Math.floor((Math.random() * 6) + 1);


alert(`Your Number ${your_number}`);
alert(`My Number ${my_number}`);

if (your_number > my_number) {
    alert('You win')
} else if (your_number < my_number) {
    alert('You Lose')
} else {
    alert('Patta')
}