
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
// console
card.parentNode.querySelector('#modifyCard').querySelector('img[src="./assets/img/edit.png"]').addEventListener('click', function(){
   


document.getElementById('modalEdit').classList.remove('hidden');

let lesInput = document.getElementById('modalEdit').querySelectorAll('input , select');
let liste =card.querySelectorAll('span,img,th');
lesInput[0].value=liste[5].textContent;
lesInput[1].value=liste[1].textContent;
lesInput[2].value=liste[12].textContent;
lesInput[3].value=liste[13].textContent;
lesInput[4].value=liste[14].textContent;
lesInput[5].value=liste[15].textContent;
lesInput[6].value=liste[16].textContent;
lesInput[7].value=liste[17].textContent;
lesInput[8].value=liste[2].src;
lesInput[9].value=liste[4].src;
lesInput[10].value=liste[3].src;
lesInput[11].value=liste[0].textContent;
 
document.getElementById('submitEdit').addEventListener('click',function(){

        liste[5].textContent=lesInput[0].value;
        liste[1].textContent=lesInput[1].value;
        liste[12].textContent=lesInput[2].value;
        liste[13].textContent=lesInput[3].value;
        liste[14].textContent=lesInput[4].value;
        liste[15].textContent=lesInput[5].value;
        liste[16].textContent=lesInput[6].value;
        liste[17].textContent=lesInput[7].value;
        liste[2].src=lesInput[8].value;
        liste[4].src=lesInput[9].value;
        liste[3].src=lesInput[10].value;
        liste[0].textContent=lesInput[11].value;

    document.getElementById('modalEdit').classList.add('hidden');

    });


});

card.parentNode.querySelector('#modifyCard').querySelector('img[src="./assets/img/change.png"]').addEventListener('click', function(){
    // console.log('change');
});

card.parentNode.querySelector('#modifyCard').querySelector('img[src="./assets/img/de.webp"]').addEventListener('click', function(){
    card.innerHTML='';
    card.parentNode.querySelector('#modifyCard').classList.add('hidden');
});
});
function compar(card ,object){
    let listeformation =card.querySelectorAll('span');
    if(object.note !== listeformation[0].textContent.trim() && object.position !== listeformation[1].textContent.trim() && object.name !== listeformation[2].textContent.trim())
        return true;
    return false;
}

function fermeModal(){
    if(document.getElementById('modal').classList.contains('hidden')){
        document.getElementById('modal').classList.remove('hidden');
    }
    else 
        document.getElementById('modal').classList.add('hidden');
}
function fermeModalED(){
    document.getElementById('modalEdit').classList.toggle('hidden');
}

var position ={position:[], RW : ['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],LW: ['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],ST :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],
    CDM :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],CMR :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],CML :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],LM :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],RM :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],
    CBL :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'], CBR :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'], LB :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'], RB :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],GK : ['DIV', 'HAN', 'KIC', 'REF', 'SPD', 'POS']};

document.getElementById('position').addEventListener('change',function(){
    console.log(position[document.getElementById('position').value]);
    if(document.getElementById('position').value=="position"){
        document.getElementById('competence').classList.add('hidden');
    }else{
        document.getElementById('competence').classList.remove('hidden');
    }
    let trTitre =document.createElement('tr'); 
    let trInput =document.createElement('tr'); 
       document.querySelector('#competence').innerHTML='';    
       document.querySelector('#competence').appendChild(trTitre);
       document.querySelector('#competence').appendChild(trInput);
       let i=0;
       position[document.getElementById('position').value].forEach(element => {
        let thTitre =document.createElement('th');
        let thInput =document.createElement('th');
        let label = document.createElement('label');
        let input = document.createElement('input');

        label.classList.add('dark:text-white');
        input.classList.add('w-14');
        input.value="0";
        input.type="number";
        document.querySelectorAll('#competence tr')[0].appendChild(thTitre);
        label.textContent=element;
        label.innerHTML+='<span class="text-red-600 inline-block p-1 text-sm">*</span>';
        document.querySelectorAll('#competence tr')[0].querySelectorAll('th')[i].appendChild(label);

        document.querySelectorAll('#competence tr')[1].appendChild(thInput);
        input.id=element;
        document.querySelectorAll('#competence tr ')[1].querySelectorAll('th')[i++].appendChild(input);
    });
    // console.log(document.querySelector('#competence'));


});

let listePlayer =[];

