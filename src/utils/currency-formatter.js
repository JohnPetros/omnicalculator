export class CurrenyFormatter {
  #formatter

  constructor() {
    this.#formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  format(amount) {
    return this.#formatter.format(amount)
  }
}