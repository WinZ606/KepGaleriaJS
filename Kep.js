export default class Kep {
  #elUt;
  #cim;
  #index;
  constructor(elUt, cim, index, szuloElem) {
    this.#elUt = elUt;
    this.#cim = cim;
    this.#index = index;
    this.szuloElem = szuloElem;
    this.megjelenit();
    this.kepElem = document.querySelectorAll(".kep:last-child")[0];
    this.kepElem.addEventListener("click", () => {
      console.log(this.#index);
      const e = new CustomEvent("kivalaszt", { detail: this.#index });
      window.dispatchEvent(e);
    });
  }
  megjelenit() {
    let html = `<div class="kep">
                        <img src="${this.#elUt}" alt="${this.#cim}">
                </div>`;
    this.szuloElem.insertAdjacentHTML("beforeend", html);
  }
}
