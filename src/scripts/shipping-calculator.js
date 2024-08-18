class ShippingCalculator {
  REGIONS = {
    'southeast': {
      price: 1.2,
      discount: 0.12,
      name: "Sudeste"
    },
    'south': {
      price: 1.1,
      discount: 0.1,
      name: "Sul"
    },
    'west-center': {
      price: 1.15,
      discount: 0.08,
      name: "Centro Oeste"
    },
  }
  FUEL_PRICE_PER_LITER = 2
  TRACKING_PRICE = 200

  constructor() {
    this.form = new Form("shipping-calculator")
    this.document = new Document("shipping-calculator")

    const startButton = this.document.select("start-button")
    const retartButton = this.document.select("restart-button")

    startButton.addEventListener(
      'click', (event) => this.handleStartButtonClick(event.currentTarget)
    )
    retartButton.addEventListener(
      'click', () => this.handleRestartButtonClick()
    )
    this.form.onSubmit = () => this.handleFormSubmit()
  }

  getGroup(age) {
    const ageRanges = [
      { start: 0, end: 14, group: 'criança' },
      { start: 15, end: 29, group: 'jovem' },
      { start: 30, end: 60, group: 'adulto' },
    ]

    for (const range of ageRanges) {
      if (age >= range.start && age <= range.end) {
        return range.group
      }
    }

  }

  formatPrice(price) {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
    return formatter.format(price)
  }

  hidePlaceholder() {
    const displayElement = this.document.select("placeholder")
    if (!displayElement) return
    displayElement.classList.add('hidden')
  }

  showDisplay() {
    const displayElement = this.document.select("display")
    if (!displayElement) return
    if (displayElement) displayElement.classList.remove('hidden')
  }

  clearResults() {
    const resultsElement = this.document.select("results")
    resultsElement.innerHTML = ""
  }

  renderResult(piecesTotal, fuelTotal, hasTracking, region) {
    const resultsElement = this.document.select("results")

    this.hidePlaceholder()
    this.showDisplay()

    const total = piecesTotal + fuelTotal + (hasTracking ? this.TRACKING_PRICE : 0)
    const formattedTotal = this.formatPrice(total)
    const formattedFuelTotal = this.formatPrice(fuelTotal)

    let message =
      `O valor total do frete é de ${formattedTotal}, incluindo ${formattedFuelTotal} para combustível`

    if (hasTracking) {
      const formattedTrackingPrice = this.formatPrice(this.TRACKING_PRICE)
      message += ` e ${formattedTrackingPrice} para o rastreamento`
    }

    const result = `
      <p
        data-shipping-calculator="message"
        class="calculator__result-message">
        ${message}
      </p>
  
      <div
        class="display">
        <h3 class="calculator__result-title">${region}</h3>
        <strong
          data-shipping-calculator="total"
          class="display__value">
          ${formattedTotal}
        </strong>
  
        <span class="display__divisor"></span>
  
        <div>
          <p
            class="display__message">
            Total de combustível
          </p>
          <strong
            data-shipping-calculator="total-fuel"
            class="calculator__result-title">${formattedFuelTotal}
          </strong>
        </div>`

    resultsElement.innerHTML += result
  }

  showButtonsGroup() {
    const buttonsGroup = document.querySelector("[data-age-group-calculator^='buttons-group']")
    if (!buttonsGroup) return

    const classForHiding = buttonsGroup.dataset.ageGroupCalculator.split(":")[1]
    if (buttonsGroup) buttonsGroup.classList.remove(classForHiding)
  }

  calculatePiecesPrice(piecesCount, region) {
    const price = this.REGIONS[region].price

    if (piecesCount > 1000) {
      const exceed = piecesCount - 1000
      const discount = price * this.REGIONS[region].discount
      return (price * piecesCount) + (exceed * discount)
    }

    return price * piecesCount
  }

  handleFormSubmit() {
    let hasErrors = false
    const piecesCountField = this.form.getField("pieces-count")
    const piecesCount = parseInt(piecesCountField.value)

    if (piecesCount <= 0) {
      this.form.showInputError(
        piecesCountField, 'Número de peças não pode ser menor ou igual a zero'
      )
      hasErrors = true
    }

    const distanceField = this.form.getField("distance")
    const distance = parseFloat(distanceField.value)

    if (distance <= 0) {
      this.form.showInputError(
        piecesCountField, 'Distância não pode ser menor ou igual a zero'
      )
      hasErrors = true
    }

    const trackingRadiosGroupValue = this.form.getRadioGroupValue("tracking")
    const hasTracking = trackingRadiosGroupValue === "true"

    const regions = this.form.getCheckboxGroupValues("region")

    if (hasErrors) return

    const totalFuel = this.FUEL_PRICE_PER_LITER * distance

    if (!regions.length) return

    this.clearResults()
    for (const region of regions) {
      const totalPieces = this.calculatePiecesPrice(piecesCount, region)
      this.renderResult(totalPieces, totalFuel, hasTracking, this.REGIONS[region].name)
    }
  }

  handleRestartButtonClick() {
    location.reload()
  }

  handleStartButtonClick(button) {
    button.remove()
    this.form.showForm()
  }
}

new ShippingCalculator()