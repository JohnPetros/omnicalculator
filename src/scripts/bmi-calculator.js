class BmiCalculator {
  constructor() {
    const form = new Form("[data-bmi-calculator='form']")
    this.document = new Document("average-calculator")
    form.onSubmit = this.handleFormSubmit()
  }

  calculate(weight, height) {
    const bmi = weight / Math.pow(height / 100, 2)
    return parseFloat(bmi.toFixed(2))
  }

  getStatus(bmi) {
    if (bmi <= 16) return "Baixo peso grave"
    if (bmi <= 18.49) return "Baixo peso"
    if (bmi <= 24.99) return "Peso normal"
    if (bmi <= 29.99) return "Sobrepeso"
    if (bmi <= 34.99) return "Obesidade grau I"
    if (bmi <= 39.99) return "Obesidade grau II"
    return "Obesidade grau III"
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

  renderResult(bmi, username) {
    const weightStatus = this.getStatus(bmi)

    this.hidePlaceholder()
    this.showDisplay()

    const messageElement = this.document.select("message")
    const statusElement = this.document.select("status")
    const bmiElement = this.document.select("bmi")

    messageElement.textContent =
      `${username}, você possui um índice de massa corporal igual a ${bmi}, sendo classificado como:`
    statusElement.textContent = weightStatus
    bmiElement.textContent = `${bmi} KG/M²`
  }

  handleFormSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget

    const usernameInput = form.querySelector("[data-bmi-calculator='username']")
    const weightInput = form.querySelector("[data-bmi-calculator='weight']")
    const heightInput = form.querySelector("[data-bmi-calculator='height']")

    if (!usernameInput || !weightInput || !heightInput) return

    const username = usernameInput.value
    const weight = parseFloat(weightInput.value)
    const height = parseFloat(heightInput.value)

    const bmi = this.calculate(weight, height)

    this.renderResult(bmi, username)
  }
}

new BmiCalculator()