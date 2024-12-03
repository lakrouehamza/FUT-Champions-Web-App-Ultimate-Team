
let lesCards =document.getElementById('tirane').querySelectorAll('.cardAjout');
lesCards.forEach(card => {
card.addEventListener('click',function(){
if(card.hasChildNodes()){   
    if(card.parentNode.querySelector('#modifyCard').classList.contains('hidden'))
        card.parentNode.querySelector('#modifyCard').classList.remove('hidden');
    else 
        card.parentNode.querySelector('#modifyCard').classList.add('hidden');
}
});
card.parentNode.querySelector('#modifyCard').querySelector('img[src="./assets/img/edit.png"]').addEventListener('click', function(){
    console.log('edit')
});

card.parentNode.querySelector('#modifyCard').querySelector('img[src="./assets/img/change.png"]').addEventListener('click', function(){
    console.log('change')
});

card.parentNode.querySelector('#modifyCard').querySelector('img[src="./assets/img/de.webp"]').addEventListener('click', function(){
    console.log('delete')
});
});

function fermeModal(){
    if(document.getElementById('modal').classList.contains('hidden')){
        document.getElementById('modal').classList.remove('hidden');
    }
    else 
        document.getElementById('modal').classList.add('hidden');
}

