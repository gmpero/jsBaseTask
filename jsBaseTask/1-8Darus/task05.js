// Написать функцию, которая принимает строку (в этом тексте 3-5 предложений), 
// верните каждое первое слово в каждом предложении, через запятую.

string = "Хорошая погода. Красивая природа. Дует лёгкий, прохладный ветерок."

function firstWords(string){
    return string.match(/(?<=(?:^|\.)\s*)\S+(?=[^.]*(?:\.|$))/sg).join(", ");
   // / +(?<=\. +)/g[Symbol.split](string)
    //arrProposal = string.split(".");
    //for(let i = 0; i<(arrProposal.length)-1; i++ ){
        //y = arrProposal[i];
    // }
}

console.log(firstWords(string));