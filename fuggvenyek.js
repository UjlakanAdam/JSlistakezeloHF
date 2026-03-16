import { kartyakMegjelenit } from "./kartyak.js"

export function rendezesek(lista){
let gombElemek=document.getElementsByClassName("rendezes")
for (let index = 0; index < gombElemek.length; index++) {
    gombElemek[index].addEventListener("click", function(event){
        console.log(event.target.id)
        switch (event.target.id) {
            case "kor_no":
                lista.sort(function(a,b){

                    return a.atlagEletkor-b.atlagEletkor
                })
                kartyakMegjelenit(lista)
                console.log(lista)
                break;
            case "kor_csokk":
                lista.sort(function(a,b){
                return b.atlagEletkor-a.atlagEletkor
                })
                kartyakMegjelenit(lista)
                console.log(lista)
                break;
            case "nev_no":
                lista.sort(function(a,b){
                return a.fajnev > b.fajnev ? 1 : -1
                })
                kartyakMegjelenit(lista)
                console.log(lista)
                break;
            case "nev_csokk":
                lista.sort(function(a,b){
                return a.fajnev < b.fajnev ? 1 : -1
                })
                kartyakMegjelenit(lista)
                console.log(lista)
                break;
            default:
                break;
        }
    }) 
}
} 

export function szuresek(lista){
    const szuresGombELEMEK=document.querySelectorAll(".gomb")
    szuresGombELEMEK.forEach(function(button) {

        button.addEventListener("click", function(event){
            console.log(event.target.innerText)

        if(event.target.id === "osszes"){
            kartyakMegjelenit(lista)
            return}
            let szurt=event.target.innerText
            const szurtLISTA=lista.filter(function(a){
                return a.tipus===szurt.toLowerCase();
            })

            console.log(szurtLISTA)
            kartyakMegjelenit(szurtLISTA)
        })
    })
}
export function atlag(lista){
    let atlagElem=document.getElementById("atlag");
    let osszeg = lista.reduce(function(sum, a) {
        return sum + a.atlagEletkor;
    }, 0);
    let atlag = osszeg/lista.length;
    atlagElem.innerHTML=`<h2>Átlagéletkor: ${Math.round(atlag)} év<h2>`;
    console.log(atlag)
    console.log(atlagElem)

}