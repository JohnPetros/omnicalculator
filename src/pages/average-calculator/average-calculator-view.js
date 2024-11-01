import { Form } from '../../utils/form'
import { Document } from '../../utils/document'

export class AverageCalculatorView {
  numberOfInputGroups = 3

  constructor() {
    this.form = new Form("average-calculator")
    this.document = new Document("average-calculator")
    const startButton = this.document.select("start-button")
    const retartButton = this.document.select("restart-button")
    const addInputGroupButton = this.document.select("add-input-group-button")

    startButton.addEventListener(
      'click', (event) => this.handleStartButtonClick(event.currentTarget)
    )
    retartButton.addEventListener(
      'click', () => this.handleRestartButtonClick()
    )
    addInputGroupButton.addEventListener(
      'click', () => this.handleAddInputGroupButtonClick()
    )
    this.form.onSubmit = () => this.handleFormSubmit()
  }

  calculate(gradesAndWeights, totalWeight) {
    let average = 0

    for (const { grade, weight } of gradesAndWeights) {
      average += grade * weight
    }

    return average / totalWeight
  }

  getStatus(average) {
    if (average <= 5) return "F"
    if (average <= 6) return "E"
    if (average <= 7) return "D"
    if (average <= 8) return "C"
    if (average <= 9) return "B"
    return "A"
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

  renderResult(average) {
    const status = this.getStatus(average)
    this.hidePlaceholder()
    this.showDisplay()

    const messageElement = this.document.select("message")
    const statusElement = this.document.select("status")
    const averageElement = this.document.select("average")

    messageElement.textContent =
      `Sua média ponderada é ${average.toFixed(2)}, sendo classificada como:`
    statusElement.textContent = status
    averageElement.textContent = average.toFixed(2)
  }

  appendInputGroup(number) {
    const inputGroups = this.document.select("inputs-groups")

    const inputGroup = `
    <div class="calculator__input-group">
       <div class="input">
         <label for="grade-${number}" class="input__label">Nota ${number}</label>
         <div class="input__field-container">
           <div class="input__icon">
             <i class="ph-bold ph-exam"></i>
           </div>
           <input
             data-average-calculator="grade-${number}"
             id="grade-${number}"
             type="number"
             name="grade-${number}"
             autofocus
             required
             class="input__field">
         </div>
       </div>

       <div class="input">
         <label for="weight-2" class="input__label">Peso ${number}</label>
         <div class="input__field-container">
           <div class="input__icon">
             <i class="ph-bold ph-barbell"></i>
           </div>
           <input
             data-average-calculator="weight-${number}"
             id="weight-${number}"
             type="number"
             name="weight-${number}"
             required
             class="input__field">
         </div>
       </div>
   </div>`

    inputGroups.innerHTML += inputGroup
  }

  renderInputGroups() {
    for (let number = 1; number <= this.numberOfInputGroups; number++) {
      this.appendInputGroup(number)
    }
  }

  handleFormSubmit() {
    const gradesAndWeights = []
    let totalWeight = 0
    let hasErrors = false

    for (let number = 1; number <= this.numberOfInputGroups; number++) {
      const gradeField = this.form.getField(`grade-${number}`)
      const weightField = this.form.getField(`weight-${number}`)
      const grade = parseInt(gradeField.value)
      const weight = parseInt(weightField.value)

      if (grade < 0 || grade > 10) {
        this.form.showInputError(gradeField, 'Nota não está entre 0 e 10')
        hasErrors = true
      }

      if (weight < 1 || weight > 10) {
        this.form.showInputError(weightField, 'Peso não está entre 1 e 10')
        hasErrors = true
      }

      gradesAndWeights.push({ grade, weight })
      totalWeight += weight
    }

    if (hasErrors) return
    const average = this.calculate(gradesAndWeights, totalWeight)
    this.renderResult(average)
    this.form.focusField("grade-1")
  }

  handleAddInputGroupButtonClick() {
    this.numberOfInputGroups++
    this.appendInputGroup(this.numberOfInputGroups)
  }

  handleRestartButtonClick() {
    location.reload()
  }

  handleStartButtonClick(button) {
    button.parentElement.remove()
    this.form.showForm()
    this.renderInputGroups()
  }
}
