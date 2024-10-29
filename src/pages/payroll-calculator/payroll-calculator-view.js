import { Form } from '../../utils/form'
import { Document } from '../../utils/document'
import { CurrenyFormatter } from '../../utils/currency-formatter'

export class PayrollCalculatorView {
  HOURLY_SALARY = {
    employee: {
      morning: 0.1,
      afternoon: 0.12,
      night: 0.12,
    },
    manager: {
      morning: 0.2,
      afternoon: 0.25,
      night: 0.3,
    },
  }
  minimumSalary = 0
  workers = []

  constructor() {
    this.form = new Form("payroll-calculator")
    this.document = new Document("payroll-calculator")

    const startButton = this.document.select("start-button")
    const restartButton = this.document.select("restart-button")
    const calculateButton = this.document.select("calculate-button")

    startButton.addEventListener(
      'click', (event) => this.handleStartButtonClick(event.currentTarget)
    )
    restartButton.addEventListener(
      'click', () => this.handleRestartButtonClick()
    )
    calculateButton.addEventListener(
      'click', () => this.handleCalculateButtonClick()
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

  renderResults() {
    let payroll = 0
    const currenyFormatter = new CurrenyFormatter()
    const resultsElement = this.document.select("results")
    this.hidePlaceholder()
    this.showDisplay()

    for (const worker of this.workers) {
      const initialSalary = this.calculateInitialSalary(worker)
      const formattedInitialSalary = currenyFormatter.format(initialSalary)

      const mealVoucher = this.calculateMealVouncher(initialSalary)
      const formattedMealVoucher = currenyFormatter.format(mealVoucher)

      const finalSalary = initialSalary + mealVoucher
      const formattedFinalSalary = currenyFormatter.format(finalSalary)

      payroll += finalSalary

      const message =
        `O funcionário com código ${worker.code} possui o salário de ${formattedFinalSalary}, considerando as ${worker.workedHoursCount} horas trabalhadas e ${formattedMealVoucher} de vale alimentação`

      const result = `
        <p
          data-payroll-calculator="message"
          class="calculator__result-message">
          ${message}
        </p>
    
        <div
          class="display">
          <h4 class="calculator__result-title">Sakário final</h4>
          <strong
            data-payroll-calculator="total"
            class="display__value">
            ${formattedFinalSalary}
          </strong>
    
          <span class="display__divisor"></span>
    
          <div>
            <p
              class="display__message">
              Salário inicial
            </p>
            <strong
              data-payroll-calculator="total-fuel"
              class="calculator__result-title">${formattedInitialSalary}
            </strong>
          </div>`

      resultsElement.innerHTML += result
    }

    const payrollTitleElement = this.document.select("payroll-title")
    payrollTitleElement.textContent = `Folha de pagamento para ${this.workers.length} funcionários`
    const formattedPayroll = currenyFormatter.format(payroll)
    const payrollElement = this.document.select("payroll")
    payrollElement.textContent = formattedPayroll
  }

  showButtonsGroup() {
    const buttonsGroup = document.querySelector("[data-age-group-calculator^='buttons-group']")
    if (!buttonsGroup) return

    const classForHiding = buttonsGroup.dataset.ageGroupCalculator.split(":")[1]
    if (buttonsGroup) buttonsGroup.classList.remove(classForHiding)
  }

  calculateMealVouncher(initialSalary) {
    if (initialSalary <= 800) return initialSalary * 0.25
    if (initialSalary <= 1200) return initialSalary * 0.20
    return initialSalary * 0.15
  }

  calculateInitialSalary(worker) {
    const minimumHourlySalary =
      this.HOURLY_SALARY[worker.category][worker.workShift] * this.minimumSalary
    return worker.workedHoursCount * minimumHourlySalary
  }

  handleFormSubmit() {
    const codeField = this.form.getField("code")
    const code = parseInt(codeField.value)

    const workedHoursCountField = this.form.getField("worked-hours-count")
    const workedHoursCount = parseInt(workedHoursCountField.value)
    if (workedHoursCount < 0) {
      this.form.showInputError(
        workedHoursCountField, 'Número de horas trabalhadas não pode ser menor que zero'
      )
      return
    }

    const minimumSalaryField = this.form.getField("minimum-salary")
    const minimumSalary = parseFloat(minimumSalaryField.value)
    if (minimumSalary < 0) {
      this.form.showInputError(
        minimumSalaryField, 'Salário mínimo não pode ser menor que zero'
      )
      return
    }
    this.minimumSalary = minimumSalary

    const category = this.form.getRadioGroupValue("category")
    const workShift = this.form.getRadioGroupValue("work-shift")

    const worker = {
      code,
      workedHoursCount,
      category,
      workShift,
    }

    this.form.clear()
    this.workers.push(worker)
  }

  handleCalculateButtonClick() {
    if (this.workers.length) {
      this.clearResults()
      this.renderResults()
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
