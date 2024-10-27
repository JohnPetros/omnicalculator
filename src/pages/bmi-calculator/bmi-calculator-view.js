import { Form } from '../../utils/form'
import { Document } from '../../utils/document'

export class BmiCalculatorView {
  constructor() {
    this.form = new Form("bmi-calculator")
    this.document = new Document("bmi-calculator")
    this.form.onSubmit = () => this.handleFormSubmit()
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

  handleFormSubmit() {
    const usernameField = this.form.getField("username")
    const weightField = this.form.getField("weight")
    const heightField = this.form.getField("height")
    if (!weightField.value || !heightField.value) return

    const username = usernameField.value
    const weight = parseFloat(weightField.value)
    const height = parseFloat(heightField.value)

    const bmi = this.calculate(weight, height)
    this.renderResult(bmi, username)
    this.form.clear()
    usernameField.value = username
    this.form.focusField("height")
  }
}
