import { ALLATLISTA } from "./adat.js";

import { kartyakMegjelenit } from "./kartyak.js";

import { atlag, rendezesek, szuresek } from "./fuggvenyek.js";


/*for (let index = 0; index < ALLATLISTA.length; index++) {
    megjelenit(ALLATLISTA[index])    
    
}*/

kartyakMegjelenit(ALLATLISTA)
rendezesek(ALLATLISTA)
szuresek(ALLATLISTA)
atlag(ALLATLISTA)

/*minden gombra tegyél egy eseménykezelőt, ami kattintásra kiírja a gomb id-ját*/

