import { Vehicule } from "./classe/vehicule.js";

class Voiture extends Vehicule {
    constructor(marque, modele, kilometrage, annee, clim) {
        super(marque, modele, kilometrage, annee); 
        this.clim = clim;
    }

    display() {
        return "Auto : " + super.display() + " - " + (this.clim ? "Climatisée" : "Non Climatisée");
    }
}

class Moto extends Vehicule {
    constructor(marque, modele, kilometrage, annee) {
        super(marque, modele, kilometrage, annee); 
    }

    display() {
        return "Moto : " + super.display();
    }
}

let voiture1 = new Voiture("Bmw", "Serie 1", 50000, 2018, true);
let moto1 = new Moto("Yamaha", "MT-07", 15000, 2020);

const maVoiture = document.getElementById('voiture');
const maMoto = document.getElementById('moto');

maVoiture.innerText = voiture1.display();
maMoto.innerText = moto1.display();
