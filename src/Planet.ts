
import { CelestialBody } from "./CelestialBody";

export class Bolygo implements CelestialBody{
    constructor(
        public nev: string, 
        public kor: number, 
        public atmero: number, 
        public vizArany: number){}
}