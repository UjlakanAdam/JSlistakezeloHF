/*hozz létre egy megjelenít metódust ami a paraméterben megkapja a lista egyetlen elemét és megjeleníti az articleelem-ben*/


 export function megjelenit(articleElem,adat={fajnev,tipus,atlagEletkor,erdekesseg, kep}){
       
    let kod=
        `<div class="kartya">
            <h2>${adat.fajnev}</h4>
            <img src="${adat.kep}" alt="${adat.fajnev}">               
                <p>${adat.tipus}</p>
                <p>Átlagos élettartam: ${adat.atlagEletkor}</p>
                <p>${adat.erdekesseg}</p>
        </div>`
    articleElem.innerHTML+=kod
}