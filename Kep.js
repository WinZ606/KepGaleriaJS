export default class Kep{
    #elUt;
    #cim;
    constructor(elUt, cim, szuloElem){
        this.#elUt = elUt;
        this.#cim = cim;
        this.szuloElem = szuloElem;
        this.megjelenit();
    }
    megjelenit(){
        let html = `<div class="kep">
                        <img src="${this.#elUt}" alt="${this.#cim}">
                    </div>`;
        this.szuloElem.innerHTML += html;
    }
}