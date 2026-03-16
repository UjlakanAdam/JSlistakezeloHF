import { megjelenit } from "./kartya.js";

export function kartyakMegjelenit(ALLATLISTA){
    const articleElem =document.querySelector("article")
    articleElem.innerHTML="";
    ALLATLISTA.forEach(function(allat, i) {
    megjelenit(articleElem, allat)
})
}

