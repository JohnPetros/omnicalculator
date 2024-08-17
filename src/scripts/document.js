class Document {
  #dataset

  constructor(dataset) {
    this.#dataset = dataset
  }

  select(elementName) {
    return document.querySelector(`[data-${this.#dataset}='${elementName}']`)
  }
}