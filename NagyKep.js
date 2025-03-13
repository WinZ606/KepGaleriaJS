import KiemeltKep from "./KiemeltKep.js";

export default class NagyKep {
  #azIndex = 0;
  #lista = [];
  constructor(lista) {
    this.nagyKepElem = document.getElementsByClassName("kiemeltkep")[0];
    this.#lista = lista;
    this.#azIndex = azIndex;
    new KiemeltKep(
      this.#lista[this.#azIndex].kep,
      this.#lista[this.#azIndex].cim,
      this.nagyKepElem
    );
    this.balElem = document.getElementsByClassName("bal")[0];
    this.jobbElem = document.getElementsByClassName("jobb")[0];
    this.esemenykezelo();
  }

  esemenykezelo() {
    this.balElem.addEventListener("click", () => {
      this.azIndex--;
      this.azIndex < 0
        ? (this.azIndex = this.#lista.length - 1)
        : (this.azIndex = this.azIndex);
      new KiemeltKep(
        this.#lista[this.azIndex].kep,
        this.#lista[this.azIndex].cim,
        this.nagyKepElem
      );
    });

    this.jobbElem.addEventListener("click", () => {
      this.azIndex++;
      this.azIndex > this.#lista.length - 1
        ? (azIndex = 0)
        : (azIndex = azIndex);
      new KiemeltKep(
        this.#lista[azIndex].kep,
        this.#lista[azIndex].cim,
        this.nagyKepElem
      );
    });
  }
}
