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
// }

var equipe =[];


 
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

    lesCards.forEach(element =>{
        equipe.forEach(jouer =>{
    if(element.hasChildNodes()){
    console.log("ajoute a changement");
    }
    else
    if(element.id == jouer.position){

        console.log(jouer);
        console.log("ajoute a tirane ");
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let spanPosition = document.createElement('span');
        let span1 = document.createElement('span');
        let span2 = document.createElement('span');
        let table = document.createElement('table');
        let trTitle = document.createElement('tr');
        let trValue= document.createElement('tr');
        // let imgclup = document.createElement('img');
        let imgJoure = document.createElement('img');
        div2.classList.add('col-start-1','col-end-3','row-start-1','row-end-6','flex','flex-col','justify-between');
        span1.classList.add('absolute','mt-2');
        span2.classList.add('absolute','mt-7','text-[10px]');
        // imgJoure.classList.add('col-start-3','col-end-13','row-start-2','row-end-13');
        div3.classList.add('rounded-xl','col-start-1','col-end-10','row-start-6','row-end-9','text-[6px]','flex','justify-center','items-center','bg-white/30');
        spanPosition.classList.add('col-start-5','col-end-5','row-start-9','row-end-9','text-[9px]','mt-[-5px]');
        imgJoure.classList.add('col-start-3','col-end-13','row-start-2','row-end-13');
        element.appendChild(div2);
        element.appendChild(imgJoure);
        element.appendChild(div3);
        element.appendChild(spanPosition);
        div2.appendChild(span1);
        div2.appendChild(span2);
        div3.appendChild(table);
        table.appendChild(trTitle);
        table.appendChild(trValue);
        for(let i = 0 ;i<6;i++){
            let thTitre = document.createElement('th');
            let thValue = document.createElement('th');
            trTitle.appendChild(thTitre);
            trValue.appendChild(thValue);
            trTitle.innerText=' fr ';
            trTitle.innerText= 'fr ';
        }

        
    }
    });
    });
}
afichage();


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
    if(selects.value == "position" || selects.value=="nationality"){
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
equipe.push(objetJoueur);
// console.log(objetJoueur);
afichage();
}
});
