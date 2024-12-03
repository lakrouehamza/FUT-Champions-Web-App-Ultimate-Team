
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

let position ={position:[], RW : ['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],LW: ['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],ST :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],
    CDM :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],CM :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],LM :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],RM :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],
    CB :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'], LB :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'], RB :['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],GK : ['DIV', 'HAN', 'KIC', 'REF', 'SPD', 'POS']};

document.getElementById('position').addEventListener('change',function(){
    // console.log(position[document.getElementById('position').value]);
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
    console.log(document.querySelector('#competence'));


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
            photo:formation[9].value,
            club :formation[10].value,
            note :formation[11].value,
            play:false
        }
        listePlayer.push(objectJouer);
        ajoute();
    } 
    
    // console.log(document.getElementById('position').value.trim());
});

// console.log(document.getElementById('position').value.trim());

function ajoute(){
    listePlayer.forEach(element =>{
        document.querySelectorAll('cardAjout').forEach(card=>{
            if(element.position==card.parentNode.id){
            // if(card.innerHTML=``){
            let div1=document.createElement('div');
            div1.classList.add('col-start-2','col-span-2','row-start-2','row-span-5','bg-white/15','rounded-t-[4px]','flex','flex-col','items-center');
            card.appendChild(div1);
            let span1=document.createElement(span);
            span1.textContent=element.note;
            div1.appendChild(span1);
            let span2=document.createElement(span);
            span2.classList.add('mt-[-8px]','text-[10px]');
            span2.textContent=element.position;
            div1.appendChild(span2);
            let hr =document.createElement('hr');
            hr.classList.add('border-red-500','z-10','w-8/12');
            div1.appendChild(hr);
            let img1=document.createElement('img');
            img1.classList.add('mt-[2px]','mb-[2px]','w-9/12');
            img1.src=element.nationalite;
            let img2=document.createElement('img');
            img2.classList.add('mt-[2px]','w-9/12');
            img2.src=element.club;
            card.appendChild(img2);
            let img3=document.createElement('img');
            img3.classList.add('w-full','bg-white/70','col-span-5','col-start-4','row-start-2','row-span-5 ','rounded-tl-[30px]','rounded-br-[30px] ','h-[79px]','mt-[2px]');
            img3.src=element.photo;
            card.appendChild(img3);
            let span3 =document.createElement(span);
            span3.classList.add('col-span-5','col-start-4','row-start-6','row-span-1','text-[10px]','text-center','text-black','bg-white/30','rounded-[5px]','z-10');
            span3.textContent=element.name;
            card.appendChild(span3);
            let hr2 =document.createElement('hr');
            hr2.classList.add('z-10','border-red-500','row-start-7','col-span-7','col-start-2');
            card.appendChild(hr2);
            let table = document.createElement('table');
            table.classList.add('bg-white/20','row-start-7','row-span-2','col-start-2','col-span-7','text-[6px]','rounded-tr-[10px]','rounded-bl-[10px]','font-[Latin]');
            card.appendChild(table);
            let tr1 = document.createElement('tr');
            let tr2 = document.createElement('tr');
            table.appendChild(tr1);
            table.appendChild(tr2);
            
            th11 =document.createComment('th');
            th12 =document.createComment('th');
            th13 =document.createComment('th');
            th14 =document.createComment('th');
            th15 =document.createComment('th');
            th16 =document.createComment('th');
            th21 =document.createComment('th');
            th22 =document.createComment('th');
            th23 =document.createComment('th');
            th24 =document.createComment('th');
            th25 =document.createComment('th');
            th26 =document.createComment('th');
            tr1.appendChild(th11);
            tr1.appendChild(th12);
            tr1.appendChild(th13);
            tr1.appendChild(th14);
            tr1.appendChild(th15);
            tr1.appendChild(th16);
            tr1.appendChild(th21);
            tr2.appendChild(tr22);
            tr2.appendChild(tr23);
            tr2.appendChild(tr24);
            tr2.appendChild(tr25);
            tr2.appendChild(tr26);
            th41.classList.add('border-l-[0.5px]','border-red-500','rounded-tl-[10px]');
            th42.classList.add('border-l-[1px]','border-red-500');
            let compt=position[element.position];
            th11.textContent=compt[0];
            th12.textContent=compt[1];
            th13.textContent=compt[2];
            th14.textContent=compt[3];
            th15.textContent=compt[4];
            th16.textContent=compt[5];
            th21.textContent=comp1;
            th22.textContent=comp2;
            th23.textContent=comp3;
            th24.textContent=comp4;
            th15.textContent=comp5;
            th26.textContent=comp6;
            // }
                console.log(div1);
            
        }

        });
    });
}

{/* <div class="border-2 border-blue-500 flex scale-[0.75]  " style=" perspective: 500px;" >
<div class="grid grid-rows-9 grid-cols-9  bg-[url(./assets/img/noir.png)] bg-cover w-[100px]  h-[154px] text-[#FFED00] font-[Modern] cardAjout ">

    <div class=" col-start-2  col-span-2 row-start-2 row-span-5 bg-white/15  rounded-t-[4px] r flex flex-col items-center">
        <span>90</span>
        <span class="mt-[-8px] text-[10px]">cmp</span>
        <hr class="border-red-500 z-10 w-8/12">
        <img class="mt-[2px] mb-[2px] w-9/12" src="./assets/img/ar.webp" alt="">
        <hr class="border-red-500 z-10 w-8/12">
        <img class="mt-[2px] w-9/12" src="./assets/img/ar.webp" alt="">
    </div>
    <img src="./assets/img/jeun.png" alt="" srcset="" class="w-[10px] col-start-5 row-start-1 mt-1">
    <img  src="./assets/img/amine-removebg-preview.png" class=" w-full bg-white/70 col-span-5 col-start-4 row-start-2  row-span-5   rounded-tl-[30px] rounded-br-[30px]  h-[79px] mt-[2px]    ">
    <span class="col-span-5 col-start-4 row-start-6 row-span-1 text-[10px]  text-center text-black  bg-white/30 rounded-[5px] z-10" style="font-family: Roboto;">C.Ronaldo</span>
    <hr class=" z-10 border-red-500 row-start-7  col-span-7 col-start-2">
    <table class="bg-white/20 row-start-7 row-span-2 col-start-2 col-span-7 text-[6px]  rounded-tr-[10px] rounded-bl-[10px] font-[Latin]">
        <tr>
            <th>pac</th>
            <th>pac</th>
            <th>pac</th>
            <th class="border-l-[0.5px]  border-red-500 rounded-tl-[10px] ">pac</th>
            <th>pac</th>
            <th>pac</th>
        </tr>
        <tr >
            <th>90</th>
            <th>90</th>
            <th>90</th>
            <th class="border-l-[1px] border-red-500">90</th>
            <th>90</th>
            <th>90</th>
        </tr>
    </table>
</div>

</div> */}