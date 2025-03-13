import KiemeltKep from "./KiemeltKep.js";

export default class NagyKep {
  #aktIndex = 0;
  #lista = [];

  constructor(lista) {
    this.nagyKepElem = document.getElementsByClassName("kiemeltkep")[0];
    this.#lista = lista;
    new KiemeltKep(
      this.#lista[this.#aktIndex].kep,
      this.#lista[this.#aktIndex].cim,
      this.nagyKepElem
    );

    this.balElem = document.getElementsByClassName("bal")[0];
    this.jobbElem = document.getElementsByClassName("jobb")[0];
    this.esemenykezelok();
  }
  esemenykezelok() {
    /* feliratkozunk a saját eseményünkre */
    window.addEventListener("kivalaszt", (event) => {
      console.log(event.detail);
      this.#aktIndex = event.detail;
      new KiemeltKep(
        this.#lista[this.#aktIndex].kep,
        this.#lista[this.#aktIndex].cim,
        this.nagyKepElem
      );
    });

    this.balElem.addEventListener("click", () => {
      this.#aktIndex--;
      this.#aktIndex < 0
        ? (this.#aktIndex = this.#lista.length - 1)
        : (this.#aktIndex = this.#aktIndex);
      new KiemeltKep(
        this.#lista[this.#aktIndex].kep,
        this.#lista[this.#aktIndex].cim,
        this.nagyKepElem
      );
    });

    this.jobbElem.addEventListener("click", () => {
      this.#aktIndex++;
      this.#aktIndex > this.#lista.length - 1
        ? (this.#aktIndex = 0)
        : (this.#aktIndex = this.#aktIndex);
      new KiemeltKep(
        this.#lista[this.#aktIndex].kep,
        this.#lista[this.#aktIndex].cim,
        this.nagyKepElem
      );
    });
  }
}
