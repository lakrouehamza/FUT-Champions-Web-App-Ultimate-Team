
let lesCards =document.getElementById('tirane').querySelectorAll('.cardAjout');
lesCards.forEach(card => {
card.addEventListener('click',function(){
if(card.hasChildNodes()){
    console.log(card.parentNode.querySelector('#modifyCard'));    
    if(card.parentNode.querySelector('#modifyCard').classList.contains('hidden'))
        card.parentNode.querySelector('#modifyCard').classList.remove('hidden');
    else 
        card.parentNode.querySelector('#modifyCard').classList.add('hidden');
}

});
});


