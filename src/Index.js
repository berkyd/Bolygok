"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bolygo_1 = require("./Planet");
const celestialBodies = [];
document.getElementById('submitButton').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('errors').innerHTML = "";
    let bolygoNev = document.getElementById('bolygoNev').value.toString().trim();
    let bolygoKor = document.getElementById('bolygoKor').valueAsNumber;
    let bolygoAtmero = document.getElementById('bolygoAtmero').valueAsNumber;
    let bolygoViz = document.getElementById('bolygoViz').valueAsNumber;
    const minta = /^[ a-zA-Z]{2,}$/;
    const nevKiir = minta.test(bolygoNev);
    const korKiir = bolygoKor > 0;
    const atmeroKiir = bolygoAtmero >= 1500;
    const vizKiir = bolygoViz >= 0 && bolygoViz <= 100;
    console.log(bolygoNev);
    console.log(bolygoKor);
    console.log(bolygoAtmero);
    console.log(bolygoViz);
    let hibaUzenet = "A ";
    if (bolygoNev && bolygoKor && bolygoAtmero && bolygoViz) {
        celestialBodies.push(new Bolygo_1.Planet(bolygoNev, bolygoKor, bolygoAtmero, bolygoViz));
        document.getElementById('bolygoSzam').textContent = `Bolygók száma: ${celestialBodies.length}`;
        document.getElementById('atlagKor').textContent = `A bolygók átlag életkora: 
        ${celestialBodies.reduce((sum, item) => sum + item.kor, 0) / celestialBodies.length}`;
    }
    else {
        if (!nevKiir) {
            hibaUzenet += "név, ";
        }
        if (!korKiir) {
            hibaUzenet += "életkor, ";
        }
        if (!atmeroKiir) {
            hibaUzenet += "átmérő, ";
        }
        if (!vizKiir) {
            hibaUzenet += "vízfelület";
        }
        hibaUzenet += " Hibás kitöltés!";
        let doc = document.createElement('p');
        doc.style.color = "red";
        dpc.textContent = hibaUzenet;
        document.getElementById('errors').appendChild(doc);
    }
});