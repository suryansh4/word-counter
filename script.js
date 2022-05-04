let ele1=document.getElementById(`textarea`);

ele1.addEventListener(`input`,function(){
    let char=this.value;
    // console.log(char);
    document.getElementById(`char`).innerHTML=`${char.length}`
})

ele1.addEventListener(`input`,function(){
    let word=this.value;
    word=word.trim();
    let clearword=word.split(` `);
     
    document.getElementById(`words`).innerHTML=`${clearword.length}`
})