const objectReject = {
    name: /^[a-zA-Z\s]{3,10}$/
};
// console.log(document.getElementById('formAdd'));

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    let valide = true; 
    document.getElementById('formAdd').querySelectorAll('input').forEach(inputs =>{
    if (inputs.value=="" ||inputs.value>100|| inputs.value<1 ) {
        inputs.style.border = "solid 2px red";
        let valide = false; 
    } else {
        inputs.style.border = "solid 2px green";
        valide = true;
    }
    });
    
    document.getElementById('formAdd').querySelectorAll('select').forEach(selects =>{
        if (selects.value=="position" || selects.value=="nationalite" ) {
            selects.style.border = "solid 2px red";
             valide = false; 
        } else {
            selects.style.border = "solid 2px green";
            valide = true; ;
        }
        });

    if (objectReject.name.test(document.getElementById('name').value.trim())) {
        document.getElementById('name').style.border = "solid 2px green";
        valide =true;
    } else {
        document.getElementById('name').style.border = "solid 2px red";
        valide = false; 
    }
    if (valide) { 
        let formation =document.querySelectorAll('form select,form input');
        // console.log(formation);
       
        let objectJouer ={
            name :formation[0].value,
            position:formation[1].value,
            comp1:formation[2].value,
            comp2:formation[3].value,
            comp3:formation[4].value,
            comp4:formation[5].value,
            comp5:formation[6].value,
            comp6:formation[7].value,
            nationalite:`https://cdn.sofifa.net/flags/${formation[8].value.toLowerCase().substring(0,2)}.png`,
            photo: formation[9]?.files && formation[9].files[0] ? URL.createObjectURL(formation[9].files[0]): '', 
            club: formation[10]?.files && formation[10].files[0] ? URL.createObjectURL(formation[10].files[0]) : '',
            note :formation[11].value
        }
        // listePlayer.push(objectJouer);
        
        ajoute(objectJouer);
    } 
     
});
 

function ajoute(player) {
    let test= true;
        // listePlayer.forEach(player => {
    document.querySelectorAll('.cardAjout').forEach(card => {
            // console.log(listePlayer);
            if (player.position === card.parentNode.id) {
                let pos = position[player.position];
                // console.log(listePlayer);
                let formation = `
                    <div class="col-start-2 col-span-2 row-start-2 row-span-5 bg-white/15 rounded-t-[4px] r flex flex-col items-center">
                        <span>${player.note}</span>
                        <span class="mt-[-8px] text-[10px] ">${player.position}</span>
                        <hr class="border-red-500 z-10 w-8/12">
                        <img class="mt-[2px] mb-[2px] w-9/12" src="${player.nationalite}" alt="Player Nationality">
                        <hr class="border-red-500 z-10 w-8/12">
                        <img class="mt-[2px] w-9/12" src="${player.club}"  >
                    </div>
                    <img src="${player.photo}" class="w-full bg-white/70 col-span-5 col-start-4 row-start-2 row-span-5 rounded-tl-[30px] rounded-br-[30px] h-[79px] mt-[2px]">
                    <span class="col-span-5 col-start-4 row-start-6 row-span-1 text-[10px] text-center text-black bg-white/30 rounded-[5px] z-10" style="font-family: Roboto;">${player.name}</span>
                    <hr class="z-10 border-red-500 row-start-7 col-span-7 col-start-2">
                    <table class="bg-white/20 row-start-7 row-span-2 col-start-2 col-span-7 text-[6px] rounded-tr-[10px] rounded-bl-[10px] font-[Latin]">
                        <tr>
                            <th>${pos[0]}</th>
                            <th>${pos[1]}</th>
                            <th>${pos[2]}</th>
                            <th class="border-l-[0.5px] border-red-500 rounded-tl-[10px]">${pos[3]}</th>
                            <th>${pos[4]}</th>
                            <th>${pos[5]}</th>
                        </tr>
                        <tr>
                            <th>${player.comp1}</th>
                            <th>${player.comp2}</th>
                            <th>${player.comp3}</th>
                            <th class="border-l-[1px] border-red-500">${player.comp4}</th>
                            <th>${player.comp5}</th>
                            <th>${player.comp6}</th>
                        </tr>
                    </table>
                `;
                
                if (card.innerHTML.trim() === '') {
                    card.innerHTML = formation;
                } else {
                    
                    document.querySelectorAll('.cardChange').forEach(cardChange => {
                        if (cardChange.innerHTML.trim() === '') {
                            if(test){
                            cardChange.innerHTML = formation;
                            test=false;
                            }
                        }
                    });
                }
            }
        });
    // });
    

    let liste = document.querySelectorAll('.cardAjout');
    let index = 0;
    for(let i = 0 ;i <liste.length ; i++){
        if(liste.innerHTML!='')
            index++;
    }
    // if(index>=11)
        // alert('Le onze de départ est complet');
}



