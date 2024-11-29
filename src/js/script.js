// document.getElementById('formation').onclick =function (){
// let liste = document.getElementById('tirane').querySelectorAll('div');

// let jouer = liste[0].querySelectorAll('img') || [];
// let jouerdeuem = liste[1].querySelectorAll('img');
// if(jouer.length>0){ 
//     liste[1].appendChild(jouer[0]);
//     liste[2].appendChild(jouerdeuem[1]);
//     // liste[0].removeChild;
// }
// else{
//     liste[0].appendChild(liste[1].querySelectorAll('img')[1]);
//     liste[1].appendChild(liste[2].querySelectorAll('img')[2]);
//     // liste[2].querySelector('img').remove();
    // console.log(liste);
// }
// }//Club , DEF , DRI, PAC, PAS, PHY,SHO, name,nationality,photo,position 

document.getElementById('buttonAdd').addEventListener('click',function(){
    if(document.getElementById('popup').classList.contains('hidden'))
        document.getElementById('popup').classList.remove('hidden');
    else 
    document.getElementById('popup').classList.add('hidden');
});
var equipe =[];

function ferme(){
    
    document.getElementById('popup').classList.add('hidden');
}
 
let position = { position:[], RW : ['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],LW: ['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],ST :['PAC' , 'SHO' , 'PAS' , 'DRI' , 'DEF' , 'PHY'],
                CDM :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],CM :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],LM :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],RM :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],
                CB :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'], LB :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'], RB : ['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],GK : ['DIV', 'HAN', 'KIC', 'REF', 'SPD', 'POS']};
                


 document.getElementById('containerCompetence').classList.add('hidden');
 document.getElementById('position').addEventListener('change', function(){ 
    // console.log(position[document.getElementById('position').value]);
    if(document.getElementById('position').value=="position"){
        document.getElementById('containerCompetence').classList.add('hidden');
    }else{
        document.getElementById('containerCompetence').classList.remove('hidden');
    }
    let tr =document.createElement('tr'); 
    let trInput =document.createElement('tr'); 
       tr.classList.add("dark:text-white");
       document.querySelector('#competence').innerHTML = '';
       document.getElementById('competence').appendChild(tr);
       document.getElementById('competence').appendChild(trInput);
       let i=0;
       position[document.getElementById('position').value].forEach(element => {
        let th =document.createElement('th');
        let thInput =document.createElement('th');
        let label = document.createElement('label');
        let input = document.createElement('input');
        label.classList.add('dark:text-white');
        input.classList.add('w-11');
        input.value="0";
        input.type="number";
        document.querySelectorAll('#competence tr')[0].appendChild(th);
        label.textContent=element;
        // label.for
        document.querySelectorAll('#competence tr')[0].querySelectorAll('th')[i].appendChild(label);
        document.querySelectorAll('#competence tr')[1].appendChild(thInput);
        input.id=element;
        document.querySelectorAll('#competence tr ')[1].querySelectorAll('th')[i++].appendChild(input);
    }

       );
});

function afichage(){

    const lesCards= document.querySelectorAll('.carte');
    const changement =document.getElementById('changement');

    changement.innerHTML='';
    lesCards.forEach(element =>{
        equipe.forEach(jouer =>{
            if(element.id == jouer.position){
                let div1 = document.createElement('div');
                div1.classList.add('relative', 'w-[100px]', 'h-[180px]', 'bg-cover', 'bg-center', 'transition-all', 'ease-in');
                div1.style.backgroundImage = "url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')";
                
                let div2 = document.createElement('div');
                div2.classList.add('relative', 'flex', 'text-[#e9cc74]', 'px-[0.3rem]');

                let divUpper = document.createElement('div');
                divUpper.classList.add('absolute', 'py-[0.8rem_0]', 'text-xs', 'uppercase', 'font-light');

                let playerRating = document.createElement('div');
                playerRating.classList.add('text-[1rem]', 'mt-5');
                playerRating.textContent = jouer.rating;
                divUpper.appendChild(playerRating);
                let playerPosition = document.createElement('div');
                playerPosition.textContent = jouer.position;
                divUpper.appendChild(playerPosition);
                let playerFlag = document.createElement('div');
                playerFlag.classList.add('block');
                let flagImg = document.createElement('img');
                flagImg.src = jouer.flag;
                flagImg.alt = jouer.nationality;
                flagImg.classList.add('w-[1rem]', 'h-[14px]', 'object-contain');
                playerFlag.appendChild(flagImg);
                divUpper.appendChild(playerFlag);
                let playerLogo = document.createElement('div');
                playerLogo.classList.add('block');
                let logoImg = document.createElement('img');
                logoImg.src = jouer.logo;
                logoImg.alt = jouer.club;
                logoImg.classList.add('w-[1rem]', 'h-[14px]', 'object-contain');
                playerLogo.appendChild(logoImg);
                divUpper.appendChild(playerLogo);
                let playerPhotoDiv = document.createElement('div');
                playerPhotoDiv.classList.add('w-[70px]', 'h-[80px]', 'mx-auto', 'overflow-hidden');
                let playerPhoto = document.createElement('img');
                playerPhoto.src = jouer.photo;
                playerPhoto.alt = jouer.name;
                playerPhoto.classList.add('w-full', 'h-full', 'object-contain', 'relative', 'right-[-1rem]', 'bottom-0');
                playerPhotoDiv.appendChild(playerPhoto);
                
                div2.appendChild(divUpper);
                div2.appendChild(playerPhotoDiv);
                let divPosition = document.createElement('div');
                divPosition.classList.add('w-full', 'flex', 'justify-around', 'text-[#88e635]', 'text-[0.7rem]', 'font-bold', 'uppercase');
                let positionSpan = document.createElement('span');
                positionSpan.classList.add('ml-[0.4rem]', 'text-shadow-lg');
                positionSpan.textContent = jouer.position;
                divPosition.appendChild(positionSpan);
                let divDetails = document.createElement('div');
                divDetails.classList.add('relative');
                
                let playerNameDiv = document.createElement('div');
                playerNameDiv.classList.add('text-[#e9cc74]', 'w-[90%]', 'mx-auto');
                let playerName = document.createElement('div');
                playerName.classList.add('text-center', 'w-[100%]', 'text-[0.6rem]', 'uppercase', 'border-b-2', 'border-[#e9cc74]/[0.1]');
                let nameSpan = document.createElement('span');
                nameSpan.classList.add('block', 'text-shadow-lg');
                nameSpan.textContent = jouer.name;
                playerName.appendChild(nameSpan);
                playerNameDiv.appendChild(playerName);
                
                let statsDiv = document.createElement('div');
                statsDiv.classList.add('flex', 'justify-center');
                
                let statsLeft = document.createElement('div');
                statsLeft.classList.add('pr-[1.5rem]', 'border-r-2', 'border-[#e9cc74]/[0.1]');
                
                ['pace', 'shooting', 'passing'].forEach((statKey) => {
                    let statDiv = document.createElement('div');
                    statDiv.classList.add('flex', 'items-center', 'text-[0.5rem]', 'uppercase');
                    let statValue = document.createElement('span');
                    statValue.classList.add('font-bold', 'mr-[0.3rem]');
                    statValue.textContent = jouer[statKey];
                    let statLabel = document.createElement('span');
                    statLabel.classList.add('font-light');
                    statLabel.textContent = statKey.toUpperCase().slice(0, 3);
                    statDiv.appendChild(statValue);
                    statDiv.appendChild(statLabel);
                    statsLeft.appendChild(statDiv);
                });
                
                let statsRight = document.createElement('div');
                ['dribbling', 'defending', 'physical'].forEach((statKey) => {
                    let statDiv = document.createElement('div');
                    statDiv.classList.add('flex', 'items-center', 'text-[0.5rem]', 'uppercase');
                    let statValue = document.createElement('span');
                    statValue.classList.add('font-bold', 'mr-[0.3rem]');
                    statValue.textContent = jouer[statKey];
                    let statLabel = document.createElement('span');
                    statLabel.classList.add('font-light');
                    statLabel.textContent = statKey.toUpperCase().slice(0, 3);
                    statDiv.appendChild(statValue);
                    statDiv.appendChild(statLabel);
                    statsRight.appendChild(statDiv);
                });
                
                statsDiv.appendChild(statsLeft);
                statsDiv.appendChild(statsRight);
                playerNameDiv.appendChild(statsDiv);
                
                divDetails.appendChild(playerNameDiv);
                
                div1.appendChild(div2);
                div1.appendChild(divPosition);
                div1.appendChild(divDetails);
                
                if (element.hasChildNodes()) {
                    changement.appendChild(div1);
                } else {
                    element.appendChild(div1);
                }
                
}
    });
    });
}
afichage();

function  testejour( jouer){
    equipe.forEach(elment => {
        if(elment.name === jouer.name){
            return true;
        }
    });
return false;

}
document.getElementById('formAjouteJour').addEventListener('submit',(e)=>{
    e.preventDefault();
let valide = true;
document.querySelectorAll(" form input").forEach(inputs=>{
    if(inputs.value=="" || +inputs.value<=0 || inputs.value>100 ){
        inputs.style.border="solid red 2px";
        valide=false;
    }
    else 
    inputs.style.border="solid green 2px";
}

);

document.querySelectorAll("form select").forEach(selects =>{
    if(selects.value == "position"){
        selects.style.border="solid red 2px";
        valide =false;
    }
    else 
        selects.style.border="solid green 2px";
})
if(valide){
    let objetJoueur = {};
document.querySelectorAll("form input ,form select").forEach(element=>{
    let attribut =element.id;
    objetJoueur[attribut] = element.value;
});


if(!testejour(objetJoueur)){
equipe.push(objetJoueur);
console.log(objetJoueur);
afichage();
}
}


});


document.querySelectorAll('.carte').forEach(card =>{
    card.addEventListener('click',function(){
      
    if(card.hasChildNodes()){
        if(!card.parentNode.querySelector('#containeEdit')){
        let supprime = document.createElement('img');
        let edit = document.createElement('img');
        edit.id="edit";
        supprime.id='supprime';
        let containeEdit = document.createElement('div');
        containeEdit.id='containeEdit';
        // containeEdit.classList.add('flex','justify-between','col-start-1','col-end-12','row-start-1','row-end-1');
        containeEdit.classList.add('flex','justify-between','w-[100px]');
        containeEdit.appendChild(edit);
        containeEdit.appendChild(supprime);
        supprime.classList.add('bg-red-500','hover:bg-black','rounded-[30px]','w-[20px]');
        edit.classList.add('bg-blue-700','hover:bg-green-500','rounded-[40px]','w-[20px]');
        supprime.src="./../../assets/img/delete.png";
        edit.src="./../../assets/img/edit.png";
        console.log("supprime edete ");
        card.parentNode.insertBefore(containeEdit,card);


// card.addEventListener('click',function(){
//     if(card.parentNode.querySelector('#containeEdit').classList.contains('hidden')){
//         card.parentNode.querySelector('#containeEdit').classList.remove('hidden');
//     }
//     else 
//     card.parentNode.querySelector('#containeEdit').classList.add('hidden');
// }
// );
        
        }
    }
    else {
        document.getElementById('popup').classList.remove('hidden');
        document.getElementById('position').value=card.id;
        document.getElementById('position').disabled="false";
    }
});



});


// card.getElementById('edit').addEventListener('click',function(){
//     document.getElementById('popup').classList.remove('hidden');
//     // let listeInput = document.querySelectorAll('form input','form select');
//     // let listeFormationCard =document.querySelector()
// });