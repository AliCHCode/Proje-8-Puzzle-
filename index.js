const replace= document.querySelector('.tuffel');
const hintbox= document.querySelector('.hintBox');
const hintnumbers= document.querySelectorAll('.partNumbers');
const placements=document.querySelectorAll('.placementBoxs');
const placed=document.querySelectorAll('.placedBoxs');
const congrate=document.querySelector('.congrateBox');
let i=true;
let abc=null; /*normalde 'SelectedPart' yapıcaktım ama okurken kodu karışık gösteriyor o yüzden basit olan 'a' yı verdim*/

placements.forEach(e=>{
    e.setAttribute(`style`, `top:${Math.floor(Math.random() * 200) + 1}px; left:${Math.floor(Math.random() * 200) + 1}px; z-index:${Math.floor(Math.random() * 9) + 1};`)
    e.addEventListener('click',()=>{
        if(abc!==null){
            abc.style.boxShadow='';
            abc.classList.remove('selected');
        }
        e.style.boxShadow = "0px 0px 10px 2px rgba(255, 255, 0, 0.5)";
        e.classList.add('selected');
        abc = e;
        console.log(e.classList);
    });
});

placed.forEach(f=>{
    f.addEventListener('click',()=>{
        BirdHunter();
        if(abc!==null){
            if(f.classList.length===3){
                let abla=null;
                abla=f.classList[f.classList.length-1];
                f.classList.remove(f.classList[f.classList.length-1]);
                console.log(f.classList);
                placements.forEach(g=>{
                    if(g.classList.contains(abla)){
                        g.style.display='inline-block';
                        g.style.boxShadow='';
                        g.classList.remove('selected');
                    };
                });  
                console.log('Buradasın');   
                f.classList.add(abc.classList[0]);
                if(abc.classList.contains("selected")){
                    abc.style.display='none';
                };
                checkForCount();
                abc=null;
            }
            else{    
            f.classList.add(abc.classList[0]);
            // abc.classList.remove(abc.classList[0]);
            console.log(f.classList);
            console.log(abc.classList);
            console.log('Remain wrong or unplaced Parts:');
                if(abc.classList.contains("selected")){
                    abc.style.display='none';
                };
            checkForCount();
            abc=null;
            };
        }
        else if(f.classList.length===3){
            console.log('Worked');
            let abla=null;
            abla=f.classList[f.classList.length-1];
            f.classList.remove(f.classList[f.classList.length-1]);
            console.log(f.classList);
            placements.forEach(g=>{
                if(g.classList.contains(abla)){
                    g.style.display='inline-block';
                    g.style.boxShadow='';
                    g.classList.remove('selected');
                };
            });  
        };
    });
});

// function check(){
// if(Array.from(placements).every(e=> e.style.display=== 'none')){
//     checkForCount();
// };};

function checkForCount(){
    i = true ;
if(!document.querySelector('.rightOne').classList.contains('leftpieceOne')){
    i=false; 
    console.log('-One');
};
if(!document.querySelector('.rightTwo').classList.contains('leftpieceTwo')){
    i=false;
    console.log('-Two');
};
if(!document.querySelector('.rightThree').classList.contains('leftpieceThree')){
    i=false;
    console.log('-Three');
};
if(!document.querySelector('.rightFour').classList.contains('leftpieceFour')){
    i=false;
    console.log('-Four');
};
if(!document.querySelector('.rightFive').classList.contains('leftpieceFive')){
    i=false;
    console.log('-Five');
};
if(!document.querySelector('.rightSix').classList.contains('leftpieceSix')){
    i=false;
    console.log('-Six');
};
if(!document.querySelector('.rightSeven').classList.contains('leftpieceSeven')){
    i=false;
    console.log('-Seven');
};
if(!document.querySelector('.rightEight').classList.contains('leftpieceEight')){
    i=false;
    console.log('-Eight');
};
if(!document.querySelector('.rightNine').classList.contains('leftpieceNine')){
    i=false;
    console.log('-Nine');
};
if(i===true){
    congrate.style.display='inline-block';
    congrate.style.transition='opacity 2s ease';
    Bird();
    setTimeout(()=>{congrate.style.opacity='1';},1);
    setTimeout(()=>{congrate.style.opacity='0';
        setTimeout(()=>{congrate.style.display='none'; },2000);
    },5000);
};
};

hintbox.style.backgroundColor= 'red';
    hintbox.addEventListener('click', ()=>{
        if(hintbox.style.backgroundColor === 'red'){
            hintbox.style.backgroundColor = 'white';
            hintbox.style.color= 'black';
            console.log('Açıldı');
            hintnumbers.forEach(e=>{
                e.style.display= 'inline-block';
            });
        }
        else{
            console.log('Kapandı');
            hintbox.style.backgroundColor= 'red';
            hintbox.style.color= 'white';
            hintnumbers.forEach(e=>{
                e.style.display= 'none';
            });
        }
    });

    replace.addEventListener('click',()=>{
        console.log('Succes');
        placements.forEach(c=>{
            if(!(c.classList.contains('selected'))){
                    if(abc!==null){
                        console.log('Buradasın');
                        abc.classList.remove('selected');
                        abc.style.boxShadow='';
                        abc=null;
                    };
                c.setAttribute('style',`top:${Math.floor(Math.random() * 200) + 1}px; left:${Math.floor(Math.random() * 200) + 1}px;`)
            };
        });        

    });

    /*Puzzle ın border ını kapatıp açan kısım*/

    Bird=()=>{
        document.querySelector('.rightOne').style.border='0px solid gray';
        document.querySelector('.rightTwo').style.border='0px solid gray';
        document.querySelector('.rightThree').style.border='0px solid gray';
        document.querySelector('.rightFour').style.border='0px solid gray';
        document.querySelector('.rightFive').style.border='0px solid gray';
        document.querySelector('.rightSix').style.border='0px solid gray';
        document.querySelector('.rightSeven').style.border='0px solid gray';
        document.querySelector('.rightEight').style.border='0px solid gray';
        document.querySelector('.rightNine').style.border='0px solid gray';
    };
    BirdHunter=()=>{
        document.querySelector('.rightOne').style.border='1px solid gray';
        document.querySelector('.rightTwo').style.border='1px solid gray';
        document.querySelector('.rightThree').style.border='1px solid gray';
        document.querySelector('.rightFour').style.border='1px solid gray';
        document.querySelector('.rightFive').style.border='1px solid gray';
        document.querySelector('.rightSix').style.border='1px solid gray';
        document.querySelector('.rightSeven').style.border='1px solid gray';
        document.querySelector('.rightEight').style.border='1px solid gray';
        document.querySelector('.rightNine').style.border='1px solid gray';
    };


 /*burası refresh attığında congrate yi direk ekrana verir(Test amaçlı bir kod kısmıdır)*/
 
    // if(i==0){
    //     congrate.style.display='inline-block';
    //     congrate.style.transition='opacity 2s ease';
    //     setTimeout(()=>{congrate.style.opacity='1';},1);

    //     setTimeout(()=>{congrate.style.opacity='0';
    //     setTimeout(()=>{congrate.style.display='none'; },2000);
    //     },5000);
    // };