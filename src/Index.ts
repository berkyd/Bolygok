import { CelestialBody } from './CelestialBody'
import { Bolygo } from './Planet';

const celestialBodies: CelestialBody[] = [];

document.getElementById('submitButton')!.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('errors')!.innerHTML = "";

    let bolygoNev: string = (document.getElementById('bolygoNev') as HTMLInputElement).value.toString().trim();
    let bolygoKor: number = (document.getElementById('bolygoKor') as HTMLInputElement).valueAsNumber;
    let bolygoAtmero = (document.getElementById('bolygoAtmero') as HTMLInputElement).valueAsNumber;
    let bolygoViz = (document.getElementById('bolygoViz') as HTMLInputElement).valueAsNumber;

    const minta: RegExp = /^[ a-zA-Z]{2,}$/;
    const nevKiir: boolean = minta.test(bolygoNev);
    const korKiir: boolean = bolygoKor > 0;
    const atmeroKiir: boolean = bolygoAtmero >= 3000;
    const vizKiir: boolean = bolygoViz >= 0 && bolygoViz <= 100;

    let hibaUzenet = "A ";
    if (nevKiir && korKiir && atmeroKiir && vizKiir){
        celestialBodies.push(new Bolygo(bolygoNev, bolygoKor, bolygoAtmero, bolygoViz));
        document.getElementById('bolygoSzam')!.textContent = `Bolygók száma: ${celestialBodies.length}`
        document.getElementById('atlagKor')!.textContent = `A bolygók átlag életkora: 
        ${celestialBodies.reduce((sum, item) => sum + item.kor, 0) / celestialBodies.length}`
    } else {
        if (!nevKiir){
            hibaUzenet += "név, "
        }
        if (!korKiir) {hibaUzenet += "életkor, "}
        if (!atmeroKiir) {hibaUzenet += "átmérő, "}
        if (!vizKiir) {hibaUzenet += "vízfelület, "}

        hibaUzenet += " Hibás kitöltés!"
        let doc = document.createElement('doc');
        doc.style.color = "red";
        doc.textContent = hibaUzenet;
        document.getElementById('errors')!.appendChild(doc);
    }
    

})