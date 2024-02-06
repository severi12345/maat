// Versio 1

/*
// Anna komennot, jolla tuodaan 'countries'-taulukko 'maatdata.js'-tiedostosta
import { countries } from './maatdata.js';
// Kun sivu on ladattu kokonaan, suoritetaan seuraava funktio
window.onload = function() {
// Etsitään ja tallennetaan viite 'countrylist'-elementtiin
const countryListDiv = document.getElementById('countrylist');
// Käydään läpi jokainen maa 'countries'-taulukossa
countries.forEach(country => {
// Luodaan uusi div-elementti jokaiselle maalle
let countryDiv = document.createElement('div');
// Asetetaan luokaksi 'country', jota käytetään CSS-tyylittelyyn
countryDiv.className = 'country';
// Lisätään maan nimi, pääkaupunki, väkiluku ja lippu div-elementin sisälle
countryDiv.innerHTML = `<h3>${country.name}</h3>
        <p>Pääkaupunki: ${country.capital}</p>
        <p>Väkiluku: ${country.population}</p>
        <img src="${country.flag}" alt="Flag of ${country.name}">`;
// Lisätään luotu div-elementti 'countrylist'-elementin sisälle
	countryListDiv.appendChild(countryDiv);
    });
};
*/

// Versio 2

import { countries } from './maatdata.js';

window.onload = function() {
    const countryListDiv = document.getElementById('countrylist');
    
    countries.forEach(country => {
        let countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        let countryName = document.createElement('button')
        countryDiv.innerHTML = `<h3>${country.name}</h3>
        <p>Pääkaupunki: ${country.capital}</p>
        <p>Väkiluku: ${country.population}</p>
        <img src="${country.flag}" alt="Flag of ${country.name}">`;
	    countryListDiv.appendChild(countryDiv);
    });
};