class BmiCalculator {
  constructor() {
    const form = document.querySelector("[data-bmi-calculator='form']")
    if (!form) return

    form.addEventListener('submit', (event) => this.handleSubmit(event))
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
    const displayElement = document.querySelector("[data-bmi-calculator^='placeholder']")
    if (!displayElement) return

    const classForHiding = displayElement.dataset.bmiCalculator.split(":")[1]
    if (displayElement) displayElement.classList.add(classForHiding)
  }

  showDisplay() {
    const displayElement = document.querySelector("[data-bmi-calculator^='display']")
    if (!displayElement) return

    const classForHiding = displayElement.dataset.bmiCalculator.split(":")[1]
    if (displayElement) displayElement.classList.remove(classForHiding)
  }

  renderResult(bmi, username) {
    const weightStatus = this.getStatus(bmi)

    this.hidePlaceholder()
    this.showDisplay()

    const messageElement = document.querySelector("[data-bmi-calculator='message']")
    const statusElement = document.querySelector("[data-bmi-calculator='status']")
    const bmiElement = document.querySelector("[data-bmi-calculator='bmi']")

    messageElement.textContent =
      `${username}, você possui um índice de massa corporal igual a ${bmi}, sendo classificado como:`
    statusElement.textContent = weightStatus
    bmiElement.textContent = `${bmi} KG/M²`
  }

  handleSubmit(event) {
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