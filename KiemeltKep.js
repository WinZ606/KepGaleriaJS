export default class KiemeltKep{
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
                        <h3>${this.#cim}</h3>
                        <img src="${this.#elUt}" alt="${this.#cim}">
                    </div>`;
        this.szuloElem.innerHTML = html;
    }
}