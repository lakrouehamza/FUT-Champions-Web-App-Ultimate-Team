document.getElementById('formation').onclick =function (){
let liste = document.getElementById('tirane').querySelectorAll('div');

let jouer = liste[0].querySelectorAll('img') || [];
let jouerdeuem = liste[1].querySelectorAll('img');
if(jouer.length>0){ 
    liste[1].appendChild(jouer[0]);
    liste[2].appendChild(jouerdeuem[1]);
    // liste[0].removeChild;
}
else{
    liste[0].appendChild(liste[1].querySelectorAll('img')[1]);
    liste[1].appendChild(liste[2].querySelectorAll('img')[2]);
    // liste[2].querySelector('img').remove();
    console.log(liste);
}
}